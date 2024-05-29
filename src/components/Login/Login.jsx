import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = (props) => {
    return (
        <div className='from-container'>
            <div>
                <form>
                    <h2 className='from-title'>Login</h2>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='from-submit' type='submit' value='Login'></input>

                </form>
                <p style={{textAlign:'center'}}>New to Ema-John? <Link className='form-link' to='/signup'>Create a new account</Link></p>
            </div>


        </div>
    );
};

export default Login;