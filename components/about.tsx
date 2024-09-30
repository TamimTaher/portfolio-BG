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
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science and Engineering</span>, I
        decided to pursue my passion for gaming. I started my personal gaming blog
        and learned{" "}
        <span className="font-medium">a lot about content writing</span>.{" "}
        <span className="italic">Currently, I am working as a</span> freelance
        writer in <a className="underline" href="https://gameriv.com/author/abu-taher-tamim/" target="_blank">
          GameRiv
        </a>
        . But I did not forget my true expertise.
      </p>

      <p>
        I <span className="underline">love</span> the feeling of finally
        figuring out a solution to a problem. That is why I have dedicated
        countless hours in{" "}
        <a className="underline" href="https://codeforces.com/" target="_blank">
          Codeforces
        </a>
        . Now, my core stack is{" "}
        <span className="font-medium">React, and Next.js</span>. I am also
        familiar with TypeScript and Svelte. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a{" "}
        <span className="underline">front-end developer</span>.
      </p>

      <p>
        Moreover, I started my own WordPress agency back in 2023. I have served
        four clients through my agency. I also help one of my friends with his{" "}
        <span className="font-medium">Data Science</span> projects.
        <span className="italic"> When I'm not coding</span>, I enjoy playing
        video games, watching anime, and spending time with my family. I also
        enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Three.js</span>.
      </p>
    </motion.section>
  );
}
