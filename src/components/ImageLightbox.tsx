"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

type Props = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function ImageLightbox({ images, index, onClose, onIndexChange }: Props) {
  const open = index !== null;
  const count = images.length;
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  // Move focus into the lightbox on open, and back to the clicked image on close.
  useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => openerRef.current?.focus();
  }, [open]);

  // Lock page scroll and handle keyboard navigation while open.
  useEffect(() => {
    if (index === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && count > 1) onIndexChange((index + 1) % count);
      else if (e.key === "ArrowLeft" && count > 1) onIndexChange((index - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [index, count, onClose, onIndexChange]);

  const current = index !== null ? images[index] : null;
  const go = (step: number) => {
    if (index !== null) onIndexChange((index + step + count) % count);
  };

  const navButton =
    "absolute top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-colors";

  return (
    <AnimatePresence>
      {current && index !== null && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
            aria-label="Close full image"
          >
            <X size={20} />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                className={`${navButton} left-2 md:left-6`}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); go(1); }}
                className={`${navButton} right-2 md:right-6`}
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <motion.figure
            key={current.src}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            drag={count > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(1);
              else if (info.offset.x > 60) go(-1);
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-full"
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              draggable={false}
              sizes="92vw"
              className="w-auto h-auto max-w-[92vw] max-h-[78vh] rounded-xl border border-white/10 shadow-2xl object-contain select-none"
            />
            <figcaption className="mt-4 text-sm text-white/85 text-center px-12">
              {current.caption ?? current.alt}
              {count > 1 && <span className="text-white/50"> · {index + 1} / {count}</span>}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
