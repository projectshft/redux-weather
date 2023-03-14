import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import FiveDayShow from './5day-show';

const FiveDayIndex = () => {
  const cities = useSelector((state) => state.posts.cities);
  if (_.isEmpty(cities)) {
    return null;
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th itemScope="col">City</th>
          <th itemScope="col">Temperature</th>
          <th itemScope="col">Pressure</th>
          <th itemScope="col">Humidity</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city) => (
          <FiveDayShow key={city.name} city={city.name} data={city.data} />
        ))}
      </tbody>
    </table>
  );
};

export default FiveDayIndex;
