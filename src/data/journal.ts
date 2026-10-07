import type { Article } from "@/types/journal";

export const articles = [
  {
    slug: "das-licht-des-suedens",
    title: "Das Licht des Südens",
    category: "Reisen",
    date: "September 2026",
    readingTime: "5 Min. Lesezeit",
    excerpt:
      "Über Morgen am Mittelmeer, Terrassen aus Kalkstein und die stille Architektur der Wärme, die unsere Düfte geprägt hat.",
    image: { src: "/images/journal-1.jpg", alt: "Terrasse einer Villa aus Kalkstein mit Olivenbaum und Leinenvorhang" },
    quote: "Manche Orte muss man nicht fotografieren. Man muss sie atmen.",
    body: [
      "Es gibt eine besondere Stunde an der Mittelmeerküste, in der das Licht von Weiss zu Gold wechselt. Die Steinmauern der alten Villen beginnen zu leuchten, die Luft riecht nach Salz und warmen Feigenblättern, und alles scheint langsamer zu werden.",
      "In diesem Licht entstand die erste Idee zu Charisma. Nicht als Parfum, sondern als Gefühl: die Ruhe eines Abends ohne Verpflichtungen, ein Vorhang im Wind, der warme Stein unter nackten Füssen.",
      "Wir sind viele Male an diese Orte zurückgekehrt. Jeder Besuch fügte ein Detail hinzu: die Bitterkeit einer Orangenschale, die Süsse von Jasmin in der Dämmerung, das Harz alter Holzläden.",
      "Ein Duft, so glauben wir, sollte einen Ort bewahren wie eine Erinnerung. Leise, präzise und für lange Zeit.",
    ],
  },
  {
    slug: "eine-hommage-an-die-iris",
    title: "Eine Hommage an die Iris",
    category: "Rohstoffe",
    date: "August 2026",
    readingTime: "4 Min. Lesezeit",
    excerpt:
      "Drei Jahre Geduld für wenige kostbare Gramm. Warum Iris zu den wertvollsten Rohstoffen der Parfumerie gehört.",
    image: { src: "/images/journal-2.jpg", alt: "Zartlila Irisblüten im warmen Nachmittagslicht" },
    quote: "Die Iris lehrt den Parfumeur Geduld. Nichts an ihr lässt sich beschleunigen.",
    body: [
      "Kaum ein Rohstoff verlangt so viel wie die Iris. Der kostbare Duft stammt nicht aus der Blüte, sondern aus der Wurzel, die bis zu drei Jahre ruhen und trocknen muss, bevor sie destilliert werden kann.",
      "Das Ergebnis, Iris-Butter, gehört zu den wertvollsten Materialien der Parfumerie. Ihr Duft ist pudrig, kühl und leicht erdig, er erinnert an Veilchen, feines Wildleder und frische Erde nach dem Regen.",
      "In Black Caviar bildet die Iris das stille Herz der Komposition. Sie mildert die Intensität des Leders und verleiht der Basis aus Oud eine fast samtige Textur.",
      "Wir beziehen unsere Iris von kleinen Produzenten in der Toskana, die noch von Hand ernten. Es ist langsame Arbeit, und genau deshalb lieben wir sie.",
    ],
  },
  {
    slug: "das-ritual-der-langsamkeit",
    title: "Das Ritual der Langsamkeit",
    category: "Rituale",
    date: "Juli 2026",
    readingTime: "3 Min. Lesezeit",
    excerpt:
      "Morgenlicht, eine warme Tasse, eine einzige Geste. Wie ein Duft zum persönlichsten Moment des Tages wird.",
    image: { src: "/images/ritual-nugget.jpg", alt: "Nugget Flakon auf einem Buch neben einer Keramiktasse im Morgenlicht" },
    quote: "Luxus ist nicht Überfluss. Luxus ist Aufmerksamkeit.",
    body: [
      "Oft denken wir bei Luxus an etwas, das man besitzt. Doch die kostbarsten Dinge im Leben sind meist die einfachsten: Zeit, Stille, ein Moment, der nur uns gehört.",
      "Das Auftragen eines Duftes kann ein solcher Moment sein. Eine Pause, bevor der Tag beginnt, eine kleine Geste der Achtsamkeit, eine Entscheidung darüber, wie wir uns fühlen möchten.",
      "Tragen Sie den Duft auf die Pulspunkte auf: Handgelenke, Halsansatz, hinter den Ohren. Nicht verreiben. Lassen Sie die Komposition sich langsam entfalten, so wie sie gedacht ist.",
      "Mit der Zeit wird ein Duft ein Teil von Ihnen. Er wird nicht getragen. Er wird erinnert.",
    ],
  },
  {
    slug: "notizen-aus-dem-atelier",
    title: "Notizen aus dem Atelier",
    category: "Handwerk",
    date: "Juni 2026",
    readingTime: "6 Min. Lesezeit",
    excerpt:
      "Einblicke in den kreativen Prozess: Hunderte Versuche, einige ehrliche Entscheidungen und die lange Suche nach Balance.",
    image: { src: "/images/story-charisma.jpg", alt: "Eine Hand neben dem Charisma Flakon und einem offenen Notizbuch" },
    body: [
      "Jede Komposition von Meloni Parfums beginnt in einem Notizbuch. Worte kommen vor den Rohstoffen: ein Ort, eine Textur, eine Tageszeit.",
      "Erst dann beginnt die Arbeit mit den Essenzen. Akkorde entstehen langsam, jede Version wird über mehrere Tage auf der Haut getestet.",
      "Manche Formeln brauchen mehr als zweihundert Versuche. Viele Ideen werden verworfen. Was bleibt, ist nur das Wesentliche.",
    ],
  },
] satisfies Article[];
