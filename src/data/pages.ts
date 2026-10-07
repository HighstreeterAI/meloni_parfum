export interface InfoPage {
  slug: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export const infoPages = [
  {
    slug: "versand",
    title: "Versand",
    intro: "Jede Bestellung wird in unserem Atelier von Hand vorbereitet und sorgfältig verpackt.",
    sections: [
      {
        heading: "Schweiz",
        body: "Kostenloser Standardversand für alle Bestellungen. Lieferung innerhalb von 1–2 Werktagen mit der Schweizerischen Post.",
      },
      {
        heading: "Europa",
        body: "Versand in die EU und nach Grossbritannien für CHF 15.–, kostenlos ab CHF 250.–. Lieferung innerhalb von 3–6 Werktagen. Zollgebühren können anfallen.",
      },
    ],
  },
  {
    slug: "retouren",
    title: "Retouren",
    intro: "Wenn ein Duft nicht der richtige für Sie ist, helfen wir Ihnen gerne weiter.",
    sections: [
      {
        heading: "30 Tage Rückgaberecht",
        body: "Ungeöffnete Produkte in der Originalverpackung können innerhalb von 30 Tagen nach Erhalt zurückgegeben werden. Sie erhalten den vollen Kaufpreis zurück.",
      },
      {
        heading: "So funktioniert es",
        body: "Kontaktieren Sie uns mit Ihrer Bestellnummer. Für Rücksendungen innerhalb der Schweiz senden wir Ihnen ein frankiertes Rücksendeetikett.",
      },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    intro: "Antworten auf die Fragen, die uns am häufigsten gestellt werden.",
    sections: [
      {
        heading: "Wie lange hält der Duft?",
        body: "Unsere Extraits de Parfum haben eine besonders hohe Konzentration an Duftölen und halten in der Regel 10 bis 12 Stunden auf der Haut.",
      },
      {
        heading: "Sind Ihre Düfte vegan?",
        body: "Ja. Alle Kompositionen von Meloni Parfums sind vegan und ohne Tierversuche hergestellt.",
      },
      {
        heading: "Bieten Sie Proben an?",
        body: "Jeder Bestellung liegt eine Duftprobe bei, damit Sie eine weitere Komposition unserer Kollektion entdecken können.",
      },
    ],
  },
  {
    slug: "datenschutz",
    title: "Datenschutz",
    intro: "Wir respektieren Ihre Privatsphäre und erheben nur die Daten, die wir für Ihren Einkauf benötigen.",
    sections: [
      {
        heading: "Erhobene Daten",
        body: "Name, E-Mail-Adresse, Lieferadresse und Bestelldaten. Diese verwenden wir ausschliesslich zur Abwicklung Ihrer Bestellung und, mit Ihrer Einwilligung, für unseren Newsletter.",
      },
      {
        heading: "Ihre Rechte",
        body: "Sie können jederzeit Auskunft, Berichtigung oder Löschung Ihrer persönlichen Daten verlangen. Kontaktieren Sie uns dazu per E-Mail.",
      },
    ],
  },
  {
    slug: "agb",
    title: "AGB",
    intro: "Die Allgemeinen Geschäftsbedingungen von Meloni Parfums.",
    sections: [
      {
        heading: "Bestellungen",
        body: "Ein Vertrag kommt mit unserer Bestellbestätigung zustande. Alle Preise verstehen sich in Schweizer Franken inklusive Mehrwertsteuer.",
      },
      {
        heading: "Anwendbares Recht",
        body: "Es gilt schweizerisches Recht. Gerichtsstand ist Zürich, Schweiz.",
      },
    ],
  },
] satisfies InfoPage[];
