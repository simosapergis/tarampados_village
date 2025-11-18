import type { Locale } from "@/i18n/config";

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: Record<Locale, NavLink[]> = {
  el: [
    { href: "/", label: "Αρχική" },
    { href: "/to-xorio-mas", label: "Το χωριό μας" },
    { href: "/klironomia", label: "Κληρονομιά" },
    { href: "/thriskeia", label: "Θρησκεία" },
    { href: "/politismos", label: "Πολιτισμός" },
    { href: "/epikoinonia", label: "Επικοινωνία" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/our-village", label: "Our Village" },
    { href: "/en/heritage", label: "Heritage" },
    { href: "/en/religion", label: "Religion" },
    { href: "/en/culture", label: "Culture" },
    { href: "/en/contact", label: "Contact" },
  ],
  fr: [
    { href: "/fr", label: "Accueil" },
    { href: "/fr/notre-village", label: "Notre village" },
    { href: "/fr/patrimoine", label: "Patrimoine" },
    { href: "/fr/religion", label: "Religion" },
    { href: "/fr/culture", label: "Culture" },
    { href: "/fr/contact", label: "Contact" },
  ],
};

