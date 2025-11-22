import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Religion | Tarampados Village",
  description:
    "Fêtes, chapelles et traditions spirituelles de Tarampados en français.",
};

export default function ReligionFr() {
  return (
    <PageShell
      title="Religion"
      introduction={[
        "Cette page présente la documentation complète sur Saint-Michel, Saint-Charalambos, Panaghia de Vrysi et la coutume « Bébum Karum » telle qu’elle est transmise localement.",
        "Vous y trouverez des descriptions historiques, des récits de miracles et le détail des célébrations pour préparer vos visites ou vos recherches.",
        "Chaque section conserve le ton original afin de préserver la mémoire vivante du sanctuaire.",
      ]}
      sections={[
        {
          heading: "Église Saint-Michel",
          paragraphs: [
            "L’église catholique Saint-Michel à Tarambados est l'une des 30 paroisses de l'archidiocèse catholique de Naxos-Tinos-Andros-Mykonos.",
            "Le bâtiment actuel date de 1810, mais la paroisse fut établie en 1789.",
            "Lors de récents travaux, un calice daté de 1532 a été découvert. La fête de Saint-Michel est célébrée le 29 septembre.",
          ],
        },
        {
          heading: "Église Saint-Charalambos",
          paragraphs: [
            "L'église Saint-Charalampos, mentionnée pour la première fois en 1828, servait d'annexe pour les habitants orthodoxes du village voisin de Kambos.",
            "Une inscription sur le clocher révèle que l'église existait déjà en 1726, bien avant sa rénovation.",
            "Elle joua un rôle protecteur symbolique contre le mal et reste très vénérée.",
          ],
        },
        {
          heading: "Panaghia de Vrysi",
          paragraphs: [
            "Panaghia de Vrysi constitue le sanctuaire marial de l’archidiocèse catholique de Naxos-Tinos-Andros-Mykonos.",
            "En empruntant la route menant vers Exomeria, on arrive à l’intersection d’Agia Marina. De là, la route vers Agios Romanos conduit au sanctuaire de la Vrysiotissa.",
            "Plusieurs théories expliquent l’origine du nom «Vrysi» :",
            <ul key="origines-list-fr" className="list-disc pl-6">
              <li>la présence d’une source naturelle d’eau ;</li>
              <li>« Panaghia de la Source », car l’icône aurait été découverte près de celle-ci ;</li>
              <li>« Vresi » dérivé de « evresi » (découverte en grec) ;</li>
              <li>une explication spirituelle : « Panaghia, Source de Grâce ».</li>
            </ul>,
            "À Tarambados vivait une nonne du Tiers Ordre de Saint-François. Dans un rêve, la Vierge lui aurait révélé l’emplacement d’une icône enterrée. La découverte de l’icône date de 1600-1619.",
            "Selon des études, elle fut peinte à la fin du XIVe ou au début du XVe siècle. En 1830, l’icône fut envoyée à Constantinople pour être recouverte d’argent, grâce à une donation miraculeuse d’une femme guérie par son intercession.",
            "Une version raconte qu’une copie fut envoyée à Tinos tandis que l’original resta à Constantinople. Informés, les Tiniotes entreprirent des démarches pour son retour.",
            "Le 3 septembre 1936, l’icône revient à Athènes, et le 1er août 1937, elle atteint Xinara, sur l’île de Tinos. Le lendemain, 2 août, une procession l’amène au sanctuaire de Vrysi.",
            <span
              key="kerion-heading-fr"
              className="font-semibold underline"
            >
              Église de Panaghia ton Kerion
            </span>,
            "Appelée Panaghia des Cierges, cette église fut construite vers 1642. Des fresques témoignent de son ancienneté. Agrandie trois fois, comme le montrent les différences de niveaux intérieurs, elle devint une chapelle dédiée au pape Jean XXIII le 13 août 2004. Le 27 avril 2014, à la canonisation des papes Jean XXIII et Jean-Paul II, elle fut consacrée à ces saints. C’est aussi un lieu de confession.",
            <span
              key="assomption-heading-fr"
              className="font-semibold underline"
            >
              Église de l’Assomption
            </span>,
            "Bâtie à la fin du XVIIIe siècle (vers 1880), l’église a une grande importance historique. Le 15 août 1937, Angelo Giuseppe Roncalli, futur pape Jean XXIII, y célébra sa première messe pontificale en Grèce.",
            "Il offrit un calice en argent en 1938, aujourd’hui exposé avec une plaque commémorative rappelant cette visite.",
            <span
              key="decouverte-heading-fr"
              className="font-semibold underline"
            >
              Église de la Découverte
            </span>,
            "Inaugurée le 2 août 1937, cette église marque l’emplacement de la découverte de l’icône de la Panaghia. Deux inscriptions en grec et en latin rappellent que l’événement date du XVIIe siècle. À côté se trouve une maison d’accueil pour pèlerins construite en 1937.",
            <span
              key="fetes-heading-fr"
              className="font-semibold underline"
            >
              Les fêtes et les traditions
            </span>,
            "Le sanctuaire célèbre sa fête principale le 15 août, avec une prière quotidienne en l’honneur de la Vierge du 1er au 13 août. La veille, un office pontifical est suivi d’une veillée de prière et d’une messe de minuit. Le 22 août, fête de la Vierge Reine du Monde, une messe spéciale est célébrée pour les malades.",
            "Une deuxième fête a lieu le premier dimanche de mai, instituée en 1912 pendant la Première Guerre mondiale par des soldats avant leur départ. Depuis 1967, une bénédiction spéciale des conducteurs est organisée. La veille, à l’église Saint-Michel à Tarambados où l’icône est conservée, un office a lieu avant une procession le lendemain matin vers Vrysi. Après la messe, une prière est dite pour les conducteurs et tous les véhicules sont bénis.",
          ],
        },
        {
          heading: "«Bébum Karum»",
          paragraphs: [
            "Une coutume de Noël des catholiques de l'île, liée à la « Bonne Veillée » de la nuit de Noël. L'expression vient du latin Verbum Caro Factum Est (« Et le Verbe s'est fait chair »).",
            "Avant la messe de minuit, les familles mangent une soupe de poisson, puis, après la messe, du porc rôti et d'autres plats dans une ambiance de paix et de partage.",
          ],
        },
      ]}
      locale="fr"
    />
  );
}

