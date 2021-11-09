import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { updateChart } from "../actions";

const ChartIndex = () => {
  
  const chart = useSelector((state) => state.chart)
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(updateChart());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [updateChart]);

  function renderChart() {
    return chart.map((row, i) => (
      <li className="list-group-item" key={i}>
        <h1>{row.data.city.name}</h1>
      </li>
    ));

  }

  return (
    <div>
      <br />
      <h3>Data</h3>
      <ul className="list-group">{renderChart()}</ul>
    </div>
  );
}

export default ChartIndex;