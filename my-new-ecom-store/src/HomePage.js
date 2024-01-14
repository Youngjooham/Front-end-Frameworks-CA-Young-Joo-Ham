import React, { useState, useEffect } from 'react';
import Product from './Product';
import './HomePage.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://api.noroff.dev/api/v1/online-shop')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                className="search-bar"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div>
                {filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
