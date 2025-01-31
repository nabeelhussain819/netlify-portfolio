import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nabeel Hussain",
  initials: "NH",
  url: "https://nabeelhussain.netlify.app/",
  location: "Karachi, Pakistan",
  locationLink: "",
  description:
    "Software engineer building efficient, user-focused solutions with a passion for innovation and excellence",
  summary:
    "Passionate and results-driven software engineer with a proven track record in crafting dynamic, user-friendly websites. Skilled in modern frameworks and technologies, I specialize in translating complex client needs into scalable, visually engaging digital solutions. Dedicated to optimizing performance and delivering exceptional user experiences.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML/CSS",
    "Javascript",
    "Typescript",
    "Tailwind CSS",
    "React.Js",
    "Next.Js",
    "Vue.js",
    "Nuxt.js",
    "Angular.js",
    "Node.js",
    "Laravel",
    "AntDesign UI",
    "Material UI",
    "PrimeVue UI",
    "AG Grid Vue",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hnabeel570@gmail.com",
    tel: "+923132029022",
    social: {
      Email: {
        name: "Email",
        url: "mailto:hnabeel570@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nabeelhussain819",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nabeelhussain819/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "hnabeel570@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  info: [{ name: "hnabeel570@gmail.com", icon: HomeIcon, label: "Email" }],
  work: [
    {
      company: "Sohomax",
      href: "https://www.sohomax.co/",
      badges: ["Remote"],
      location: "Seoul, South Korea",
      title: "Software Engineer (Frontend)",
      logoUrl: "/sohomax.jpg",
      start: "Dec 2023",
      end: "Present",
      description:
        "Designed and implemented scalable, modular infrastructure, Performed detailed reviews of pull requests to ensure code quality, Collaborated closely with project managers to optimize workflows, Work with senior developers to update the website and develop new features.",
    },
    {
      company: "Digital Auxilius PVT LTD",
      badges: [],
      href: "https://digitalauxilius.com/",
      location: "Karachi, Pakistan",
      title: "Software Engineer",
      logoUrl: "/dax.jpg",
      start: "Oct 2022",
      end: "Dec 2023",
      description:
        "Played a key role in developing the frontend for HealthCareTalentLink, a professional networking platform for medical professionals. Collaborated seamlessly with development and testing teams, delivering solutions that surpassed client expectations in functionality (85%), scalability (70%), and performance (70%). Focused on detail-oriented reviews and development of technology that exceeded performance expectations. Proactively maintained and enhanced existing software systems.",
    },
    {
      company: "Stexity PVT LTD ",
      href: "https://www.linkedin.com/company/stexity/posts/?feedView=all",
      badges: [],
      location: "Karachi, Pakistan",
      title: "Web Developer",
      logoUrl: "/stexity.jpg",
      start: "June 2021",
      end: "Sep 2022",
      description:
        "Lead development of FlexEMarket, An e-commerce platform Led the initiative to modernize an outdated codebase, aligning it with current development standards. Proficient in web development with HTML, CSS, and JavaScript, ReactJs, NodeJs and ExpressJs.",
    },
  ],
  education: [
    {
      school: "Sindh Madressatul Islam University",
      href: "https://smiu.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/smiu.jpg",
      start: "2018",
      end: "2022",
    },
    {
      school: "GOVT. Dehli College",
      href: "https://www.linkedin.com/company/government-dehli-college/?originalSubdomain=pk",
      degree: "Higher Secondary school Certificate",
      logoUrl: "/dehli.jpg",
      start: "2016",
      end: "2018",
    },
    {
      school: "Al Hameed Secondary School",
      href: "https://www.linkedin.com/company/al-hameed-secondary-school/?originalSubdomain=pk",
      degree: "Secondary school Certificate",
      logoUrl: "/school.jpg",
      start: "2010",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Compass",
      href: "",
      dates: "2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components also integerated APIs for Compass.",
      technologies: [
        "Nuxt.js",
        "Typescript",
        "AntDesign",
        "TailwindCSS",
        "AgGridVue",
      ],
      links: [],
      image: "/compass.png",
      video: "",
    },
    {
      title: "Arcelik",
      href: "https://www.arcelikglobal.com/en/",
      dates: "2024 - 2024",
      active: true,
      description:
        "Adding new components and pages with API integeration for Arcelik call center website and for arcelik inner product.",
      technologies: ["React.js", "Typescript", "Materail UI"],
      links: [
        {
          type: "Website",
          href: "https://www.arcelikglobal.com/en/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/arcelic.png",
      video: "",
    },
    {
      title: "Editor Js Helper Package",
      href: "https://www.npmjs.com/package/@nabeelh/editorjs-fontsize-tool?activeTab=readme",
      dates: "2024 - Present",
      active: true,
      description:
        "Developed an open-source helper package for the Editor.js to improve font styles in the Editor JS.",
      technologies: ["TypeScript", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://www.npmjs.com/package/@nabeelh/editorjs-fontsize-tool?activeTab=readme",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/nabeelhussain819/editorjs-fontsize-tool",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/editor.png",
      video: "",
    },
    {
      title: "Forsit Hub",
      href: "",
      dates: "2024 - Present",
      active: true,
      description:
        "Developing a web application for Forsit to manage the data of their customers using Monorepo.",
      technologies: [
        "Nuxt.js",
        "Typescript",
        "PrimeVue",
        "MonoRepo",
        "TailwindCSS",
        "AgGridVue",
      ],
      links: [],
      image: "/hub.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Compass",
      dates: "2023 - Present",
      location: "Sohomax | South Korea",
      description:
        "Product design and development for managing different types of data also analyzing them.",
      image: "/compass.png",
      mlh: "/compass.png",
      links: [],
      technologies: [
        "Nuxt.js",
        "Typescript",
        "PrimeVue",
        "MonoRepo",
        "TailwindCSS",
        "AgGridVue",
      ],
    },
    {
      title: "Forsit Hub",
      dates: "2023 - Present",
      location: "Sohomax | South Korea",
      description:
        "Developing a web application for Forsit to manage the data of their customers using Monorepo.",
      image: "/hub.png",
      mlh: "/hub.png",
      links: [],
      technologies: [
        "Nuxt.js",
        "Typescript",
        "PrimeVue",
        "MonoRepo",
        "TailwindCSS",
        "AgGridVue",
      ],
    },
    {
      title: "HealthCareTalentLink",
      dates: "2022 - 2023",
      location: "Digital Auxilius | Karachi, Pakistan",
      description:
        "Developed a web application to manage jobs and chat with recruiters.",
      icon: "public",
      image: "/hctl.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
      ],
      technologies: [
        "Next.js",
        "Typescript",
        "AntDesign",
        "Laravel",
        "TailwindCSS",
      ],
    },
    {
      title: "DureForce",
      dates: "2021 - 2022",
      location: "Remote | Karachi, Pakistan",
      image: "/dure.png",
      technologies: [
        "Vue.js",
        "Typescript",
        "AntDesign",
        "Laravel",
        "TailwindCSS",
      ],
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://dureforce.com/",
        },
      ],
    },
    {
      title: "FlexEMarket",
      dates: "2021 - 2022",
      location: "Remote | Karachi, Pakistan",
      image: "/flex.png",
      win: "Best Data Hack",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.flexemarket.com/",
        },
      ],
      technologies: [
        "Vue.js",
        "Typescript",
        "Laravel",
        "AntDesign",
        "TailwindCSS",
      ],
    },
    {
      title: "BullsEYE",
      dates: "2021 - 2022",
      location: "Remote | Karachi, Pakistan",
      image: "/bull.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bulleyes.afnato.com/",
        },
      ],
      technologies: [
        "Vue.js",
        "Typescript",
        "Laravel",
        "AntDesign",
        "TailwindCSS",
      ],
    },
    {
      title: "Super Luxury Car Rental",
      dates: "2021 - 2022",
      location: "Remote | Karachi, Pakistan",
      image: "/car.png",
      links: [
        {
          title: "Website",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://www.superdriverental.com/",
        },
      ],
      technologies: ["Laravel", "CSS", "HTML"],
    },
    {
      title: "Arcelik Global",
      dates: "2022 - 2022",
      location: "Remote | Karachi, Pakistan",
      image: "/arcelik.png",
      links: [
        {
          title: "Webite",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.arcelikglobal.com/en/",
        },
      ],
      technologies: ["React.Js", "CSS", "Material UI", "TypeScript"],
    },
  ],
} as const;
