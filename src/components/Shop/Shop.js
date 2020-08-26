import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../Products/Products'
import Cart from '../Cart/Cart';


const products = () => {
    const firstTenData = fakeData.slice(0, 10);
    // eslint-disable-next-line
    let [products, setProducts] = useState(firstTenData);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cart, setCart] = useState([]);

    const handleAddProduct = (pro) => {
        console.log('product added', pro);
        const newCart = [...cart, pro];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {products.map(productValue => <Products handleAddProduct={handleAddProduct} product={productValue}></Products> )}
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default products;