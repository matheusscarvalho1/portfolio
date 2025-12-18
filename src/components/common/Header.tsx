import { NavLink } from "react-router";
import { motion } from "motion/react";
import MobileNav from "./MobileNav";

const Header = () => {
  const baseLink = "transition-all duration-300 hover:text-dracula-cyan text-sm tracking-widest uppercase";
  const activeLink = "text-dracula-secondary md:border-b-2 md:border-dracula-secondary md:pb-1 font-bold";

  return (
    <header className="sticky top-0 z-50 w-full bg-dracula-bg/80 backdrop-blur-md border-b border-dracula-current">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-12">
    
         <NavLink to="/">
                    <motion.img 
                        src="/assets/logo.png" 
                        alt="Logo Desenvolvedor" 
                        className="w-16 h-16 object-contain cursor-pointer"
                        
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

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Serviços
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Currículo
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : baseLink}>
              Contato
            </NavLink>
          </li>
        </ul>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Header;
