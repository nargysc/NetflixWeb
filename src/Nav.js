import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  /*nav scroll */
  const [show, handShow] = useState(false);
  const transitionNavBar = () => {
    handShow(window.scrollY > 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div class="nav">
      <div className={`nav ${show && "nav__black"}`}>
        <div class="nav__contents">
          <img
            className="nav__logo"
            src="https://pngimg.com/d/netflix_PNG10.png"
            alt=""
          />

          <img
            className="nav__avatar"
            src="https://i.pinimg.com/474x/44/78/1b/44781ba4ac0c63f2ecf0793a533bf8dc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
