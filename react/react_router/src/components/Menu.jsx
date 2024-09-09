import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <h2>Menu</h2>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
        </div>
    );
};

export default Menu;