import React, { useState } from 'react';
import './Shipment.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Shipment = (props) => {
    const [user]=useAuthState(auth);
    const [name, setName] = useState('');
    const[email,setEmail]=useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
   
    const handleNameBlur=event=>{
        setName(event.target.value);
    }


    const handleAddressBlur=event=>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur=event=>{
        setPhone(event.target.value);
    }

    return (
        <div className='from-container'>
        <div>
            <form>
                <h2 className='from-title'>Shipment Information</h2>
                <div className="input-group">
                    <label htmlFor='name'>Name</label>
                    <input onBlur={handleNameBlur} type="text" name="" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor='email'>Email</label>
                    <input value={user?.email} readOnly type="email" name="" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor='address'>Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor='phone'>Phone Number</label>
                    <input onBlur={handlePhoneBlur} type="integer" name="phone" id="" required />
                </div>
                <input className='from-submit' type='submit' value='Add Shipment'></input>

            </form>
           
        </div>


    </div>
    );
};

export default Shipment;