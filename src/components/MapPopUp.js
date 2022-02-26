import React from "react";
import axios from "axios";
import "./MapPopUp.css";

function MapPopUp(props) {
  let city = "";

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;

      axios
        .get(
          `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=5de1b63f3ad7c2600e3f33f10036d1ec`
        )
        .then(function (response) {
          city = response.data[0].name;
          console.log(city);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Your Neighborhood Map</h1>
        <iframe
          title="iframe map"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDgNLvJ8S6B2H-gX1K9zqUDFQA8XA92qcg&q={city}`}
        ></iframe>
        <button
          className="close-btn btn btn-danger"
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default MapPopUp;
