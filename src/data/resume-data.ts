import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ian Hobbs",
  initials: "IH",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/Sydney",
  about: "Media Artist, Photographer, and Software Engineer",
  summary:
    "Interested in experimental forms of photography using a post-photography approach to themes of observation and technological vistas.",
  avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
  personalWebsiteUrl: "https://ianhobbs.net",
  contact: {
    email: "ian@ianhobbs.net",
     tel: "+61411032601",
    social: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/ianhobbs_media/",
        icon: "instagram",
      }
    ],
  },
  education: [
    {
      school: "University of Sydney, Sydney College of Art",
      degree: "BA(Hons) Major in Photomedia / Electronic Media",
      start: "1998",
      end: "1999",
    },
    {
      school: "University of NSW",
      degree: "Bachelor's Degree in Fine Art, Major in Photomedia",
      start: "1980",
      end: "1985",
    },
  ],
    awards: [
    {
      award: "Recipient of Premiers Department Grant with Penrith Regional Gallery",
      year: "2003",
    },
    {
      award: "Recipient of New Media Grant for Interactive Works, Australia Council.",
      year: "1999",
    },
    {
      award: "The Art Directors Club, New York, NY 75th Awards, 'Merit Award for Editorial Publications' for Object Magazine, Craft Council of NSW.",
      year: "1996",
    },
    {
      award: "National Gallery of Australia Collection. 'Sea Shell Headset' Joyce Hinterding & Ian Hobbs",
      year: "1988",
    },
    {
      award: "National Gallery of Australia Collection. Poster, 'May 1st Club - Smash Capital'.",
      year: "1983",
    },
  ],
  work: [
    {
      company: "Motion",
      link: "https://motionapp.com/",
      badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
      title: "Senior Software Engineer",
      start: "2025",
      end: null,
      description:
        "Building an internal AI agents platform that enables marketing teams to create and manage AI-powered workflows.",
    },
    {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Architect",
      start: "2024",
      end: "2025",
      description:
        "Led technical architecture of a blockchain-based film funding platform.",
      highlights: [
        "Architected migration from CRA to Next.js for improved performance, SEO, and DX",
        "Established release process enabling faster deployments and reliable rollbacks",
        "Implemented system-wide monitoring and security improvements",
      ],
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "2024",
      description:
        "Led a product squad building an enterprise agile meeting platform.",
      highlights: [
        "Built design system with Tailwind CSS, improving development speed and time to market",
        "Implemented engineering practices: PR automation, code review guidelines, and workflows",
        "Open source contributions to Relay DevTools and React i18n tooling",
      ],
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
      title: "Lead Android Developer → Full Stack Developer",
      start: "2015",
      end: "2021",
      description:
        "Transitioned from mobile to full-stack development while leading distributed teams across multiple client projects.",
      highlights: [
        "Led frontend team at Evercast, building real-time platform supporting 30+ users per room with HD streaming and collaboration tools",
        "Developed offline-first Android app for DKMS, improving donor registration process",
        "Led development teams across multiple successful client projects",
      ],
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: ["On Site", "Android", "Java", "Kotlin"],
      title: "Android Developer → Lead Android Developer",
      start: "2012",
      end: "2015",
      description:
        "First Android developer, grew and led a team of 15+ engineers. Established mobile engineering culture and delivery processes.",
      highlights: [
        "Developed apps for major Polish companies including LOT, Polskie Radio, and Agora",
        "Built and mentored high-performing mobile development team",
      ],
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: ["On Site", "C/C++", "LTE", "Agile"],
      title: "C/C++ Developer",
      start: "2010",
      end: "2012",
      description:
        "Developed software for LTE base stations at enterprise scale. Built strong foundations in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "AI", "Browser Extension"],
      description: "Autonomous QA AI agent for web applications",
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "43frames",
      techStack: ["TypeScript", "Next.js", "AI"],
      description: "AI-powered image and video generation studio",
      link: {
        label: "43frames.com",
        href: "https://43frames.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "Open source, print-friendly CV template. 9,600+ stars on GitHub",
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
