import type { StaticImageData } from "next/image";

export type ResumeIcon =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | StaticImageData;

export type IconType =
  | "github"
  | "instagram"
  | "linkedin"
  | "x"
  | "globe"
  | "mail"
  | "phone";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string[];
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    start: string;
    end: string;
  }>;
  projects: Array<{
    title: string;
    techStack: string[];
    description: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
  awards: Array<{
    award: string;
    year: string;
  }>;
  exhibitions: Array<{
    title: string;
    venue: string;
    year: string;
  }>;
}
