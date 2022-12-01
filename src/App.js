import "./App.css";
import Home from "./components/Home";
import Title from "./components/Title";
import React, { useState, useEffect } from "react";
import Day from "./components/Day";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faivorite from "./components/Faivorite";

function App() {
  const key = "zErHiN42CH8flesshsozcBsTKBiasfV4";

  const [cityKey, setCityKey] = useState({
    key: 215854,
    name: "tel-aviv",
  });

  const [forcast, setForcast] = useState({});
  const [cities, setCities] = useState([]);
  const [showDiv, setShowDiv] = useState(false);
  const [fav, setFav] = useState([]);

  const addLocation = () => {
    let a = [...fav];
    if (a.includes(cityKey)) {
      alert("the city is already in your faivoites");
    } else {
      setFav([...fav, cityKey]);
    }
  };
  const delteLoaction = (i) => {
    let a = [...fav];
    let newArr = a.filter((val, index) => {
      return index !== i;
    });
    setFav(newArr);
  };

  const createDiv = () => {
    if (cities == null) {
      return <div></div>;
    }
    if (showDiv)
      return (
        <div className="dara">
          {cities.map((data) => {
            return (
              <div
                className="as"
                onChange={() => {
                  setShowDiv(true);
                }}
                onClick={() => {
                  setShowDiv(false);
                  setCityKey({
                    key: data.Key,
                    name: data.LocalizedName,
                  });
                  setCities([]);
                }}
              >
                {" "}
                <p>{data.LocalizedName}</p>
              </div>
            );
          })}
        </div>
      );
  };
  const createDivs = () => {
    if (forcast.DailyForecasts == undefined) {
      return (
        <div>
          <h1>no loaded 2</h1>
        </div>
      );
    } else {
      return (
        <div className="d">
          {forcast.DailyForecasts.map((data) => {
            let day = new Date(data.Date).getDay();
            let daysInWeek = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];

            return <Day day={daysInWeek[day]} temp={data.Temperature} />;
          })}
        </div>
      );
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Title />

        <Routes>
          <Route
            path="/"
            element={
              <div className="ho">
                <Home
                  setCities={setCities}
                  createDiv={createDiv}
                  createDivs={createDivs}
                  cityKey={cityKey}
                  setForcast={setForcast}
                  setShowDiv={setShowDiv}
                  forcast={forcast}
                  addLocation={addLocation}
                />
              </div>
            }
          />
          <Route
            path="/favorite"
            element={
              <Faivorite
                arr={fav}
                delteLoaction={delteLoaction}
                setCityKey={setCityKey}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
