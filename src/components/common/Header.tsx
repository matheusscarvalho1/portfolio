import { NavLink } from "react-router";
import { motion } from "motion/react";

const Header = () => {
    const baseLink = "transition-all duration-300 hover:text-dracula-cyan";
    const activeLink = "text-dracula-secondary border-b-2 border-dracula-secondary pb-1";

    return ( 
        <header className="flex items-center p-8 bg-dracula-bg text-dracula-text w-full border-b border-dracula-current">
            <nav className="flex justify-between w-full items-center px-20">
                <NavLink to="/">
                    <motion.img 
                        src="/assets/logo.png" 
                        alt="Logo Desenvolvedor" 
                        /* Aumentado de w-12/h-12 para w-16/h-16 */
                        className="w-16 h-16 object-contain cursor-pointer"
                        
                        // Estado Inicial e Entrada
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        
                        // O "Hover" leve e contextual (escala 1.1 para o novo tamanho)
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

                <ul className="flex gap-8 font-medium font-jetbrains uppercase text-sm tracking-widest">
                    <NavLink to="/" className={({ isActive }) => isActive ? activeLink : baseLink}>
                        Home
                    </NavLink>
                    <NavLink to="/services" className={({ isActive }) => isActive ? activeLink : baseLink}>
                        Serviços
                    </NavLink>
                    <NavLink to="/curriculum" className={({ isActive }) => isActive ? activeLink : baseLink}>
                        Currículo
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? activeLink : baseLink}>
                        Projetos
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : baseLink}>
                        Contato
                    </NavLink>
                </ul>
            </nav>
        </header>  
    );
}
 
export default Header;
