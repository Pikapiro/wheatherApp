import React from "react";
import "./day.css";
export default function Day(props) {
  return (
    <div className="v">
      <p className="sda">{props.day}</p>

      <p>min {props.temp.Minimum.Value}c</p>
      <p>max {props.temp.Maximum.Value}c</p>
    </div>
  );
}
