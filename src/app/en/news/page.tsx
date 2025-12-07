import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHistory from "@public/images/hero/history.webp";

export const metadata: Metadata = {
  title: "News | Tarampados Village",
  description:
    "Latest announcements, community updates, and cultural highlights from Tarampados.",
};

export default function NewsEnPage() {
  return (
    <PageShell
      title="News"
      heroImage={heroHistory}
      heroFit="cover"
      introduction={[
        "Our News hub curates every announcement from the Tarampados Association so that residents, friends, and visitors can follow the pulse of the village in real time.",
      ]}
      sections={[
        {
          heading: "Association announcements",
          paragraphs: [
            "Maintenance work on the dovecotes, open meetings, and collective decisions are documented transparently so you always know what is being planned.",
            "Each note links practical next steps, whether you wish to volunteer, spread the word, or simply stay informed.",
          ],
        },
        {
          heading: "Events & participation",
          paragraphs: [
            "Seasonal festivities, guided walks, and creative workshops are listed with dates, venues, and registration details.",
            "We highlight collaborative projects on Tinos or abroad so that the Tarampados network can join from near or far.",
          ],
        },
        {
          heading: "Digital releases",
          paragraphs: [
            "When new photo essays, oral histories, or educational resources go live, this section points you directly to the material.",
            "The aim is to keep a living archive for everyone who cares about the village—even if they cannot be here physically.",
          ],
        },
      ]}
      locale="en"
    />
  );
}


