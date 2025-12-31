import { TbApi } from "react-icons/tb";
import { FaReact, FaNodeJs, FaRocket } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { SiNextdotjs } from "react-icons/si";

export const servicesData = [
  {
    id: "frontend",
    icon: <FaReact aria-hidden="true" />,
    color: "text-dracula-cyan",
  },
  {
    id: "backend",
    icon: <FaNodeJs aria-hidden="true" />,
    color: "text-dracula-green",
  },
  {
    id: "mobile",
    icon: <CiMobile2 aria-hidden="true" />,
    color: "text-dracula-primary",
  },
  {
    id: "performance",
    icon: <SiNextdotjs aria-hidden="true" />,
    color: "text-dracula-muted",
  },
  {
    id: "integration",
    icon: <TbApi aria-hidden="true" />,
    color: "text-dracula-muted",
  },
  {
    id: "fullstack",
    icon: <FaRocket aria-hidden="true" />,
    color: "text-dracula-red",
  },
];
