import { useState } from "react";
import { NavLink } from "react-router";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

interface NavLinkProps {
  isActive: boolean;
}

const MobileNav: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const linkStyle = ({ isActive }: NavLinkProps): string => 
    isActive 
      ? "text-2xl text-dracula-secondary font-bold border-l-4 border-dracula-secondary pl-4 transition-all" 
      : "text-2xl text-foreground hover:text-dracula-cyan pl-4 transition-all";

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="text-dracula-cyan p-2 outline-none cursor-pointer hover:opacity-80 transition-opacity"
            aria-label={t("navbar.aria_menu_open")}
          >
            <HamburgerMenuIcon className="w-8 h-8" />
          </Button>
        </SheetTrigger>
        <SheetContent 
          side="right" 
          className="bg-background border-border text-foreground w-[70%]"
        >
          <SheetHeader>
            <SheetTitle className="text-dracula-cyan font-jetbrains tracking-widest text-left border-b border-border pb-4 mt-4">
              {t("navbar.menu")}
            </SheetTitle>
            <SheetDescription className="sr-only">
              {t("navbar.menu_description")}
            </SheetDescription>
          </SheetHeader>
          
          <ul className="flex flex-col gap-8 mt-10">
            <li>
              <NavLink 
                to="/" 
                onClick={handleCloseMenu} 
                className={linkStyle}
                aria-label={t("navbar.aria_home")}
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                onClick={handleCloseMenu} 
                className={linkStyle}
                aria-label={t("navbar.aria_services")}
              >
                {t("navbar.services")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resume" 
                onClick={handleCloseMenu} 
                className={linkStyle}
                aria-label={t("navbar.aria_resume")}
              >
                {t("navbar.resume")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                onClick={handleCloseMenu} 
                className={linkStyle}
                aria-label={t("navbar.aria_projects")}
              >
                {t("navbar.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={handleCloseMenu} 
                className={linkStyle}
                aria-label={t("navbar.aria_contact")}
              >
                {t("navbar.contact")}
              </NavLink>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;