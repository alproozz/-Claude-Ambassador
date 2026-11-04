"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Check, Palette, RotateCcw, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PRESETS = [
  { name: "Azure Blue", hex: "#2F7BEA" },
  { name: "Indigo", hex: "#6366F1" },
  { name: "Violet", hex: "#8B5CF6" },
  { name: "Teal", hex: "#0D9488" },
  { name: "Emerald", hex: "#059669" },
  { name: "Cyan", hex: "#0891B2" },
  { name: "Rose", hex: "#E11D48" },
];

const DEFAULT_COLOR = PRESETS[0].hex;
const STORAGE_KEY = "portfolio-accent-color";
const BACKGROUND = "#0E0F11";

function readStoredColor(): string {
  if (typeof window === "undefined") return DEFAULT_COLOR;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value && /^#[0-9a-f]{6}$/i.test(value) ? value.toUpperCase() : DEFAULT_COLOR;
  } catch {
    return DEFAULT_COLOR;
  }
}

function luminance(hex: string): number {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export default function ColorPicker() {
  const [color, setColor] = useState<string>(readStoredColor);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply the accent to the whole page and remember it in this browser.
  useEffect(() => {
    const root = document.documentElement;
    const isDefault = color === DEFAULT_COLOR;
    if (isDefault) root.style.removeProperty("--color-accent");
    else root.style.setProperty("--color-accent", color);
    try {
      if (isDefault) window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, color);
    } catch {
      // Storage can be unavailable (private mode); the color still applies for this visit.
    }
  }, [color]);

  // Close on Escape or click outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const activePreset = PRESETS.find((p) => p.hex === color);
  const lowContrast = contrast(color, "#FFFFFF") < 3 || contrast(color, BACKGROUND) < 3;

  return (
    <div ref={containerRef} className="fixed bottom-4 left-4 z-[60]">
      <AnimatePresence>
        {open && (
          <motion.div
            id="accent-color-panel"
            role="dialog"
            aria-label="Accent color"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-14 left-0 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-surface-border bg-surface/95 backdrop-blur-md p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-foreground">Accent Color</p>
                <p className="text-xs text-muted">{activePreset ? activePreset.name : "Custom"} · <span className="font-mono">{color}</span></p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-background transition-colors"
                aria-label="Close color picker"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {PRESETS.map((preset) => {
                const selected = preset.hex === color;
                return (
                  <button
                    key={preset.hex}
                    type="button"
                    onClick={() => setColor(preset.hex)}
                    aria-pressed={selected}
                    aria-label={preset.name}
                    title={`${preset.name} ${preset.hex}`}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center ring-offset-2 ring-offset-surface transition-all ${selected ? "ring-2 ring-foreground" : "group-hover:scale-110"}`}
                      style={{ backgroundColor: preset.hex }}
                    >
                      {selected && <Check size={16} className="text-white" />}
                    </span>
                    <span className="text-[10px] leading-tight text-muted group-hover:text-foreground text-center">{preset.name}</span>
                  </button>
                );
              })}

              <label className="flex flex-col items-center gap-1.5 cursor-pointer group" title="Pick any color">
                <span
                  className={`relative w-9 h-9 rounded-full overflow-hidden ring-offset-2 ring-offset-surface transition-all ${activePreset ? "group-hover:scale-110" : "ring-2 ring-foreground"}`}
                  style={{ background: "conic-gradient(#ef4444, #eab308, #22c55e, #06b6d4, #3b82f6, #a855f7, #ef4444)" }}
                >
                  <input
                    type="color"
                    value={color.toLowerCase()}
                    onChange={(e) => setColor(e.target.value.toUpperCase())}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-label="Custom color"
                  />
                </span>
                <span className="text-[10px] leading-tight text-muted group-hover:text-foreground">Custom</span>
              </label>
            </div>

            {lowContrast && (
              <p className="flex items-start gap-2 text-xs text-foreground/80 bg-background rounded-lg p-2.5 mb-3 border border-surface-border">
                <AlertTriangle size={14} className="shrink-0 mt-0.5" />
                This color may be hard to read on buttons or the dark background.
              </p>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-surface-border">
              <span className="text-[11px] text-muted">Saved in this browser</span>
              <button
                type="button"
                onClick={() => setColor(DEFAULT_COLOR)}
                disabled={color === DEFAULT_COLOR}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground disabled:opacity-40 disabled:hover:text-muted transition-colors"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="accent-color-panel"
        aria-label="Change accent color"
        className="w-11 h-11 rounded-full border border-surface-border bg-surface shadow-lg flex items-center justify-center text-accent hover:border-accent/60 transition-colors"
      >
        <Palette size={18} />
      </button>
    </div>
  );
}
