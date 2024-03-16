import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";

function Nav() {
  /*nav scroll */

  const [show, handShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", handShow(window.scrollY > 100));
    return () =>
      window.removeEventListener("scroll", handShow(window.scrollY > 100));
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://pngimg.com/d/netflix_PNG10.png"
          alt=""
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/474x/44/78/1b/44781ba4ac0c63f2ecf0793a533bf8dc.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
export default Nav;
