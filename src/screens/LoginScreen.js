import React, { useState } from "react";
import "./LoginScreen.css";
import "./SignupScreen";
import SignupScreen from "./SignupScreen";
import Video from "../screens/netflix.mp4";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://pngimg.com/d/netflix_PNG10.png"
          alt=""
        />
        <video controls autoPlay loop muted src={Video} type="netflix.mp4" />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited Movies, TV Shows and more.</h1>
            <h2>Watch anywehere, cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
