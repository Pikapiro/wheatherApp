import React from "react";
import "./titlee.css";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="h">
      <p className="credit">developed by @dani shapiro</p>
      <div>
        {" "}
        <h1>Weather-app</h1>{" "}
      </div>

      <div>
        <Link to="/">
          {" "}
          <button className="m">Home</button>
        </Link>
        <Link to="/favorite">
          {" "}
          <button className="m">Faivorite</button>
        </Link>
      </div>
    </div>
  );
}
