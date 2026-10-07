import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/syedsubhanhussain-sih",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/syed-subhan-hussain-414675337",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "DEFENXIA — Smart India Hackathon",
    description:
      "Mobile and network security solution designed for the Smart India Hackathon. Performed vulnerability scanning, packet analysis, and phishing simulations, and led the team in implementing security protocols and presenting the solution to evaluators — reaching the SIH finalist round.",
    image: "/projects/project-1.png",
    link: "https://github.com/syedsubhanhussain-sih",
  },
  {
    title: "DEFENXIA — Mobile Security App",
    description:
      "Android-based mobile security application (college major project) that detects malicious activities. Implemented real-time threat detection and user alert mechanisms with Java and Android SDK, integrating basic networking concepts and phishing simulations via GoPhish & API services. Winner of the Mini Project Competition.",
    image: "/projects/project-2.png",
    link: "https://github.com/syedsubhanhussain-sih",
  },
  {
    title: "Cyber Security Lab & Hands-on Training",
    description:
      "Practical offensive and defensive security work: comprehensive Nmap vulnerability scanning across lab systems, analysis of 50+ network traffic dumps with Wireshark and tcpdump, controlled SQL Injection and XSS testing with Burp Suite, Snort IDS deployment, and ethical ARP poisoning / traffic sniffing experiments in a controlled environment.",
    image: "/projects/project-3.png",
    link: "https://github.com/syedsubhanhussain-sih",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/syedsubhanhussain-sih",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/syed-subhan-hussain-414675337",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Learning about me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:syedsubhanhussain.icb@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode:
    "https://github.com/willparker0027-ctrl/syed-subhan-hussain-space-portfolio",
};
