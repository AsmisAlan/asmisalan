import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Resume } from "./model";

export const DATA: Resume = {
  name: "Alan Asmis",
  initials: "AA",
  url: "https://growapps.com.ar",
  location: "Concepción del Uruguay, Entre Ríos, Argentina",
  locationLink: "https://www.google.com/maps/place/Concepción+del+Uruguay",
  description:
    "Software Engineer, Product Owner, and Technical Trainer. Passionate about building solutions, teaching, and leading teams.",
  summary:
    "With over 6 years of experience in software engineering, I've worked with a wide range of technologies, from .NET Core to Angular, leading teams to deliver high-quality products. I also conduct technical interviews and teach Angular to company members.",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "C#",
    "C++ (Arduino)",
    "Java",
    "SQL",
    "Firestore",
    "Postgres",
    "MySql",
    "Angular",
    "NestJs",
    "NHibernate",
    "LINQ",
    "Unity IoC",
    "Flask",
    "SQLAlchemy",
    "Qt Designer",
    "Arduino",
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
        url: "https://x.com/@alanasmis",
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
      title: "Software Engineer, Technical Lead, Project Manager, Trainer",
      logoUrl: "/itsynch.png",
      start: "2018",
      end: "Present",
      description:
        "Leading the company's 'framework' project, migrating technologies from .NET Framework to .NET Core and from AngularJS to Angular. Conducting technical interviews and teaching Angular.",
    },
    {
      company: "Nexos",
      href: "#",
      badges: [],
      location: "Argentina",
      title: "Founder",
      logoUrl: "/nexos.png",
      start: "2024",
      end: "present",
      description:
        "Nexos is a platform that connects multiple AI systems in one runtime, this project also include a agent platform for managing the AI systems.",
    },
    {
      company: "GrowApps",
      href: "#",
      badges: [],
      location: "Argentina",
      title: "Co-founder & Developer",
      logoUrl: "/growapps.png",
      start: "2017",
      end: "2022",
      description:
        "Developing web apps using NodeJs, Firebase, Google Cloud Platform, and Angular for various projects and learning purposes.",
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
      degree: "Bachelor's Degree in Information Systems (80% completed)",
      logoUrl: "/uader.png",
      start: "2014",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Suite 3.0",
      dates: "2020 - Present",
      description:
        "A comprehensive platform aimed at upgrading the technology stack from .NET Framework to .NET Core and AngularJS to Angular. The suite manages the company's projects, tasks, and resources, providing a modern and scalable solution.",
      tags: [
        ".NET Core",
        "MassTransit",
        "EFCore",
        "Angular",
        "NestJs",
        "Nx",
        "NgRx",
        "Firebase",
        "Google Cloud Platform",
        "HotChocolate",
      ],
      links: [
        {
          type: "website",
          href: "https://itsynch.com/technology/",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title: "ITsynch Polaris",
      dates: "Present",
      description:
        "This project focuses on integrating generative AI tools and technologies into ITsynch’s operations to enhance productivity, security, and innovation. The primary objective is to implement secure and effective generative AI systems, such as Semantic Kernel and Memory Kernel, to improve daily workflows and create Retrieval-Augmented Generation (RAG) architectures. The project also involves exploring AI-driven solutions to optimize internal and client-facing tasks, ensuring secure AI adoption across the company.",
      tags: [
        "Semantic Kernel",
        "Memory Kernel",
        "Large Language Models (LLMs)",
        "Generative AI",
        "Retrieval-Augmented Generation (RAG)",
      ],
      links: [
        {
          type: "Project kickoff",
          href: "https://www.linkedin.com/posts/itsynch-solutions_itsynchteam-ai-shipmanagement-activity-7235028191713611776-Dg8T?utm_source=share&utm_medium=member_desktop",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title: "Memento",
      dates: "2024",
      description: "A local RAG architecture platform for managing projects.",
      tags: ["React", "NestJs", "Ollama", "CouchDB"],
      videoTemplate: (
        <iframe
          src="https://player.vimeo.com/video/967464719?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="640"
          height="564"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="mx-auto h-40 w-full"
        ></iframe>
      ),
    },
    {
      title: "Sellers",
      dates: "2018",
      description:
        "A platform for sellers to manage their products, sales, and customers in private networks.",
      tags: ["Angular", "Firebase", "NodeJs"],
    },
    {
      title: "Dolphins",
      dates: "2020",
      description:
        "A platform for managing and monitoring the health of dolphins in captivity.",
      tags: ["Python"],
    },
  ],
  experience: [
    {
      title: "Suite 3.0: Project Manager and Technical Lead",
      dates: "2022 - Present",
      location: "Remote",
      description:
        "I am currently leading 4 teams on a large-scale project called Suite 3.0. This project represents a cutting-edge technology that consolidates the company's applications, common services, and a comprehensive set of libraries known as the framework, all within a single repository. Suite 3.0 is the most ambitious project in the company's history, not only in terms of its scope and complexity but also in its goal of modernizing and streamlining our entire technology stack to enhance scalability and efficiency.",
      image: "/itsynch.png",
      links: [
        {
          title: "ITsynch",
          href: "https://itsynch.com/technology/",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title: "Polaris: Project Lead and AI Specialist",
      dates: "2024 - Present",
      location: "Remote",
      description:
        "As the Project Lead and AI Specialist for the Polaris initiative, I am leading the company's efforts to integrate AI technologies into our operations and products. This project started with the AI Kickoff Event, where we explored the pros and cons of using AI, how to securely implement it, and its current limitations. During the event, I introduced tools that can optimize daily tasks and improve productivity for both our team and our clients. I am currently teaching developers about using semantic kernel, memory kernel, and concepts such as LLMs and RAG to enhance our applications. In parallel, I am working on integrating internal data with a local LLM and generating code with AI, pushing the boundaries of our development capabilities. These innovations will not only streamline our workflows but also benefit our clients as we incorporate AI-driven features into our products.",
      image: "/polaris.png",
      links: [
        {
          title: "AI Kickoff Event",
          href: "https://www.linkedin.com/posts/itsynch-solutions_itsynchteam-ai-shipmanagement-activity-7235028191713611776-Dg8T?utm_source=share&utm_medium=member_desktop",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title: "Technical Interviews",
      dates: "2021 - Present",
      location: "Remote",
      description:
        "I conduct technical interviews with candidates for development positions.",
      image: "/itsynch.png",
      links: [],
    },
    {
      title: "Angular Trainer",
      dates: "2020 - Present",
      location: "Remote",
      description: "I teach Angular to new and current members of the company.",
      image: "/itsynch.png",
      links: [],
    },
    {
      title: "DataSync: Project Manager and Technical Lead",
      dates: "2022",
      location: "Remote",
      description:
        "I led a team of 4 engineers to develop a tool for managing distributed databases from multiple applications with poor network connection systems. We used TDD, .NET Core 5, EFCore, GQL, and Scrum methodologies to deliver the project successfully, without any issues. Today, this tool is a standard in the company and has been implemented across multiple cruise companies, running smoothly without issues.",
      image: "/itsynch.png",
      links: [
        {
          title: "DataSync case of success",
          href: "https://www.linkedin.com/posts/itsynch-solutions_maritime-cruiseindustry-documentmanagement-activity-7252318722336378881-vEWJ?utm_source=share&utm_medium=member_desktop",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title: "Software Engineer & Architect at ITsynch",
      dates: "2018 - Present",
      location: "Remote",
      description:
        "I have been involved in migrating ITsynch's technology stack from .NET Framework to .NET Core, and from AngularJS to Angular, working with technologies like HotChocolate, MassTransit, EFCore, XUnit, and more.",
      image: "/itsynch.png",
      links: [
        {
          title: "ITsynch",
          href: "http://itsynch.com",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title: "Developer and Co-Founder at GrowApps",
      dates: "2017 - Present",
      location: "Remote",
      description:
        "GrowApps is a project where we create web apps using NodeJs, Firebase, Google Cloud Platform, Angular, Ionic, and Electron.",
      image: "/growapps.png",
      links: [
        {
          title: "GrowApps",
          href: "https://growapps.com.ar/",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title:
        "Co-Creator and Developer of the 'Sistema de Georeferencia de Usuarios'",
      dates: "2017",
      location: "INTI, Argentina",
      description:
        "Developed the 'Sistema de Georeferencia de Usuarios' used by the Instituto Nacional de Tecnología Industrial (INTI).",
      image: "/georeferencia.png",
      links: [],
    },
    {
      title: "Lecturer at Arduino Day 2017",
      dates: "2017",
      location: "UADER FCyT, Concepción del Uruguay",
      description:
        'Lectured on "Connect Arduino: Multilanguage, Real-time Data for Multiple Users and Hacking" during Arduino Day 2017.',
      image: "/arduino-day.png",
      links: [],
    },
    {
      title: "Teacher in the 'Introduction to Programming' Workshop",
      dates: "2016 - 2017",
      location: "Sadoski Foundation, Argentina",
      description:
        "Taught an introductory programming workshop developed by the Sadoski Foundation and the National Ministry of Science and Technology.",
      image: "/programming-workshop.png",
      links: [],
    },
    {
      title:
        "Lecturer for 'Graphical Interfaces from 0 to 100 with Python and Qt Designer'",
      dates: "2016",
      location: "UADER FCyT, Concepción del Uruguay",
      description:
        "Gave a talk on graphical interfaces during the international programmer’s day.",
      image: "/python-qt.png",
      links: [],
    },
    {
      title: "University Volunteer for 'Fomenting Education in TICs'",
      dates: "2015",
      location: "UADER FCyT, Concepción del Uruguay",
      description:
        "Volunteered for the project 'Fomenting Education in TICs', focusing on promoting tech education.",
      image: "/tic-education.png",
      links: [],
    },
    {
      title: "University Volunteer: Programming Workshops",
      dates: "2015",
      location: "UADER FCyT, Concepción del Uruguay",
      description:
        "Volunteered in workshops for 'Introduction to Programming' and 'Object-Oriented Programming with Python'.",
      image: "/volunteer.png",
      links: [],
    },
    {
      title: "Analyst in Information Systems",
      dates: "Graduated 2017",
      location: "Autonomous University of Entre Ríos, Concepción del Uruguay",
      description:
        "Graduated with a degree in Information Systems Analysis from the Autonomous University of Entre Ríos.",
      image: "/analyst-degree.png",
      links: [],
    },
    {
      title: "Student of Bachelor's in Information Systems",
      dates: "2017 - Present (90% Completed)",
      location: "Autonomous University of Entre Ríos, Concepción del Uruguay",
      description:
        "Currently completing a Bachelor's degree in Information Systems at the Autonomous University of Entre Ríos.",
      image: "/bachelors-degree.png",
      links: [],
    },
    {
      title: "Research Project 'Kronos'",
      dates: "2016 - 2017",
      location: "Autonomous University of Entre Ríos",
      description:
        "Participated in the research project 'Kronos', contributing to the paper 'Parametric Prediction Model using Expert System and Fuzzy Harmonic System', published by Springer.",
      image: "/kronos.png",
      links: [],
    },
    {
      title: "XXII Argentine Congress of Computer Science (CACIC)",
      dates: "2016",
      location: "San Luis, Argentina",
      description:
        "Participated as an assistant at the XXII Argentine Congress of Computer Science (CACIC).",
      image: "/cacic.png",
      links: [],
    },
    {
      title: "Course 'Python Level 1'",
      dates: "2015",
      location: "Autonomous University of Entre Ríos, Concepción del Uruguay",
      description:
        "Completed the 'Python Level 1' course at the Autonomous University of Entre Ríos.",
      image: "/python.png",
      links: [],
    },
    {
      title: "Course 'Java Programming Distance Level 1'",
      dates: "2015",
      location: "Autonomous University of Entre Ríos, Paraná",
      description:
        "Completed the 'Java Programming Distance Level 1' course, organized by the Gugler Research Lab.",
      image: "/java.png",
      links: [],
    },
    {
      title:
        "International Distance Course 'Introduction to Interactive Digital Television'",
      dates: "2015",
      location: "RedAUTI",
      description:
        "Completed an international distance course on 'Introduction to Interactive Digital Television', with a final project on the GINGA NCL platform.",
      image: "/ginga.png",
      links: [
        {
          title: "Final Project",
          href: "https://www.youtube.com/watch?v=QiTXmlPUIV0",
          icon: Icons.globe({}),
        },
      ],
    },
    {
      title: "Second Workshop on Information Security",
      dates: "2014",
      location: "Autonomous University of Entre Ríos, Concepción del Uruguay",
      description:
        "Participated in the Second Workshop on Information Security, organized by the Gugler Research Lab.",
      image: "/security.png",
      links: [],
    },
  ],
};
