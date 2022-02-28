/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, CloseButton } from 'react-bootstrap';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
  SparklinesBars,
} from 'react-sparklines';

import { fetchWeather, deleteWeather } from '../actions';

const ChartTable = () => {
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [fetchWeather]);

  const handleDelete = (e) => {
    dispatch(deleteWeather(e.target.id));
  };

  const renderWeather = () => {
    if (weather) {
      return weather.map((item) => (
        <tr key={item.id}>
          <td>
            <div className="d-flex justify-content-between">
              {item.city}
              <CloseButton id={item.id} onClick={handleDelete} />
            </div>
            <div className="mt-2">Avg Temp: {item.tempAvg}&deg;f</div>
            <div className="mt-2">Avg Pressure: {item.pressureAvg}</div>
            <div className="mt-2">Avg Humidity: {item.humidityAvg}%</div>
          </td>
          <td>
            <Sparklines
              data={item.tempList}
              limit={5}
              width={100}
              height={50}
              margin={5}
            >
              <SparklinesBars style={{ fillOpacity: '.1' }} />
              <SparklinesLine style={{ fill: 'none' }} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
          <td>
            <Sparklines
              data={item.pressureList}
              limit={5}
              width={100}
              height={50}
              margin={5}
            >
              <SparklinesBars style={{ fillOpacity: '.1' }} />
              <SparklinesLine style={{ fill: 'none' }} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
          <td>
            <Sparklines
              data={item.humidityList}
              limit={5}
              width={100}
              height={50}
              margin={5}
            >
              <SparklinesBars style={{ fillOpacity: '.1' }} />
              <SparklinesLine style={{ fill: 'none' }} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
          </td>
        </tr>
      ));
    }
    return (
      <tr>
        <td>No weather to show</td>
      </tr>
    );
  };

  return (
    <Table className="mt-4">
      <thead>
        <tr>
          <th id="city-th">City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>{renderWeather()}</tbody>
    </Table>
  );
};

export default ChartTable;
