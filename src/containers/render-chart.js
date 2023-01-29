import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

// reusable component to make rendering the individual charts cleaner and easier 
const RenderChart = ({ data, color, units}) => {
  // function to average 5-day forecast
  const calculateFiveDayAverage = (data) => {
    return Math.round(data.reduce((accumulator, currentValue) => (accumulator + currentValue/data.length), 0));
  }
  
  return (
    <div className="render-chart">
      <Sparklines data={data} height={100} width={120} margin={0}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <span>{calculateFiveDayAverage(data)} {units}</span>
    </div>
  );
}
 
export default RenderChart;