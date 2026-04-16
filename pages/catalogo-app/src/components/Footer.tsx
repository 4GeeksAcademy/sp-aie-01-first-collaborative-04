import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;