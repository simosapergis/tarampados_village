import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Accueil | Tarampados Village",
  description:
    "Découvrez la beauté, la tradition et la culture de Tarampados en français.",
};

export default function HomeFr() {
  return (
    <div className="space-y-12">
      <PageShell
        title="Accueil"
        heroImage="/images/hero/home_1.jpg"
        introduction={[
          "Découvrez la beauté, la tradition et la culture de notre village.",
          "Chaque section reflète la hiérarchie grecque afin de guider les visiteurs francophones vers les mêmes itinéraires et archives.",
        ]}
        highlights={[
          "À propos de nous : un village du XVIIᵉ siècle bâti après des épidémies.",
          "Pigeonniers en ardoise classés comme monuments du patrimoine.",
          "« Bébum Karum » : coutume de Noël alliant repas et liturgie.",
        ]}
        sections={[
          {
            heading: "À propos de nous",
            paragraphs: [
              "Le village de Tarabados, l'un des derniers construits à Tinos, s'est développé progressivement après des événements tragiques comme des épidémies. Avec ses racines au XVIIe siècle, il a remplacé des colonies plus anciennes, combinant histoire et tradition à travers l'architecture et l'organisation féodale.",
            ],
          },
          {
            heading: "Pigeonniers",
            paragraphs: [
              "Les pigeonniers de la vallée de Tarambados sont des monuments du patrimoine culturel. Fabriqués en ardoise, ils servent de pigeonniers fournissant du compost et de lieux de stockage. Leur art vient d’Italie et s’est épanoui particulièrement à l’époque vénitienne.",
            ],
          },
          {
            heading: "« Bébum Karum »",
            paragraphs: [
              "Une coutume de Noël qui combine la réunion familiale avec la Divine Liturgie. Le saucisson grillé, symbolisant la chair, et la soupe de poisson accompagnent la fête spirituelle de l’Incarnation.",
            ],
          },
          {
            heading: "Religion",
            paragraphs: [
              "Les églises de la région, telles qu’Agios Michael et Panagia Vrysiotissa, sont des symboles de valeur religieuse et culturelle. Avec une histoire de plusieurs siècles, elles relient la foi aux traditions comme les processions et les bénédictions.",
            ],
          },
        ]}
        locale="fr"
      />
    </div>
  );
}

