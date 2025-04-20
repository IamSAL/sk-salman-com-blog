type SiteConfig = {
  name: string;
  avatar?: string;
  headlineOne: string;
  headlineTwo?: string;
  defaultTitle: string;
  defaultDescription: string;
  timeline: {
    name: string;
    url: string;
    time: string;
    description?: string;
  }[];
  contact: {
    name: string;
    url: string;
  }[];
  enableDarkMode: boolean;
  enableTags: boolean;
};

type TwitterConfig = {
  url: string;
  handleName: string;
};

export const TWITTER_CONFIG: TwitterConfig = {
  url: "https://twitter.com/thisisyhr",
  handleName: "thisisyhr",
};

export const SITE_CONFIG: SiteConfig = {
  name: "Sk Salman",
  avatar: "https://avatars.githubusercontent.com/u/34414233",
  headlineOne: "Living on TypeScript, React, Next.js, and Angular.",
  headlineTwo: "Building fast, interactive, and accessible interfaces.",
  defaultTitle: "Sk Salman- Portfolio",
  defaultDescription:
    "Frontend developer with expertise in TypeScript, React, Next.js, and Angular. Focused on quality UX and DX.",
  timeline: [
    {
      name: "KONA Software Lab Ltd.",
      url: "#",
      time: "Apr 2022 – Dec 2023",
      description: "Developing UIs for fintech with React/Next/Angular.",
    },
    {
      name: "SoftwindTech Ltd.",
      url: "#",
      time: "Sep 2021 – Apr 2022",
      description:
        "Fast paced and futuristic startup. Developed UIs for various projects.",
    },
    {
      name: "Daffodil International University",
      url: "#",
      time: "Jan 2017 – Dec 2020",
      description: "BSc. in CSE",
    },
  ],
  contact: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sk-salman-dev/",
    },
    {
      name: "GitHub",
      url: "https://github.com/IamSAL",
    },
    {
      name: "Email",
      url: "mailto:sksalmanmiah@gmail.com",
    },
  ],
  enableDarkMode: true,
  enableTags: true,
};
