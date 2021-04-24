import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const TemperatureGraph = () => {
  const cities = useSelector(({cities}) => cities)
  const createDataPointforSelectedIndex = (cities, index) => {
    return cities.reduce((acc, city) => {
      acc[city.name] = city.temperatures[index];
      return acc;
    }, {index});
  }

  const createGraphData = (citiesStore) => {
    return cities[0].temperatures.map((t, index) => createDataPointforSelectedIndex(citiesStore, index))
  }

  const renderLines = (citiesStore) => citiesStore.map((city) => <Line type="monotone" dataKey={city.name} stroke="#8884d8" />)

  // const createGraphData = (city) => {
  //   return city.temperatures.map((temperature, index) => {
  //     return {
  //       time: index,
  //       [city.name]: temperature
  //     }
  //   })
  // }
  // <Line type="monotone" dataKey={cities[0].name} stroke="#8884d8" />
  const data = createGraphData(cities);
  const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      {renderLines(cities)}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="index" />
      <YAxis type="number" domain={['dataMin - 10', 'dataMax + 10']} />
      <Tooltip />
    </LineChart>
  );

  return (
    renderLineChart
  )
}

export default TemperatureGraph;