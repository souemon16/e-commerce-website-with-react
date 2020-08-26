import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const products = (props) => {
    const { name, img, price, seller, stock } = props.product;
    return (
        <div className="products-info">
            <div className="product-img">
                <img src={img} alt="product images" />
            </div>
            <div className="product-details">
                <h3 className="product-title">{name}</h3>
                <br />
                <p><small>by:{seller}</small></p>
                <p className="product-price">${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className="add-to-cart-button"> <FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>
            </div>
        </div>
    );
};

export default products;