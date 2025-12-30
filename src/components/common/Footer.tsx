const Footer = () => {

    const year = new Date().getFullYear();

    return ( 
        <footer aria-label="Rodapé" className="bg-dracula-bg text-dracula-text p-8 w-full text-center border-t border-dracula-current">
            <small className="text-sm text-dracula-text/60">
                © {year} Matheus Carvalho. Todos os direitos reservados.
            </small>
        </footer> 
    );
}
 
export default Footer;