import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutSuccessPage.css';


const CheckoutSuccessPage = () => {
    return (
        <div className="checkout-success-container">
            <h1>Checkout Successful</h1>
            <p>Your order has been placed successfully.</p>
            <Link to="/">Return to Store</Link>
        </div>
    );
};


export default CheckoutSuccessPage;
