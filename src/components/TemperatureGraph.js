import { useSelector } from 'react-redux';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const TemperatureGraph = () => {
  const cities = useSelector(({cities}) => cities)

  //Check to see if there is no forecast information in cities yet
  if (!cities.length) {
    return <h3>No Cities have been searched yet.</h3>
  }

  //Creates a single data point in the format needed for the graph. Ex: If you had two cities (Durham and Denver) to display it could look like {time: 'YYYY-MM-DD 00:00:00', Durham: 80, Denver: 60} with the values for each city being the forecasted temperature at that time
  const createDataPointforSelectedIndex = (cities, index) => {
    return cities.reduce((acc, city) => {
      acc[city.name] = city.temperatures[index];
      return acc;
    }, {time: cities[0].times[index]});
  }

  // Creates the entire array of data points
  const createGraphData = (citiesStore) => {
    return cities[0].temperatures.map((t, index) => createDataPointforSelectedIndex(citiesStore, index))
  }

  // Assigns a color for the line to represent a city on the graph
  const chooseLineColor = (number) => {
    const colorOptions = ['blue', 'green', 'brown', 'purple', 'black'];
    //If there are more cities to display than there are color options it begins at the beginning of the color options
    while(number >= colorOptions.length) {
      number -= colorOptions.length;
    }
    return colorOptions[number];
  }

  const renderLines = (citiesStore) => citiesStore.map((city, index) => <Line type="monotone" dataKey={city.name} key={city.name} stroke={chooseLineColor(index)} />)

  const renderLineChart = (cities) => (
    <LineChart width={800} height={400} data={createGraphData(cities)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      {renderLines(cities)}
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="time" label={{ value: `Time (${cities[0].name} time)`, position: "insideBottomRight", offset: -10}}/>
      <YAxis type="number" label={{ value: "Temperature (F)", angle: -90, position: "insideLeft", offset: 10}} domain={['dataMin - 5', 'dataMax + 5']} />
      <Tooltip />
      <Legend />
    </LineChart>
  );

  return (
    renderLineChart(cities)
  )
}

export default TemperatureGraph;