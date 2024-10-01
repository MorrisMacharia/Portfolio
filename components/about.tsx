"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <section className="about-me">
  <p className="mb-3">
    After graduating with a diploma in{" "}
    <span className="font-medium">Business Information Technology</span>, I
    decided to pursue my passion for programming. My journey led me to
    <span className="font-medium"> Ngeni Labs, Code 3 Camp</span>, where I
    completed a certificate in{" "}
    <span className="font-medium">Web 3 and Full Stack Software Development</span>.
    This bootcamp provided me with valuable experience in{" "}
    <span className="font-medium">full-stack web development</span>, with a strong
    focus on front-end technologies. <span className="italic">My favorite part of programming</span>
    is the development and debugging process, where I thrive on solving
    challenges and optimizing solutions. I also enjoy creating and maintaining
    websites and applications, relishing the feeling of success when a project
    comes together.
  </p>
  <p className="mb-3">
    My core technology stack includes{" "}
    <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>.
    I am also proficient in TypeScript and Prisma, and I am constantly eager to
    learn new technologies. Currently, I am seeking a{" "}
    <span className="font-medium">position</span> as a software developer where I
    can further hone my skills and contribute to exciting projects.
  </p>
  <p>
    <span className="italic">When I'm not coding</span>, I enjoy playing video
    games and watching movies. I also have a strong interest in{" "}
    <span className="font-medium">learning new things</span>, and I am currently
    exploring{" "}
    <span className="font-medium">Tailwind CSS</span> to enhance my design skills.
  </p>
</section>

    </motion.section>
  );
}
