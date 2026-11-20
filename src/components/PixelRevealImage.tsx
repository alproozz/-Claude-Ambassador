"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface PixelRevealImageProps {
  src: string;
  alt: string;
  sizes?: string;
  imgClassName?: string;
  /** ms before the first sweep starts (synced with IntroLoader) */
  delay?: number;
  /** ms of one sweep */
  duration?: number;
  /** "ltr": band sweeps left -> right; "rtl": right -> left */
  direction?: "ltr" | "rtl";
  /** Preload the image (above-the-fold hero usage). */
  preload?: boolean;
}

/**
 * Travelling mosaic band ("light glint"):
 * the photo stays sharp; a stripe of pixelation plus a light sheen sweeps
 * across it, like a glint passing over the image. Runs once after the intro
 * loader, then again every time the pointer enters the photo box.
 * Implemented with an HTML5 Canvas overlay on top of the regular next/image,
 * since plain CSS cannot produce dynamic block pixelation.
 */
export default function PixelRevealImage({
  src,
  alt,
  sizes,
  imgClassName,
  delay = 3000,
  duration = 1600,
  direction = "ltr",
  preload = false,
}: PixelRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Respect reduced-motion preference: no sweep at all.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let animating = false;
    let raf = 0;
    let timer = 0;

    // Geometry + mosaic levels, rebuilt whenever the box size changes.
    let cw = 0;
    let ch = 0;
    let band = 0;
    let levels: HTMLCanvasElement[] = [];
    const blockSizes = [40, 22, 11]; // coarse -> fine (CSS px)

    const img = new window.Image();
    img.src = src;

    const setup = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return false;
      if (rect.width === cw && rect.height === ch && levels.length) {
        return true; // size unchanged, reuse prepared levels
      }
      cw = rect.width;
      ch = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cw * dpr);
      canvas.height = Math.round(ch * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Same math as CSS object-cover so the mosaic lines up with the <Image>.
      const scale = Math.max(cw / img.width, ch / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      levels = blockSizes.map((block) => {
        const c = document.createElement("canvas");
        c.width = Math.max(1, Math.ceil(cw / block));
        c.height = Math.max(1, Math.ceil(ch / block));
        const cctx = c.getContext("2d")!;
        const s = c.width / cw;
        cctx.drawImage(img, dx * s, dy * s, dw * s, dh * s);
        return c;
      });

      band = Math.max(110, cw * 0.26);
      return true;
    };

    const drawMosaicStrip = (
      level: HTMLCanvasElement,
      x0: number,
      x1: number
    ) => {
      const from = Math.max(0, x0);
      const to = Math.min(cw, x1);
      if (to <= from) return;
      ctx.save();
      ctx.beginPath();
      ctx.rect(from, 0, to - from, ch);
      ctx.clip();
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(level, 0, 0, cw, ch);
      ctx.restore();
    };

    // Band layout: coarse core, finer toward both edges.
    const zones = [
      { f0: 0.0, f1: 0.18, li: 2 }, // fine edge
      { f0: 0.18, f1: 0.38, li: 1 }, // medium
      { f0: 0.38, f1: 0.62, li: 0 }, // coarse core
      { f0: 0.62, f1: 0.82, li: 1 }, // medium
      { f0: 0.82, f1: 1.0, li: 2 }, // fine edge
    ];

    const render = (p: number) => {
      ctx.clearRect(0, 0, cw, ch);

      // Band center travels fully across (and past) the box.
      const travel = cw + band * 2;
      const center =
        direction === "ltr" ? -band + p * travel : cw + band - p * travel;
      const start = center - band / 2;

      for (const z of zones) {
        drawMosaicStrip(levels[z.li], start + z.f0 * band, start + z.f1 * band);
      }

      // Light sheen riding on the band ("kilauan cahaya").
      const sheenW = band * 0.6;
      if (center > -sheenW && center < cw + sheenW) {
        const g = ctx.createLinearGradient(
          center - sheenW,
          0,
          center + sheenW,
          0
        );
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(0.5, "rgba(255,255,255,0.3)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(center - sheenW, 0, sheenW * 2, ch);
      }
    };

    const play = () => {
      if (cancelled || animating || !img.complete || !setup()) return;
      animating = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - t0) / duration);
        const eased =
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        render(eased);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          ctx.clearRect(0, 0, cw, ch);
          animating = false;
        }
      };
      raf = requestAnimationFrame(tick);
    };

    // Replay on hover. Listen on the parent (the rounded "group" box):
    // a sibling overlay with a higher z-index sits above this wrapper and
    // would otherwise swallow the pointer events.
    const host = container.parentElement ?? container;
    const onEnter = () => play();
    host.addEventListener("mouseenter", onEnter);

    // First sweep, once the image is loaded and the intro loader has opened.
    const schedule = () => {
      if (!cancelled && !timer) timer = window.setTimeout(play, delay);
    };
    img.onload = schedule;
    if (img.complete && img.naturalWidth > 0) schedule();

    return () => {
      cancelled = true;
      img.onload = null;
      host.removeEventListener("mouseenter", onEnter);
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [src, delay, duration, direction]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Image src={src} alt={alt} fill className={imgClassName} sizes={sizes} preload={preload} />
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 h-full w-full"
      />
    </div>
  );
}
