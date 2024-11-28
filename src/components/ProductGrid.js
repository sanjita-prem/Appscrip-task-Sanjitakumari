import React from "react";
import "../styles/ProductGrid.css";

const ProductGrid = ({ products, onSortChange }) => {
  return (
    <div className="product-grid">
      <div className="sort-options">
        <label>Sort By:</label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
          <option value="price-high">Price: High to Low</option>
          <option value="price-low">Price: Low to High</option>
        </select>
      </div>
      <div className="grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
