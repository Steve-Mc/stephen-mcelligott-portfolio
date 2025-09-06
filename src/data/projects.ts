// src/data/projects.ts
import type { Project } from "@/types/project";
import entExamsImg from "@/assets/entexams.png";
import diagnoseImg from "@/assets/diagnose.png";
import chessieImg from "@/assets/chessie.png";
import mcqsImg from "@/assets/mcqs.png";
export const projects: Project[] = [
  {
    title: "Diagnose.ie",
    description:
      "This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
    image: diagnoseImg,
    url: "https://diagnose.ie",
  },
  {
    title: "Chess.ie",
    description:
      "This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
    image: chessieImg,
    url: "https://chess.ie",
  },
  {
    title: "Entexams.co.uk",
    description:
      "This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
    image: entExamsImg,
    url: "https://entexams.co.uk",
  },
  {
    title: "Mcqs.com",
    description:
      "This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec odio vel dui euismod fermentum.",
    image: mcqsImg,
    url: "https://mcqs.com",
  },
];
