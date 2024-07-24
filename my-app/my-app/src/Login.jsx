import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      toast.success("User logged in successfully", {
        position: "top-center"
      });
      navigate('/Profile');
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-center"
      });
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className='mb-3'>
        <label>Email:</label>
        <input
          type='email'
          className='form-control'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label>Password:</label>
        <input
          type='password'
          className='form-control'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-info">Login</button>
      <p>New user? <Link to="/Register">Register here</Link></p>
    </form>
  );
};

export default Login;
