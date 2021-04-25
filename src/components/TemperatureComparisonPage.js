import TemperatureGraph from "./TemperatureGraph";
import TemperatureComparisonPageHeader from "./TemperatureComparisonPageHeader";

const TemperatureComparisonPage = () => {
  return (
    <div className="container">
      <TemperatureComparisonPageHeader />
      <TemperatureGraph />
    </div>
  )
}

export default TemperatureComparisonPage;