import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const navigate = useNavigate();

    const viewProduct = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product-card">
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.description}</p>
            <button onClick={viewProduct}>View Product</button>
        </div>
    );
};

export default Product;
