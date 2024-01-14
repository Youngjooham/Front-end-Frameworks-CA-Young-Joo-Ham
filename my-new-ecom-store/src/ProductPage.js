import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from './CartContext';
import './ProductPage.css';
const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        fetch(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched product data:", data); // Debugging log
                setProduct(data);
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    const addToCart = () => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const isDiscounted = product.price > product.discountedPrice;
    const discountPercentage = isDiscounted
        ? 100 - (product.discountedPrice / product.price) * 100
        : 0;

    return (
        <div className="product-container">
            <h1 className="product-title">{product.title}</h1>
            <img src={product.imageUrl} alt={product.title} />
            <p className="product-description">{product.description}</p>
            <p className="product-price">
                Price: ${product.discountedPrice.toFixed(2)}
                {isDiscounted && (
                    <p className="discount-info"> (Discounted from ${product.price.toFixed(2)}, save {discountPercentage.toFixed(2)}%)</p>
                )}
            </p>
            <h3>Reviews</h3>
            {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((review, index) => (
                    <div key={index}>
                        <p><strong>{review.username}</strong>: {review.description}</p>
                        <p>Rating: {review.rating}/5</p>
                    </div>
                ))
            ) : (
                <p>No reviews available for this product.</p>
            )}
            <button className="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;

