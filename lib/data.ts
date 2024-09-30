import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import vjImg from "@/public/visualjar.png"
import amhImg from "@/public/amentalhealth.png"

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "VisualJar",
    description:
      "I work as a WordPress developer on this website for 6 months. It's a digital service providing company.",
    tags: ["WordPress", "PHP", "Hostinger"],
    imageUrl: vjImg,
  },
  {
    title: "AMentalHealth",
    description:
      "A reasearch page for AMentalHealth organization. I am the WordPress developer. The site have multi-language feature.",
    tags: ["WordPress", "PHP", "Hostinger"],
    imageUrl: amhImg,
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
  "Framer Motion",
  "Three.js",
  "Git",
  "Tailwind",
  "WordPress",
  "MongoDB",
  "phpmyadmin",
  "Python",
  "Google Colab",
  "AI",
  "Machine Learning",
  "Neural Networking",
  "Content Writing",
  "Content Creation",
] as const;