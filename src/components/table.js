import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

// use mapStateToProp to get read data from state

const table = () => {
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
            <th scope="row" className="align-middle">Austin</th>
            <td>
              <Sparklines
                data={[60, 73, 71, 65, 80, 73, 68]}
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
                data={[80, 73, 71, 49, 80, 73, 88]}
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
                data={[60, 73, 71, 65, 40, 53, 30]}
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

export default table;
