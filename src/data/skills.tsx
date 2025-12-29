import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
  FaBootstrap, 
  FaGit, 
  FaGithub
} from "react-icons/fa";

import {
  SiTailwindcss, 
  SiRedux, 
  SiNextdotjs, 
  SiPython, 
  SiPhp, 
  SiDocker, 
  SiPostgresql, 
  SiTypescript, 
  SiJquery, 
  SiExpress, 
  SiFastify, 
  SiStyledcomponents, 
  SiMongodb, 
  SiPostman,
  SiGraphql,
  SiPrisma,
  SiDrizzle
} from "react-icons/si"; 

interface Skill {
  icon: React.ReactNode;
  name: string;
  color: string;
}

 export const FrontEndSkills: Skill[] = [
    { icon: <FaReact />, name: "React / Native", color: "group-hover:text-dracula-cyan" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "group-hover:text-white" },
    { icon: <SiTypescript />, name: "TypeScript", color: "group-hover:text-blue-400" },
    { icon: <FaJs />, name: "JavaScript", color: "group-hover:text-yellow-400" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "group-hover:text-dracula-cyan" },
    { icon: <SiStyledcomponents />, name: "Styled Components", color: "group-hover:text-pink-400" },
    { icon: <FaBootstrap />, name: "Bootstrap", color: "group-hover:text-purple-500" },
    { icon: <SiJquery />, name: "jQuery", color: "group-hover:text-blue-500" },
    { icon: <SiRedux />, name: "Redux", color: "group-hover:text-purple-400" },
    { icon: <FaHtml5 />, name: "HTML5", color: "group-hover:text-dracula-orange" },
    { icon: <FaCss3 />, name: "CSS3 / SASS", color: "group-hover:text-blue-400" },
    { icon: <FaFigma />, name: "Figma", color: "group-hover:text-dracula-pink" },
  ];

  export const BackEndSkills: Skill[] = [
    { icon: <FaNodeJs />, name: "Node.js", color: "group-hover:text-dracula-green" },
    { icon: <SiFastify />, name: "Fastify", color: "group-hover:text-white" },
    { icon: <SiExpress />, name: "Express", color: "group-hover:text-yellow-100" },
    { icon: <SiPostgresql />, name: "PostgreSQL / SQL", color: "group-hover:text-blue-300" },
    { icon: <SiMongodb />, name: "MongoDB / NoSQL", color: "group-hover:text-green-300" },
    { icon: <SiPrisma />, name: "Prisma ORM", color: "group-hover:text-purple-400" },
    { icon: <SiDrizzle />, name: "Drizzle ORM", color: "group-hover:text-green-400" },
    { icon: <SiDocker />, name: "Docker", color: "group-hover:text-blue-400" },
    { icon: <SiPython />, name: "Python", color: "group-hover:text-yellow-500" },
    { icon: <SiPhp />, name: "PHP", color: "group-hover:text-blue-400" },
    { icon: <SiPostman />, name: "Postman", color: "group-hover:text-orange-400" },
    { icon: <SiGraphql />, name: "GraphQL", color: "group-hover:text-pink-600" },
    { icon: <FaGit />, name: "Git", color: "group-hover:text-dracula-orange" },
    { icon: <FaGithub />, name: "GitHub", color: "group-hover:text-dracula-purple" },
  ];