import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchResult } from "../actions";
import _ from 'lodash';
import SingleResult from './single-result';

const Results = () => {
  const allResults = useSelector((state) => state.results);

  const renderResults = () => {
    if (!_.isEmpty(allResults)) {
      return allResults.map((result) => (
        <div key={result.id}>
            {/* <SingleResult result={result}/> */}
            {console.log(result)}
        </div>       
      ));
    }
  }

  return (
    <div className="results-section">
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

      <div className="results">
        {renderResults()}
      </div>
    </div>
  )
}

export default Results;
