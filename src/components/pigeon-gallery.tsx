'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/i18n/config";

const galleryImages = Array.from(
  { length: 6 },
  (_, index) => `/images/pages/pigeon_houses/h_${index + 1}.avif`
);

const copy = {
  el: {
    prev: "Προηγούμενη εικόνα",
    next: "Επόμενη εικόνα",
    close: "Κλείσιμο",
  },
  en: {
    prev: "Previous image",
    next: "Next image",
    close: "Close",
  },
  fr: {
    prev: "Image précédente",
    next: "Image suivante",
    close: "Fermer",
  },
} satisfies Record<Locale, { prev: string; next: string; close: string }>;

type PigeonGalleryProps = {
  locale: Locale;
  title: string;
  altPrefix: string;
};

export function PigeonGallery({ locale, title, altPrefix }: PigeonGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const currentImage = galleryImages[activeIndex];

  useEffect(() => {
    if (!viewerOpen) {
      return;
    }
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [viewerOpen]);

  function openViewer(index: number) {
    setActiveIndex(index);
    setViewerOpen(true);
  }

  function closeViewer() {
    setViewerOpen(false);
  }

  function goTo(delta: number) {
    setActiveIndex((prev) => {
      const next = (prev + delta + galleryImages.length) % galleryImages.length;
      return next;
    });
  }

  return (
    <div className="mt-8 grid gap-4 rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-lg backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400">
        {title}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((src, index) => (
          <figure
            key={src}
            className="overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => openViewer(index)}
              className="group relative block aspect-[4/3] w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Image
                src={src}
                alt={`${altPrefix} ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 100vw, 320px"
                priority={index < 2}
              />
            </button>
          </figure>
        ))}
      </div>

      {viewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
        >
          <div className="absolute inset-0" onClick={closeViewer} aria-hidden />
          <div className="relative z-10 w-full max-w-5xl space-y-4 text-white">
            <div className="flex items-center justify-between pb-2 sm:pb-3 lg:pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                {title}
              </span>
              <button
                type="button"
                onClick={closeViewer}
                className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white sm:text-sm lg:text-base"
              >
                {copy[locale].close}
              </button>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-black">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={currentImage}
                    alt={`${altPrefix} ${activeIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1600px) 100vw, 1600px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <button
                type="button"
                onClick={() => goTo(-1)}
                aria-label={copy[locale].prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-3 text-white transition hover:bg-black/60"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(1)}
                aria-label={copy[locale].next}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 p-3 text-white transition hover:bg-black/60"
              >
                →
              </button>
            </div>
            <p className="text-center text-sm text-white/80">
              {altPrefix} {activeIndex + 1}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

