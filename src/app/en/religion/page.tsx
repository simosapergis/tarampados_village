import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Religion | Tarampados Village",
  description:
    "Stories about the chapels, feasts and volunteer groups that shape the spiritual life of Tarampados.",
};

export default function ReligionEn() {
  return (
    <PageShell
      title="Religion"
      introduction={[
        "This page gathers the full narrative for the churches of St. Michael and St. Charalambos, the Virgin Mary of Vrysi pilgrimage, and the “Bebum Carum” Christmas custom.",
        "Expect detailed, unedited text straight from the local community—covering history, feast days, miracles, and rituals that define Tarampados’ spiritual life.",
        "Use it as a reference when planning visits or documenting the village’s religious heritage.",
      ]}
      sections={[
        {
          heading: "Church of St. Michael",
          paragraphs: [
            "The Catholic Church of St. Michael in Tarampados is one of the 30 parishes of the Catholic Archdiocese of Naxos - Tinos - Andros - Mykonos.",
            "There is no sufficient information about the year of the rebuilding of the first church at this location.",
            "",
            "The existing church dates back to 1810 , while the year of foundation of the parish is 1789. During a recent replacement of the St. Bank's utensils, a chalice was discovered with the year 1532 inscribed on it.",
            "",
            "On September 29, St. Michael is celebrated in the village church and on the eve of the feast day a solemn vespers is held.",
          ],
        },
        {
          heading: "Church of St. Charalambos",
          paragraphs: [
            "The church of St. Charalambos in Tarampados is recorded for the first time in the 1828 census as a chapel of the parish of the village of Kampos and even for the Orthodox inhabitants, who from 1767-1774 had the church of St. Catherine in the same village as their cathode.",
            "",
            "In the 1828 census it was listed as owned by a man named Finale, who also owned the chapel of St. John in 'Floroporia'.",
            "",
            "A marble lintel with an inscription above the entrance to the built-in bell-tower informs us that the church is older than the date mentioned on the bell-tower, and that just at that time major renovations took place, which seem to have continued with donations of icons, furniture and other items.",
            "",
            "Both the above-mentioned inscription and the number of names of the donors indicate that the church was already a parish church as early as 1726.",
            "",
            "The pre-existence of the church of Agios Charalambos or its construction at that time marked the symbolic limits of the warding off of evil, and its worship among the inhabitants, mainly the Orthodox, became widespread, so that even at the end of the 19th century it was still held in high esteem by the Orthodox Falatadians, Hadjiradian, Ktikadian and Tripotamian.",
          ],
        },
        {
          heading: "Virgin Mary of Vrysi",
          paragraphs: [
            "The Virgin Mary of Vrysi is the Theometric Pilgrimage of the Ecclesiastical Province of Naxos-Tinos-Andros-Mykonos.",
            "Following the road to Exomeria, we reach the crossroads of Agia Marina, and taking the road leading to Agios Romanos, we meet the Pilgrimage of Vrysiotissa.",
            "",
            "There are several possible versions of the name of Vrysi:",
            "",
            "• From the natural spring of water that exists there.",
            "• The “Virgin of the Fountain”, because the icon was found near the spring.",
            "• “Bressi” from the word “finding”.",
            "• “Our Lady, Fountain of Grace”, as a spiritual explanation.",
            "",
            "In the village of Tarambados, there lived a nun of the Third Order of St. Francis. In a dream, the Virgin Mary appeared to her and pointed out to her the location where her icon was buried.",
            "",
            "The discovery of the icon took place in the 17th century, in 1600-1619.",
            "",
            "Scientific research shows that the icon was painted in the late 14th to early 15th century. After 1830 the icon of the Virgin Mary was taken to Constantinople to be silvered.",
            "",
            "It was the wish of a woman from Aetofolia who was miraculously healed, who sold one of her estates and offered the money for this purpose.",
            "",
            "There is another version that while the icon was in town a woman who was healed silvered the icon and then sent a copy of it to Tinos, keeping the original at home. When the Tinian people of Polis were informed of the incident, they acted to return it to Tinos.",
            "",
            "On 3 September 1936 she returned to Athens. On August 1, 1937 the icon arrived in Xinara of Tinos and the next day, August 2, with a procession to Vrisi.",
            "",
            "The Virgin of the Candles, as it was called, is the first church built around 1642. Parts of frescoes testify to its antiquity. It was enlarged three times, as the variations in height of its interior testify.",
            "",
            "This chapel was dedicated to Pope John 23rd Macarius on 13 August 2004. On 27 April 2014, Pope Francis proclaimed Pope John 23rd and Pope John Paul 2nd Saints, the day on which this Chapel was dedicated to these Holy Popes. In it are the confessionals where every believer goes to receive absolution.",
            "",
            <span
              className="font-semibold underline"
              key="transfiguration-heading"
            >
              The church of the Transfiguration
            </span>,
            "",
            "The Church of the Transfiguration was built at the end of the 18th century (1880). On August 15, 1937, His Eminence Angelos Joseph Roncalli, later Pope John 23rd, visited Vrisi, where he celebrated his first High Priestly Mass. He attended his first Holy Mass in Greece. On May 3, 1938 he offers his silver chalice. In commemoration of this visit, a marble plaque was placed inside the Church of the Transfiguration where the figure of the unforgettable Pope John 23rd dominates and where excerpts from his letter are engraved.",
            "",
            <span
              className="font-semibold underline"
              key="find-heading"
            >
              The sanctuary of the find
            </span>,
            "",
            "The Church of the Annunciation was consecrated on August 2, 1937, built on the site where the icon of the Virgin Mary was found. Two marble inscriptions, one in Greek and the other in Latin, refer to the date of the discovery.",
            "",
            "Next to the Church of the Euresis is the Communion Hall, a place of reception for pilgrims, built in 1937.",
            "",
            "The pilgrimage is celebrated on 15 August. From the 1st to the 13th of August, the Prayer in honour of the Virgin Mary is celebrated daily. On August 14, the eve of the feast day, there is an Archpriestly Vespers, a prayer vigil and the midnight Archpriestly Divine Liturgy.",
            "",
            "On the day of the feast day, Divine Liturgies are celebrated in the morning hours to serve the many pilgrims, as well as the High Priestly Solemn Divine Liturgy.",
            "",
            "On August 22, the feast of Our Lady Queen of the World, a solemn Divine Liturgy is celebrated for all patients.",
            "",
            "A second solemnity is celebrated on the 1st Sunday of May. This feast was started in 1912, at the beginning of the First World War, by conscripts preparing to leave for war.",
            "",
            "Since 1967 it has been a special blessing for drivers. On the eve of the parish church of Archangel Michael in Tarampados, where the icon is kept, an Archpriest's Vespers is celebrated and on Sunday at 9 am the procession of the icon to Vrisi begins, where the Archpriest's Divine Liturgy is celebrated.",
            "",
            "After the Holy Mass, the church will be celebrated with a mass in the morning and the Holy Mass will be celebrated in the morning. The prayer of the driver is recited and then the drivers and vehicles of all kinds are blessed.",
          ],
        },
        {
          heading: "“Bebum Carum”",
          paragraphs: [
            "its a Christmas custom of the Catholic inhabitants of the island , which is directly connected with the other custom of the night of Christmas Eve - the \"Good Night\" .",
            "",
            "It derives from the Latin \"Verbum Caro Factum Est\", a statement that summarizes the fundamental belief of Christian theology around the \"Incarnation of Christ\" and the salvation of the world through it.",
            "",
            "The phrase is found in the Gospel of John chap. 1, verse 14. The Greek rendering is \"And the Word was made flesh\".",
            "",
            "The Catholics of the island's villages, before the Christmas Mass, sit at the family table and eat fish soup.",
            "Then they gather in the Church for the Divine Liturgy and, completing the custom, after gathering again at the table, after the customary blessings, they eat roasted pork sausage (which symbolizes the flesh) and other delicacies, wishing each other in a climate of love and peace.",
          ],
        },
      ]}
      locale="en"
    />
  );
}

