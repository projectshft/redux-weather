import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import PropTypes from 'prop-types';

export default function WeatherRow({
  city,
  id,
  temperatureData,
  pressureData,
  humidityData,
}) {
  function average(arr) {
    return Math.round(
      arr.reduce((prev, curr) => prev + parseInt(curr), 0) / arr.length
    );
  }
  return (
    <div className="chart" key={id}>
      <h3 className="chart__city">{city}</h3>
      <section className="chart__temperature">
        <Sparklines data={temperatureData} svgWidth="100%">
          <SparklinesLine
            style={{
              stroke: '#3aff1c',
              strokeWidth: '0.5',
              fill: '#73ff55',
              fillOpacity: '0.5',
            }}
          />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <span className="chart__average">{average(temperatureData)}</span>
      </section>

      <section className="chart__pressure">
        <Sparklines data={pressureData} svgWidth="100%">
          <SparklinesLine
            style={{
              stroke: 'red',
              strokeWidth: '0.5',
              fill: 'orange',
              fillOpacity: '0.5',
            }}
          />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <span className="chart__average">{average(pressureData)}</span>
      </section>

      <section className="chart__humidity">
        <Sparklines data={humidityData} svgWidth="100%">
          <SparklinesLine
            style={{
              stroke: 'black',
              strokeWidth: '0.5',
              fill: 'lightblue',
              fillOpacity: '0.5',
            }}
          />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <span className="chart__average">{average(humidityData)}</span>
      </section>
    </div>
  );
}

WeatherRow.propTypes = {
  city: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  pressureData: PropTypes.array.isRequired,
  temperatureData: PropTypes.array.isRequired,
  humidityData: PropTypes.array.isRequired,
};
