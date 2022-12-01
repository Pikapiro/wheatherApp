import React, { useState, useEffect } from "react";
import "./home.css";

export default function Home(props) {
  const key = "zErHiN42CH8flesshsozcBsTKBiasfV4";
  const [currnt, setCurrnt] = useState([]);
  const s = () => {
    if (currnt[0] == undefined) {
      return <div></div>;
    } else
      return (
        <div className="loc">
          <p className="dsa"> {props.cityKey.name}</p>
          <button
            className="inss"
            onClick={() => {
              props.addLocation();
            }}
          >
            add to favorites
          </button>
          <p>Now: {currnt[0].WeatherText}</p>
          <p>{currnt[0].Temperature.Metric.Value} c</p>
        </div>
      );
  };

  useEffect(() => {
    fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${props.cityKey.key}?apikey=${key}&metric=true`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        props.setForcast(data);
      });
    fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${props.cityKey.key}?apikey=${key}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrnt(data);
      });
  }, [props.cityKey]);

  return (
    <div className="main">
      <div className="subDiv">
        <div className="clean">
          {s()}
          <div className="cleant">
            <input
              className="in"
              type="text"
              placeholder="search weather..."
              onClick={() => {
                props.setShowDiv(true);
              }}
              onChange={(val) => {
                fetch(
                  `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${val.target.value}`
                )
                  .then((res) => {
                    return res.json();
                  })
                  .then((data) => {
                    props.setCities(data);
                    console.log(data);
                  });
              }}
            />
            <button className="ins">search</button>
            {props.createDiv()}
          </div>
        </div>

        {props.createDivs()}
      </div>
    </div>
  );
}
