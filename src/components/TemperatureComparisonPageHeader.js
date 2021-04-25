import { Link } from "react-router-dom"

const TemperatureComparisonPageHeader = () => {
  return (
    <div className="row mt-3 text-center">
      <div className="col-md-10 offset-md-1">
        <h2>5 Day Temperature Comparison for Your Cities</h2>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  )
}

export default TemperatureComparisonPageHeader;