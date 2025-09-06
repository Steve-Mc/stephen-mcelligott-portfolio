// src/data/frontendTech.ts
import type { Tech } from "@/types/tech";
import nodejsIcon from "@/assets/jsIconGreen.svg";
import typeScriptIcon from "@/assets/typeScriptIcon.png";
import mysqlIcon from "@/assets/mysqlIcon.svg";
import redisIcon from "@/assets/redisIcon.svg";
import prismaIcon from "@/assets/prismaIcon.svg";
import mongoIcon from "@/assets/MongoDB.svg";
import webpackIcon from "@/assets/webpackIcon.svg";
import expressIcon from "@/assets/expressIcon.svg";

export const backendTech: Tech[] = [
  {
    title: "Node.js",
    icon: nodejsIcon,
  },
  {
    title: "TypeScript",
    icon: typeScriptIcon,
  },
  {
    title: "Express.js",
    icon: expressIcon,
  },
  {
    title: "javaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    title: "MySQL",
    icon: mysqlIcon,
  },
  {
    title: "MongoDB",
    icon: mongoIcon,
  },
  {
    title: "Redis",
    icon: redisIcon,
  },
  {
    title: "Prisma",
    icon: prismaIcon,
  },
  {
    title: "Webpack",
    icon: webpackIcon,
  },
  {
    title: "socket.io",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
  },
];
