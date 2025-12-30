import { NavLink } from "react-router";
import { motion } from "motion/react";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./mode-toggle";

const Header = () => {

  const baseLink = "transition-all duration-300 hover:text-dracula-cyan text-sm tracking-widest uppercase transition-colors";
  const activeLink = "text-dracula-secondary md:border-b-2 md:border-dracula-secondary md:pb-1 font-bold";

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <nav  aria-label="Navegação principal" className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-12">
    
         <NavLink to="/" aria-label="Ir para a página inicial">
                    <motion.img 
                        src="/assets/LOGO.png" 
                        alt="Matheus Carvalho — Página inicial"
                        loading="lazy"
                        className="w-16 h-16 object-contain dark:brightness-110 transition-all"
                        
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        
                        transition={{ 
                            type: "spring", 
                            stiffness: 260, 
                            damping: 20,
                            delay: 0.1 
                        }}
                    />
                </NavLink>
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink to="/" aria-label="Ir para a página inicial" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" aria-label="Ir para a página de serviços" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" aria-label="Ir para a página de currículo" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Currículo
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" aria-label="Ir para a página de  projetos" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" aria-label="Ir para a página de contato" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Contato
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-2 md:gap-4">
          <ModeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
