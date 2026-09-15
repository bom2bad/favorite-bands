export type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  type: "solo" | "band";
  genre: string;
  description: string;
  image: string;
  yearFounded: number;
  members: Member[];
};