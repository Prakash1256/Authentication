import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            console.log("User registered successfully");
            toast.success("User registered successfully", {
                position: "top-center",
            });
        } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
                position: "bottom-center",
            });
        }
    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <h3>Sign up</h3>
                <div className='mb-3'>
                    <label>First name:</label>
                    <input 
                        type='text'
                        className='form-control' 
                        placeholder='First name'
                        onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label>Last name:</label>
                    <input 
                        type='text'
                        className='form-control' 
                        placeholder='Last name'
                        onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label>Email:</label>
                    <input 
                        type='email'
                        className='form-control' 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-3'>
                    <label>Password:</label>
                    <input 
                        type='password'
                        className='form-control' 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-info">Signup</button>
                <p>Already user</p>
                <Link to="/Login">Login</Link>
            </form>
            <ToastContainer />
        </>
    )
}

export default Register;
