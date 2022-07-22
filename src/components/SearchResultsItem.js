import { useDispatch } from "react-redux";
import {
  Sparklines,
  SparklinesCurve,
  SparklinesReferenceLine,
} from "react-sparklines";
import { makeDefaultCity } from "../actions";

const SearchResultsItem = ({ city }) => {
  const { temp, pressure, humidity } = city;
  const dispatch = useDispatch();

  const avg = (arr) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);

  const handleClickDefault = () => {
    dispatch(makeDefaultCity(city.name))
  }

  const defaultActionText = city.isDefault ? 'Remove as Default' : 'Set as Default';

  return (
    <tr className="">
      <th scope="row" className="align-middle">
        <p className="fs-5 m-0">{city.name}</p>
        <p onClick={handleClickDefault} className="btn text-primary m-0">{defaultActionText}</p>
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
