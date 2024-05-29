import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Header = () => {
    const [user]=useAuthState(auth);
    const [signOut]=useSignOut(auth);

    const logOut =()=>{
        signOut();
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/shipment">Shipment</Link>
                <Link to='/signup'>SignUp</Link>
                {
                    user ?<button onClick={logOut}>SignOut</button> :<Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;