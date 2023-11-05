import React from "react";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const Home = (props) => {

  const sampleData = [5, 10, 5, 20];


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <div className="page-header">
          </div>

          <form className="search-form">
            <div className="form-group row">
              <div className="col-md-9">
                <input
                  type="text"
                  id="search-query"
                  className="form-control"
                  placeholder="Search for a five-day forecast"
                />

              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-primary search">
                  Search
                </button>
              </div>
            </div>
          </form>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h5>City</h5>
              </div>

              <div className="col-md-3">
                <h5>Temperature (F)</h5>
              </div>
              <div className="col-md-3">
                <h5>Pressure (hPa)</h5>
              </div>
              <div className="col-md-3">
                <h5>Humidity (%)</h5>
              </div>
            </div>
          </div>
          <hr />



          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </div>
            <div className="col-md-3">
              <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </div>
            <div className="col-md-3">
              <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </div>
            <div className="col-md-3">
              <Sparklines data={sampleData}>
                <SparklinesLine />
                <SparklinesReferenceLine type="avg" />
              </Sparklines>
            </div>



          </div>
        </div>
      </div >
    </div >


  )
}

export default Home;