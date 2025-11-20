import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";

const contactDetails = [
  { label: "Email", value: "tarampados@gmail.com", href: "mailto:tarampados@gmail.com" },
  { label: "Διεύθυνση", value: "Ταραμπάδος, Κυκλάδες, Ελλάδα" },
  { label: "Τ.Κ.", value: "842 00" },
];

export const metadata: Metadata = {
  title: "Επικοινωνία | Tarampados Village",
  description:
    "Φόρμα επικοινωνίας και στοιχεία του Συλλόγου Ταραμπάδου Τήνου.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 px-6 py-16 text-zinc-900 dark:text-zinc-50">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
        <div className="grid gap-10 p-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-200">
              Σύλλογος Ταραμπάδου Τήνου
            </p>
            <h1 className="text-4xl font-semibold leading-tight">
              Ελάτε σε επαφή μαζί μας για οποιαδήποτε πληροφορία ή ερώτηση.
            </h1>
            <p className="text-base text-slate-300">
              Συμπληρώστε τη φόρμα ή χρησιμοποιήστε τα στοιχεία επικοινωνίας για
              να μοιραστείτε ερωτήσεις, σχόλια ή ιδέες σχετικά με το χωριό και
              τα πολιτιστικά του δρώμενα.
            </p>
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-lg font-semibold text-white underline-offset-2 hover:underline"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="space-y-4 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
              Τοποθεσία
            </p>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Ταραμπάδος, Τήνος
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              Παρακάτω μπορείτε να δείτε την ακριβή τοποθεσία του χωριού και να
              σχεδιάσετε τη διαδρομή σας προς τον Ταραμπάδο.
            </p>
            <Link
              href="https://www.google.com/maps/dir/37.9199132,23.7283557/%CE%A4%CE%B1%CF%81%CE%B1%CE%BC%CF%80%CE%B1%CE%B4%CE%BF%CF%82,+842+00/@37.7711106,23.1293091,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x14a2ec4b07a63d33:0xdfb341d843d6579b!2m2!1d25.1439932!2d37.5797967?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-zinc-900 hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black"
            >
              Άνοιγμα στο Google Maps
            </Link>
          </div>
          <div className="min-h-[320px]">
            <iframe
              title="Χάρτης Ταραμπάδου"
              src="https://maps.google.com/maps?q=37.5797967,25.1439932&z=14&output=embed"
              width="100%"
              height="100%"
              className="h-full min-h-[300px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter locale="el" />
    </div>
  );
}

