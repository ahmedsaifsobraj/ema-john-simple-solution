import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);

    const addToCart = (selectedProducts) => {
        const exist = cart.find(product => product.id === selectedProducts.id);
        let newCart;
        if (!exist) {
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProducts.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);
        addToDb(selectedProducts.id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
            <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/orders">
                        <button className='btn-proceed'>Review Order</button>
                    </Link>
                </Cart>
          
            </div>
        </div>
    );
};

export default Shop;