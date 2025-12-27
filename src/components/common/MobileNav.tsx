import { useState } from "react";
import { NavLink } from "react-router";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLinkProps {
  isActive: boolean;
}

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // Ajustado para usar as variáveis do tema dinâmico
  const linkStyle = ({ isActive }: NavLinkProps): string => 
    isActive 
      ? "text-2xl text-dracula-secondary font-bold border-l-4 border-dracula-secondary pl-4 transition-all" 
      : "text-2xl text-foreground hover:text-dracula-cyan pl-4 transition-all";

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button 
            className="text-dracula-cyan p-2 outline-none cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Abrir menu"
          >
            <HamburgerMenuIcon className="w-8 h-8" />
          </button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="bg-background border-border text-foreground w-[70%]"
        >
          <SheetHeader>
            <SheetTitle className="text-dracula-cyan font-jetbrains tracking-widest text-left border-b border-border pb-4 mt-4">
              MENU
            </SheetTitle>
            <SheetDescription className="sr-only">
              Menu de navegação lateral para dispositivos móveis.
            </SheetDescription>
          </SheetHeader>
          
          <ul className="flex flex-col gap-8 mt-10">
            <li>
              <NavLink to="/" onClick={handleCloseMenu} className={linkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={handleCloseMenu} className={linkStyle}>
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink to="/curriculum" onClick={handleCloseMenu} className={linkStyle}>
                Currículo
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={handleCloseMenu} className={linkStyle}>
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleCloseMenu} className={linkStyle}>
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
