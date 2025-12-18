import { useState } from "react";
import { NavLink } from "react-router";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLinkProps {
  isActive: boolean;
}

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Tipando a função de estilo
  const linkStyle = ({ isActive }: NavLinkProps): string => 
    isActive 
      ? "text-2xl text-dracula-secondary font-bold border-l-4 border-dracula-secondary pl-4 transition-all" 
      : "text-2xl text-dracula-text hover:text-dracula-cyan pl-4 transition-all";

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button 
            className="text-dracula-cyan p-2 outline-none cursor-pointer"
            aria-label="Abrir menu"
          >
            <HamburgerMenuIcon className="w-8 h-8" />
          </button>
        </SheetTrigger>
        
        <SheetContent 
          side="right" 
          className="bg-dracula-bg border-dracula-current text-dracula-text w-[70%] sm:w-75"
        >
          <SheetHeader>
            <SheetTitle className="text-dracula-cyan font-jetbrains tracking-widest text-left border-b border-dracula-current pb-4 mt-4">
              MENU
            </SheetTitle>
          </SheetHeader>
          
          <ul className="flex flex-col gap-8 mt-10">
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setIsOpen(false)} className={linkStyle}>
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink to="/curriculum" onClick={() => setIsOpen(false)} className={linkStyle}>
                Currículo
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setIsOpen(false)} className={linkStyle}>
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={linkStyle}>
                Contato
              </NavLink>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;