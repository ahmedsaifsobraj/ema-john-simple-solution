import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../firebase.init';
const SignUp = (props) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword, setConfirmPassword]=useState('');
    const [error, setError]=useState('');

    const [createUserWithEmailAndPassword]=useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    
    const handlePasswordBlur = event=>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event=>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password did not matched!!');
            return;
        }
        if(password.length<6){
            setError('Password should be more than 5 character !!');
            return;
        }
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='from-container'>
            <div>
                <form onSubmit={handleCreateUser}>
                    <h2 className='from-title'>SignUp</h2>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='from-submit' type='submit' value='SignUp'></input>

                </form>
                <p style={{color:'red', textAlign:'center'}}>{error}</p>
                <p style={{textAlign:'center'}}>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
            </div>


        </div>
    );
};

export default SignUp;