import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './CartContext';
import './CartIcon.css';

const CartIcon = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/Checkout');
    };

    return (
        <div className="cart-icon" onClick={handleCartClick}>
            <span>🛒</span>
            {cart.length > 0 && (
                <span className="item-count">{cart.length}</span>
            )}
        </div>
    );
};

export default CartIcon;
