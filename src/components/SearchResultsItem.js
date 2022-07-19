import {
  Sparklines,
  SparklinesCurve,
  SparklinesReferenceLine,
} from "react-sparklines";

const SearchResultsItem = ({ city }) => {
  const { temp, pressure, humidity } = city;

  const avg = (arr) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

  return (
    <tr className="">
      <th scope="row" className="align-middle fs-5">
        {city.name}
      </th>
      <td>
        <Sparklines data={temp} height={100}>
          <SparklinesCurve color="green" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div className="fw-bold mt-1">{avg(temp)}° F</div>
      </td>
      <td>
        <Sparklines data={pressure} height={100}>
          <SparklinesCurve color="blue" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div className="fw-bold mt-1">{avg(pressure)} hPa</div>
      </td>
      <td>
        <Sparklines data={humidity} height={100}>
          <SparklinesCurve color="purple" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div className="fw-bold mt-1">{avg(humidity)}%</div>
      </td>
    </tr>
  );
};

export default SearchResultsItem;
