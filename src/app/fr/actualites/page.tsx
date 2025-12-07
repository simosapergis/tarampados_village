import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import heroHistory from "@public/images/hero/history.webp";

export const metadata: Metadata = {
  title: "Actualités | Tarampados Village",
  description:
    "Annonces, événements et initiatives culturelles de Tarampados réunis dans un même espace.",
};

export default function NewsFrPage() {
  return (
    <PageShell
      title="Actualités"
      heroImage={heroHistory}
      heroFit="cover"
      introduction={[
        "Cette page rassemble toutes les annonces de l’association de Tarampados afin que les habitants et amis du village puissent suivre l’actualité au jour le jour.",
      ]}
      sections={[
        {
          heading: "Annonces de l’association",
          paragraphs: [
            "Les travaux de restauration des pigeonniers, les assemblées ouvertes et les décisions collectives sont publiés de manière transparente.",
            "Chaque annonce précise comment participer, relayer l’information ou proposer une aide concrète.",
          ],
        },
        {
          heading: "Événements et participation",
          paragraphs: [
            "Fêtes estivales, parcours guidés et ateliers créatifs sont listés avec dates, lieux et modalités d’inscription.",
            "Nous mettons aussi en avant les projets menés avec d’autres villages ou organisations afin de renforcer le réseau autour de Tarampados.",
          ],
        },
        {
          heading: "Ressources numériques",
          paragraphs: [
            "Lorsqu’un nouvel album photo, un témoignage audio ou un dossier pédagogique est publié, vous trouverez ici un résumé et son lien direct.",
            "L’objectif est de maintenir le lien avec toutes celles et ceux qui suivent le village, même à distance.",
          ],
        },
      ]}
      locale="fr"
    />
  );
}


