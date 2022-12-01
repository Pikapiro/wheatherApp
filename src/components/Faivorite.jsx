import React from "react";
import FavLock from "./FavLock";
import "./fav.css";

export default function Faivorite(props) {
  return (
    <div className="faDiv">
      {props.arr.map((data, i) => {
        return (
          <FavLock
            index={i}
            name={data.name}
            k={data.key}
            delteLoaction={props.delteLoaction}
            setCityKey={props.setCityKey}
          />
        );
      })}
    </div>
  );
}
