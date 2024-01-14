import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();
    const totalCost = cart.reduce((total, product) => total + (product.price || 0), 0);

    const handleCheckout = () => {
        console.log('Proceeding to checkout', cart);

        // Clear the cart
        setCart([]);

        navigate('/checkout-success');
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            {cart.map((product, index) => (
                <div key={index} className="checkout-item">
                    <img src={product.imageUrl} alt={product.title} />
                    <p>{product.title} - ${product.price}</p>
                </div>
            ))}
            <p className="total-cost">Total: ${totalCost.toFixed(2)}</p>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
    );
};

export default CheckoutPage;
