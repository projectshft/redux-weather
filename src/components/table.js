import React from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

//TODO: Refactor to make it map through an array so it can have mulitple city forecast, make name and city dynamic

const Table = (props) => {
  return (
    <div>
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="align-middle">{props.city.name}</th>
            <td>
              <Sparklines
                data={props.city.temp}
                width={100}
                height={60}
                margin={5}
              >
                <SparklinesLine color="#ffc61a" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <p className="text-center">58 F</p>
            </td>
            <td>
            <Sparklines
                data={props.city.pressure}
                width={100}
                height={65}
                margin={5}
              >
                <SparklinesLine color="#00802b" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <p className="text-center">1013 hPa</p>
            </td>
            <td>
            <Sparklines
                data={props.city.humidity}
                width={100}
                height={70}
                margin={5}
              >
                <SparklinesLine color="#253e56" />
                <SparklinesReferenceLine type="mean" />
              </Sparklines>
              <p className="text-center">57 %</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProp(state) {
  return {
    city: {
      name: state.weather.city.name,
      temp: state.weather.city.temp,
      pressure: state.weather.city.pressure,
      humidity: state.weather.city.humidity
    }
  }
}

export default connect(mapStateToProp)(Table);
