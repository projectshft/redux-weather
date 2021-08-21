import { useSelector } from "react-redux";
import _ from 'lodash';
import SingleResult from './single-result';

const Results = () => {
  const results = useSelector((state) => state.results);

  const renderResults = () => {
    if (!_.isEmpty(results)) {
      return results.map((result) => (
        <div key={result.id}>
            <SingleResult result={result}/>
        </div>       
      ));
    }
  }

  return (
    <div className="results-section col-md-6 offset-md-3">
      <div className="row">
          <div className="col-md-3">
            <h5><strong>City</strong></h5>
          </div>

          <div className="col-md-3">
            <h5><strong>Temperature (F)</strong></h5>
          </div>

          <div className="col-md-3">
            <h5><strong>Pressure (hPa)</strong></h5>
          </div>

          <div className="col-md-3">
            <h5><strong>Humidity (%)</strong></h5>
          </div>      
      </div>

      <hr></hr>

      <div className="results">
        {renderResults()}
      </div>
    </div>
  )
}

export default Results;
