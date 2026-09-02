import type { Band } from "@/types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "Steve Lacy",
    type: "solo",
    genre: "R&B / Indie",
    description:
      "Steve Lacy is an American singer, songwriter, guitarist, and record producer.",
    image: "/images/bands/steve-lacy.jpg",

    members: [
      {
        id: 1,
        name: "Steve Lacy",
        role: "Vocal / Guitar / Producer",
      },
    ],
  },

  {
    id: 2,
    name: "YENTED",
    type: "band",
    genre: "Indie Pop / Pop Rock",
    description:
      "YENTED is a Thai independent band from Phayao, known for its distinctive blend of pop and various musical styles.",

    image: "/images/bands/yented.jpg",

    members: [
      {
        id: 1,
        name: "Jao",
        role: "Vocal",
      },
      {
        id: 2,
        name: "Toon",
        role: "Guitar",
      },
      {
        id: 3,
        name: "Karn",
        role: "Guitar",
      },
      {
        id: 4,
        name: "Preung",
        role: "Bass",
      },
      {
        id: 5,
        name: "Bew",
        role: "Drum",
      },
    ],
  },

  {
    id: 3,
    name: "The TOYS",
    type: "solo",
    genre: "Pop / R&B / Synth-Pop",
    description:
      "The TOYS, also known as Toy Thanwa Boonsoongnern, is a Thai singer, songwriter, guitarist, and music producer.",
    image: "/images/bands/the-toys.jpg",

    members: [
      {
        id: 1,
        name: "The TOYS",
        role: "Vocal / Guitar / Songwriter / Producer",
      },
    ],
  },
];