
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItems';
import { removeFromDb } from '../../utilities/fakedb';
import './Orders.css'
import { Link } from 'react-router-dom';
const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = id => {
        const rest = cart.filter(pd => pd.id !== id);
        setCart(rest);
        removeFromDb(product.id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                }

            </div>
            <div>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link className='proceed-link' to="/inventory">
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;