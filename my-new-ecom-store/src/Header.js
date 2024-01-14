import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon'; 
import './Header.css'; 

const Header = () => {
    const itemCount = 5; // Placeholder for the number of items in the cart

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <CartIcon itemCount={itemCount} />
        </header>
    );
};

export default Header;
