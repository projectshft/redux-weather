import { useSelector } from "react-redux";

function WeatherDetails() {
  const state = useSelector(state => state);

  return (
    <tbody>
      {Object.entries(state.data.searches).map(([city, details]) => (
        <tr key={city}>
          <td>{city}</td>
          <td>{details.temp}</td>
          <td>{details.pressure}</td>
          <td>{details.humidity}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default WeatherDetails;