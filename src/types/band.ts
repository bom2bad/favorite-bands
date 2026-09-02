export type Member = {
  id: number;
  name: string;
  role: string;
};

export type Band = {
  id: number;
  name: string;
  type: "solo" | "band";
  genre: string;
  description: string;
  image: string;
  members: Member[];
};