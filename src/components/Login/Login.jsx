import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Login = (props) => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate = useNavigate(); 
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }

    const signInUser=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    if(user){
        navigate(from,{replace:true});
    }
    return (
        <div className='from-container'>
            <div>
                <form onSubmit={signInUser}>
                    <h2 className='from-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur}type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='from-submit' type='submit' value='Login'></input>

                </form>
                <p  style={{ color: 'red', textAlign: 'center' }}>{error?.message}</p>
                { loading && <p>Loading....</p>}
                <p style={{textAlign:'center'}}>New to Ema-John? <Link className='form-link' to='/signup'>Create a new account</Link></p>
            </div>


        </div>
    );
};

export default Login;