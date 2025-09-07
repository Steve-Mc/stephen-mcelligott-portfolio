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
      "An Irish provider of private mobile ultrasound scanning services. They offer prompt, in-home ultrasound scans across Ireland, catering to patients referred by doctors.",
    image: diagnoseImg,
    url: "https://diagnose.ie",
  },
  {
    title: "Chess.ie",
    description:
      "An Irish platform dedicated to enhancing chess skills through personalized online coaching. The website offers tailored lessons with expert coaches to help individuals unlock their full chess potential.",
    image: chessieImg,
    url: "https://chess.ie",
  },
  {
    title: "Entexams.co.uk",
    description:
      "A UK-based online platform designed to support medical professionals preparing for Ear, Nose, and Throat (ENT) examinations. The website offers a comprehensive range of resources, including practice questions, mock exams, and progress tracking tools, to help candidates enhance their knowledge and confidence.",
    image: entExamsImg,
    url: "https://entexams.co.uk",
  },
  {
    title: "Mcqs.com",
    description:
      "An Irish-based online platform offering practice resources for a wide range of professional and academic exams. It provides multiple-choice questions (MCQs) accompanied by detailed explanations to help users prepare for certifications and qualifications in fields such as medicine, software development, and education.",
    image: mcqsImg,
    url: "https://mcqs.com",
  },
];
