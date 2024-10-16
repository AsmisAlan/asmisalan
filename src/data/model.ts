import { Icons } from "@/components/icons";
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
  social: {
    GitHub: SocialMedia;
    LinkedIn: SocialMedia;
    X: SocialMedia;
    Youtube: SocialMedia;
    email: SocialMedia;
  };
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

interface Project {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: ProjectLink[];
  image: string;
  video: string;
}

interface Hackathon {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  win?: string;
  links: {
    title?: string;
    icon?: JSX.Element;
    href?: string;
  }[];
}

export interface Resume {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: NavbarItem[];
  contact: Contact;
  work: WorkExperience[];
  education: Education[];
  projects: Project[];
  hackathons: Hackathon[];
}
