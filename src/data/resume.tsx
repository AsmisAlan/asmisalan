import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Asmis Noe Alan",
  initials: "AA",
  url: "",
  location: "Concepción del Uruguay, Entre Ríos, Argentina",
  locationLink: "https://www.google.com/maps/place/Concepción+del+Uruguay",
  description:
    "Software Engineer, Product Owner, and Technical Trainer. Passionate about building solutions, teaching, and leading teams.",
  summary:
    "With over 6 years of experience in software engineering, I've worked with a wide range of technologies, from .NET Core to Angular, leading teams to deliver high-quality products. I also conduct technical interviews and teach Angular to company members.",
  avatarUrl: "/me.png",
  skills: [
    "TypeScript",
    "C#",
    "JavaScript",
    "Python",
    "Java",
    "SQL",
    "Firebase",
    "Angular",
    "NestJs",
    ".Net Core",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "asmisalan@gmail.com",
    tel: "+54 3445 432781",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/asmisalan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/asmisalan/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/@asmisalan",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "ITsynch",
      href: "https://itsynch.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer, Product Owner, Trainer",
      logoUrl: "/itsynch.png",
      start: "2018",
      end: "Present",
      description:
        "Leading the company's 'framework' project, migrating technologies from .NET Framework to .NET Core and from AngularJS to Angular. Conducting technical interviews and teaching Angular.",
    },
    {
      company: "GrowApps",
      href: "https://growapps.com.ar/",
      badges: [],
      location: "Remote",
      title: "Co-founder & Developer",
      logoUrl: "/growapps.png",
      start: "2017",
      end: "Present",
      description:
        "Developing web apps using NodeJs, Firebase, Google Cloud Platform, and Angular for various projects and learning purposes.",
    },
    {
      company: "INTI",
      href: "https://www.inti.gob.ar/",
      badges: [],
      location: "Argentina",
      title: "Co-creator and Developer",
      logoUrl: "/inti.png",
      start: "2017",
      end: "2017",
      description:
        "Developed the 'Sistema de Georeferencia de Usuarios' used by the 'Instituto Nacional de Tecnología Industrial'.",
    },
  ],
  education: [
    {
      school: "Autonomous University of Entre Ríos",
      href: "https://uader.edu.ar",
      degree: "Analyst in Information Systems",
      logoUrl: "/uader.png",
      start: "2014",
      end: "2017",
    },
    {
      school: "Autonomous University of Entre Ríos",
      href: "https://uader.edu.ar",
      degree: "Bachelor's Degree in Information Systems (90% completed)",
      logoUrl: "/uader.png",
      start: "2014",
      end: "Present",
    },
  ],
  furtherTraining: [
    {
      title: "Parametric Prediction Model using Expert System and Fuzzy Harmonic System",
      href: "",
      dates: "2016 - 2017",
      description:
        "Published by Springer, advances in intelligent systems and information technology (ISSN 2194-5357).",
    },
    {
      title: "XXII Argentine Congress of Computer Science “CACIC”",
      href: "",
      dates: "2016",
      description: "Participant in the role of assistant.",
    },
    {
      title: "Python Level 1",
      href: "",
      dates: "2015",
      description:
        "Course completed at the Autonomous University of Entre Ríos, Faculty of Science and Technology.",
    },
  ],
} as const;
