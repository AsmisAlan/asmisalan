import { ExperienceProps } from "@/components/hackathon-card";
import { Icons } from "@/components/icons";
import { ProjectProps } from "@/components/project-card";
import { HomeIcon, NotebookIcon } from "lucide-react";

interface SocialMedia {
  name: string;
  url: string;
  icon: (typeof Icons)[keyof typeof Icons];
  navbar: boolean;
}

interface Contact {
  email: string;
  tel: string;
  social: Record<string, SocialMedia>;
}

interface NavbarItem {
  href: string;
  icon: typeof HomeIcon | typeof NotebookIcon;
  label: string;
}

interface WorkExperience {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

interface Education {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
}

interface ProjectLink {
  type: string;
  href: string;
  icon: JSX.Element;
}

export interface Resume {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  skills: string[];
  navbar: NavbarItem[];
  contact: Contact;
  work: WorkExperience[];
  education: Education[];
  projects: ProjectProps[];
  experience: ExperienceProps[];
}
