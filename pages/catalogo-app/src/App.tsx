import React from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
    return (
        <div className="catalogo-app">
            <Navbar />
            <FilterBar />
            <ProductGrid />
            <Footer />
        </div>
    );
};

export default App;