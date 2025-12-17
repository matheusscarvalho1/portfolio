import { NavLink } from "react-router";

const Header = () => {
    // Classes para facilitar a manutenção
    const baseLink = "transition-all duration-300 hover:text-dracula-cyan";
    const activeLink = "text-dracula-secondary border-b-2 border-dracula-secondary pb-1";

    return ( 
        <header className="flex items-center p-8 bg-dracula-bg text-dracula-text w-full border-b border-dracula-current">
            <nav className="flex justify-between w-full items-center px-20">
                <NavLink to="/">
                    <img src="/assets/logo.png" alt="Logo Desenvolvedor" className="w-12 h-12 object-contain" />
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
