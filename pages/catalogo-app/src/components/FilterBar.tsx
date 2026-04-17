import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);
        onFilterChange(selectedCategory, size);
    };

    const handleSizeChange = (event) => {
        const selectedSize = event.target.value;
        setSize(selectedSize);
        onFilterChange(category, selectedSize);
    };

    return (
        <div className="filter-bar">
            <select value={category} onChange={handleCategoryChange}>
                <option value="">Todas las categorías</option>
                <option value="ropa">Ropa</option>
                <option value="calzado">Calzado</option>
                <option value="accesorios">Accesorios</option>
            </select>
            <select value={size} onChange={handleSizeChange}>
                <option value="">Todas las tallas</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
            </select>
        </div>
    );
};

export default FilterBar;