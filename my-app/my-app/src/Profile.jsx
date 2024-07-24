import React from 'react'
import Logout from './Logout'

const Profile = () => {
  return (
    <div>
      <h1>Welcome to the main page</h1>
      <img src='https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      style={{
        width:"500px",
        height:"300px"
      }}
      
      ></img>
      <Logout/>
    </div>
  )
}

export default Profile
