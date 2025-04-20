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
    icon?:string;
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
  defaultTitle: "Sk Salman",
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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.604v5.588z"/>
      </svg>`,
      url: "https://www.linkedin.com/in/sk-salman-dev/",
    },
    {
      name: "GitHub",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>`,
      url: "https://github.com/IamSAL",
    },
    {
      name: "Email",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M12 13.5L2 6.5V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6.5l-10 7zm0-2L22 5H2l10 6.5z"/>
      </svg>`,
      url: "mailto:sksalmanmiah@gmail.com",
    },
  ],
  enableDarkMode: true,
  enableTags: true,
};
