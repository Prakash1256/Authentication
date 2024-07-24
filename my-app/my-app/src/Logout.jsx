import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully", {
        position: "top-center"
      });
      navigate('/Login');
    } catch (error) {
      toast.error("Failed to logout", {
        position: "bottom-center"
      });
      console.log(error.message);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger"
    style={{
        position:"relative",
        top:"190px",
        left:"-280px"
    }}
    >
      Logout
    </button>
  );
};

export default Logout;
