import type { Band } from "@/types/band";

export const bands: Band[] = [
  {
  id: 1,
  name: "THREE MAN DOWN",
  type: "band",
  genre: "Pop Rock",
  description:
    "Three Man Down is a Thai pop rock band from Bangkok, known for its distinctive sound, emotional lyrics, and energetic performances.",

  image: "/images/bands/three-man-down.jpg",

  members: [
    {
      id: 1,
      name: "กิต",
      role: "Vocal",
      image: "/images/members/kit.jpg"
    },
    {
      id: 2,
      name: "ตูน",
      role: "Guitar",
      image: "/images/members/toon.jpg"
    },
    {
      id: 3,
      name: "เต",
      role: "Drum",
      image: "/images/members/thay.jpg"
    },
    {
      id: 4,
      name: "เส็ง",
      role: "Synthesizer",
      image: "/images/members/seng.jpg"
    },
    {
      id: 5,
      name: "โอม",
      role: "Bass",
      image: "/images/members/om.jpg"
    }
  ],
  yearFounded: 2013
},
   

  {
  id: 2,
  name: "SLOT MACHINE",
  type: "band",
  genre: "Alternative Rock / Electronic Rock",
  description:
    "Slot Machine is a Thai rock band known for their distinctive alternative rock sound, powerful vocals, and electronic elements.",

  image: "/images/bands/slot-machine.jpg",

  members: [
    {
      id: 1,
      name: "เฟิด",
      role: "Vocal",
      image: "/images/members/foet.jpg"
    },
    {
      id: 2,
      name: "วิทย์",
      role: "Guitar",
      image: "/images/members/vit.jpg"
    },
    {
      id: 3,
      name: "แก๊ก",
      role: "Bass",
      image: "/images/members/gag.jpg"
    },
  ],
  yearFounded: 2000
},

  {
  id: 3,
  name: "TATTOO COLOUR",
  type: "band",
  genre: "Pop / Alternative Rock",
  description:
    "TATTOO COLOUR is a Thai pop rock band known for their catchy melodies, creative songwriting, and distinctive musical style.",

  image: "/images/bands/tattoo-colour.jpg",

  members: [
    {
      id: 1,
      name: "ดิม",
      role: "Vocal",
      image: "/images/members/dim.jpg"
    },
    {
      id: 2,
      name: "รัฐ",
      role: "Guitar",
      image: "/images/members/ruzz.jpg"
    },
    {
      id: 3,
      name: "จั๊มป์",
      role: "Bass",
      image: "/images/members/jump.jpg"
    },
    {
      id: 4,
      name: "ตง",
      role: "Drum",
      image: "/images/members/tong.gif"
    },
  ],
  yearFounded: 2006
},
];