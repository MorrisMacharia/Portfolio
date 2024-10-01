import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
 
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diploma in Business Information Technology",
    location: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
    description:
      "Studied programming, databases, and web development with a focus on creating E-Commerce websites, graduating with a diploma.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2018 - Mar 2019",
  },
  {
    title: "Certificate in Web 3 and Full Stack Software Development",
    location: "Ngeni Labs, Code 3 Camp",
    description:
      "Completed a 6-month bootcamp, gaining valuable experience in front-end development, Web 3 technologies, and full stack software development.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan - Aug 2024",
  },
  {
    title: "Certificate in Computer Packages",
    location: "Computer Pride, Nairobi",
    description: "Gained foundational skills in essential computer applications, including word processing, spreadsheets, and presentations.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan - Feb 2013",
  },
  {
    title: "Secondary Education",
    location: "Nanyuki High School",
    description: "Completed high school, obtaining the Kenya Certificate of Secondary Education (K.C.S.E).",
    icon: React.createElement(LuGraduationCap),
    date: "2008 - 2011",
  },
  {
    title: "Primary Education",
    location: "Queen Esther School",
    description: "Completed primary school, obtaining the Kenya Certificate of Primary Education (K.C.P.E).",
    icon: React.createElement(LuGraduationCap),
    date: "1999 - 2007",
  },
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
] as const;
