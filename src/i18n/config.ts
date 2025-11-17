export const locales = ["el", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "el";

export const localeLabels: Record<Locale, string> = {
  el: "Ελληνικά",
  en: "English",
  fr: "Français",
};

