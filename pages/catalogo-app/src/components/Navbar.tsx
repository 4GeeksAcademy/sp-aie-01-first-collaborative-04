import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Catálogo</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;