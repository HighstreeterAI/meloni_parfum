import type { Product } from "@/types/product";

const SHARED_INGREDIENTS =
  "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Limonene, Linalool, Citronellol, Geraniol, Coumarin. Komponiert in der Schweiz mit Rohstoffen aus Kalabrien, Grasse und dem Mittelmeerraum. Vegan und ohne Tierversuche.";

export const products = [
  {
    id: "prod_black_caviar",
    slug: "black-caviar",
    name: "Black Caviar",
    tagline: "Die Tiefe der Nacht.",
    description:
      "Black Caviar öffnet sich mit leuchtender Bergamotte und schwarzem Pfeffer. Im Herzen entfalten sich weiches Leder und pudrige Iris, getragen von einer tiefen, warmen Basis aus Oud und Ambra.",
    story:
      "Inspiriert von einer mondhellen Nacht am Meer, wenn das Wasser still und dunkel glänzt. Black Caviar ist ein Duft für Abende, die in Erinnerung bleiben: geheimnisvoll, souverän und von leiser Intensität.",
    price: 160,
    currency: "CHF",
    images: [
      { src: "/images/black-caviar.jpg", alt: "Black Caviar Extrait de Parfum auf hellem Travertin mit schwarzen Steinen" },
      { src: "/images/featured-black-caviar.jpg", alt: "Black Caviar auf einem sonnigen Steinsims vor einem Rundbogen" },
      { src: "/images/black-caviar-panel.jpg", alt: "Black Caviar mit Kaviarperlen auf spiegelnder Fläche" },
      { src: "/images/ingredients.jpg", alt: "Natürliche Rohstoffe: Bergamotte, Iriswurzel, Jasmin, Sandelholz und rosa Pfeffer" },
    ],
    panelImage: { src: "/images/black-caviar-panel.jpg", alt: "Black Caviar Extrait de Parfum mit Kaviarperlen" },
    size: "100 ML",
    fragranceType: "Extrait de Parfum",
    notes: {
      top: ["Bergamotte", "Schwarzer Pfeffer"],
      heart: ["Leder", "Iris"],
      base: ["Oud", "Ambra"],
    },
    keyNotes: ["Bergamotte", "Leder", "Oud", "Ambra"],
    ingredients: SHARED_INGREDIENTS,
    isFeatured: true,
  },
  {
    id: "prod_charisma",
    slug: "charisma",
    name: "Charisma",
    tagline: "Eine Aura, die bleibt.",
    description:
      "Charisma beginnt mit sonnengereifter Blutorange und Mandarine. Ein strahlendes Herz aus Jasmin und Orangenblüte verschmilzt mit einer sinnlichen Basis aus Amber und Vanille.",
    story:
      "Charisma ist ein Sommerabend an der Mittelmeerküste: warme Steine, blühende Orangenbäume und das letzte goldene Licht über dem Meer. Sinnlich. Elegant. Unvergesslich.",
    price: 160,
    currency: "CHF",
    images: [
      { src: "/images/charisma.jpg", alt: "Charisma Extrait de Parfum auf Travertin mit Jasminblüten und Orange" },
      { src: "/images/hero-charisma.jpg", alt: "Charisma auf einem Travertinblock im warmen Sonnenlicht" },
      { src: "/images/story-charisma.jpg", alt: "Eine Hand neben dem Charisma Flakon auf einem Steintisch" },
      { src: "/images/charisma-panel.jpg", alt: "Charisma mit Jasminblüte auf spiegelnder Fläche" },
    ],
    panelImage: { src: "/images/charisma-panel.jpg", alt: "Charisma Extrait de Parfum mit Jasminblüte" },
    size: "100 ML",
    fragranceType: "Extrait de Parfum",
    notes: {
      top: ["Blutorange", "Mandarine"],
      heart: ["Jasmin", "Orangenblüte"],
      base: ["Amber", "Vanille"],
    },
    keyNotes: ["Blutorange", "Jasmin", "Amber", "Vanille"],
    ingredients: SHARED_INGREDIENTS,
    isFeatured: true,
  },
  {
    id: "prod_nugget",
    slug: "nugget",
    name: "Nugget",
    tagline: "Pures Gold auf der Haut.",
    description:
      "Nugget leuchtet mit Safran und rosa Pfeffer. Im Herzen treffen goldener Honig und Rose aufeinander, bevor Tonkabohne und cremiges Sandelholz eine warme, strahlende Spur hinterlassen.",
    story:
      "Inspiriert vom ersten Sonnenlicht auf den Gipfeln der Berge, wenn alles für einen Moment golden glänzt. Nugget ist ein Duft von seltener Wärme und stiller Kostbarkeit.",
    price: 160,
    currency: "CHF",
    images: [
      { src: "/images/nugget.jpg", alt: "Nugget Extrait de Parfum auf Travertin mit Goldnuggets" },
      { src: "/images/nugget-panel.jpg", alt: "Nugget mit Goldnuggets auf spiegelnder Fläche" },
      { src: "/images/ritual-nugget.jpg", alt: "Nugget auf einem Buch neben einer Keramiktasse im Morgenlicht" },
      { src: "/images/ingredients.jpg", alt: "Natürliche Rohstoffe auf hellem Travertin" },
    ],
    panelImage: { src: "/images/nugget-panel.jpg", alt: "Nugget Extrait de Parfum mit Goldnuggets" },
    size: "100 ML",
    fragranceType: "Extrait de Parfum",
    notes: {
      top: ["Safran", "Rosa Pfeffer"],
      heart: ["Honig", "Rose"],
      base: ["Tonkabohne", "Sandelholz"],
    },
    keyNotes: ["Safran", "Honig", "Tonkabohne", "Sandelholz"],
    ingredients: SHARED_INGREDIENTS,
    isFeatured: true,
  },
] satisfies Product[];
