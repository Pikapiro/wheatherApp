import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./favLock.css";
export default function FavLock(props) {
  const nev = useNavigate();
  const key = "RBLZnRtuLGGdI86AemztAAl8pru3cfWB";
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${props.k}?apikey=${key}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTemp(data);
      });
  }, []);
  const fa = () => {
    if (temp[0] == undefined) {
      return <p>loading</p>;
    } else {
      return <p> Now {temp[0].Temperature.Metric.Value} c</p>;
    }
  };

  const click = () => {
    let temp = {
      key: props.k,
      name: props.name,
    };

    props.setCityKey(temp);
    nev("/");
  };

  return (
    <div className="favDiv">
      <h1
        onClick={() => {
          click();
        }}
        className="tit"
      >
        {props.name}{" "}
      </h1>{" "}
      {fa()}
      <button
        onClick={() => {
          props.delteLoaction(props.index);
        }}
        className="btn"
      >
        remove
      </button>
    </div>
  );
}
