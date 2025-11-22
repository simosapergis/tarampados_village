import type { Locale } from "@/i18n/config";
import { SiteFooter } from "@/components/site-footer";

import type { ReactNode } from "react";

type Section = {
  heading: string;
  paragraphs: ReactNode[];
};

type PageShellProps = {
  title: string;
  introduction: string[];
  sections?: Section[];
  highlights?: string[];
  footerNote?: string;
  heroImage?: string;
  locale: Locale;
  showFooter?: boolean;
};

const eyebrowCopy: Record<Locale, string> = {
  el: "Ταραμπάδος · Τήνος",
  en: "Tarampados · Tinos",
  fr: "Tarampados · Tinos",
};

export function PageShell({
  title,
  introduction,
  sections = [],
  highlights: _highlights = [],
  footerNote,
  heroImage,
  locale,
  showFooter = true,
}: PageShellProps) {
  void _highlights;
  const eyebrowClass = heroImage
    ? "text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
    : "text-xs font-semibold uppercase tracking-[0.35em] text-stone-500";
  const titleClass = heroImage
    ? "text-4xl font-serif text-white"
    : "text-4xl font-serif text-stone-900";
  const introClass = heroImage
    ? "space-y-4 text-lg leading-8 text-white/90"
    : "space-y-4 text-lg leading-8 text-stone-700";

  return (
    <div className="bg-stone-50 text-stone-900">
      {heroImage && (
        <section
          className="relative w-full bg-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "auto 100%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-6xl items-end px-6 py-12">
            <div className="w-full rounded-3xl border border-white/20 bg-black/40 p-10 shadow-2xl backdrop-blur-lg">
              <p className={eyebrowClass}>{eyebrowCopy[locale]}</p>
              <h1 className={titleClass}>{title}</h1>
              <div className={introClass}>
                {introduction.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="flex justify-center px-6 py-16">
        <article className="w-full max-w-4xl space-y-12">
          {!heroImage && (
            <header className="space-y-4">
              <p className={eyebrowClass}>{eyebrowCopy[locale]}</p>
              <h1 className={titleClass}>{title}</h1>
              <div className={introClass}>
                {introduction.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </header>
          )}

          {sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-serif text-stone-900">{section.heading}</h2>
              <div className="space-y-3 text-lg leading-8 text-stone-700">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {(footerNote || showFooter) && (
            <div className="space-y-4 border-t border-dashed border-stone-200 pt-6">
              {footerNote && <p className="text-sm text-stone-500">{footerNote}</p>}
              {showFooter && <SiteFooter locale={locale} />}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

