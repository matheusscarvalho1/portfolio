import { useTranslation } from "react-i18next";

const Footer = () => {

    const year = new Date().getFullYear();
    const { t } = useTranslation(); 

    return ( 
        <footer aria-label={t("footer.aria_label")} className="bg-dracula-bg text-dracula-text p-8 w-full text-center border-t border-dracula-current">
            <small className="text-sm text-dracula-text/60">
                © {year} Matheus Carvalho. {t("footer.rights")}
            </small>
        </footer> 
    );
}
 
export default Footer;