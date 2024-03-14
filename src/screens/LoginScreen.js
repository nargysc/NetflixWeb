import React from 'react'
import "./LoginScreen.css";

function LoginScreen() {
  return  (
  <div className='loginScreen'>
        <img className='loginScreen__logo'
        src="https://pngimg.com/d/netflix_PNG10.png"
         alt="" />
         <button className='loginScreen__button'>
            Sign In
         </button>
         <div className = "loginScreen__gradient" >

         </div>
    </div>
  ); 
}

export default LoginScreen;
