import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const FiveDayIndex = () => (
  <div className="container">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">City</th>
          <th scope="col">Temperature (F)</th>
          <th scope="col">Pressure (hPa)</th>
          <th scope="col">Handle (%)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Cleveland</th>
          <td>
            <Sparklines data={[5, 10, 5, 20, 8, 15]}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </td>
          <td>
            <Sparklines data={[5, 10, 5, 20, 8, 15]}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </td>
          <td>
            <Sparklines data={[5, 10, 5, 20, 8, 15]}>
              <SparklinesLine />
              <SparklinesReferenceLine type="mean" />
            </Sparklines>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default FiveDayIndex;
