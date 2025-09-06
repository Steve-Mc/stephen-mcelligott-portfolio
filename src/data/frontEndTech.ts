// src/data/frontendTech.ts
import type { Tech } from "@/types/tech";
import typeScriptIcon from "@/assets/typeScriptIcon.png";
import framerMotionIcon from "@/assets/framerMotionIcon.svg";
import chakraUiIcon from "@/assets/chakraUiIcon.png";
import html5Icon from "@/assets/html5.svg";
import css3Icon from "@/assets/CSS3.svg";

export const frontendTech: Tech[] = [
  {
    title: "React.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    title: "TypeScript",
    icon: typeScriptIcon,
  },
  {
    title: "Chakra UI",
    icon: chakraUiIcon,
  },
  {
    title: "Framer Motion",
    icon: framerMotionIcon,
  },
  {
    title: "javaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    title: "HTML5",
    icon: html5Icon,
  },
  {
    title: "CSS3",
    icon: css3Icon,
  },
];
