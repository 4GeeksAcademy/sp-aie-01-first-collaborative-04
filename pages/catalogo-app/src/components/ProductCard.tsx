import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>Categoría: {product.categoría}</p>
      <p>Talla: {product.talla}</p>
      <p>Precio: ${product.precio.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;