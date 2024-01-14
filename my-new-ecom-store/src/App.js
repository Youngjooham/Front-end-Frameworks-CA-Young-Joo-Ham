import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartContext from './CartContext';
import Layout from './Layout';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import CheckoutSuccessPage from './CheckoutSuccessPage';
import ContactPage from './ContactPage';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:productId" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Layout>
        </CartContext.Provider>
    );
}

export default App;
