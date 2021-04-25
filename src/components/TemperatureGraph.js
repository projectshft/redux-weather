import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const TemperatureGraph = () => {
  const cities = useSelector(({cities}) => cities)

  //Check to see if there are no cities yet
  if (!cities.length) {
    return <h3>No Cities have been searched yet.</h3>
  }

  const createDataPointforSelectedIndex = (cities, index) => {
    return cities.reduce((acc, city) => {
      acc[city.name] = city.temperatures[index];
      return acc;
    }, {index});
  }
  debugger;
  const createGraphData = (citiesStore) => {
    return cities[0].temperatures.map((t, index) => createDataPointforSelectedIndex(citiesStore, index))
  }

  const chooseLineColor = (number) => {
    const colorOptions = ['blue', 'green', 'brown', 'purple', 'black'];
    while(number >= colorOptions.length) {
      number -= colorOptions.length;
    }
    return colorOptions[number];
  }

  const renderLines = (citiesStore) => citiesStore.map((city, index) => <Line type="monotone" dataKey={city.name} stroke={chooseLineColor(index)} />)

  const data = createGraphData(cities);
  const renderLineChart = (
    <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      {renderLines(cities)}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="index" label={{ value: "Time", position: "insideBottomRight", offset: 0}}/>
      <YAxis type="number" label={{ value: "Temperature (F)", angle: -90, position: "insideLeft"}} domain={['dataMin - 10', 'dataMax + 10']} />
      <Tooltip />
      <Legend />
    </LineChart>
  );

  return (
    renderLineChart
  )
}

export default TemperatureGraph;