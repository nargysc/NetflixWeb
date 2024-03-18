import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className="plansScreen">
      <div className="plansScreen__info">
        <h2>Basic</h2>
        <h5>720pk</h5>
        <button className="btn">Current</button>
      </div>
      <div className="plansScreen__info">
        <h2>Standart</h2>
        <h5>1080pk</h5>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen__info">
        <h2>Premium</h2>
        <h5>4K + HDR</h5>
        <button>Subscribe</button>
      </div>
    </div>
  );
}
export default PlansScreen;
