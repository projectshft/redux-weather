import { Sparklines, SparklinesLine } from "react-sparklines";

const SearchResultsItem = ({ city }) => {
  console.log(city);
  const temp = city.list.reduce((start, item) => {
    return [...start, item.main.temp];
  }, []);
  const pressure = city.list.reduce((start, item) => {
    return [...start, item.main.pressure];
  }, []);
  const humidity = city.list.reduce((start, item) => {
    return [...start, item.main.humidity];
  }, []);
  return (
    <tr>
      <th scope="row">{city.city.name}</th>
      <td>
        <Sparklines data={temp}>
          <SparklinesLine />
        </Sparklines>
      </td>
      <td>
        <Sparklines data={pressure}>
          <SparklinesLine />
        </Sparklines>
      </td>
      <td>
        <Sparklines data={humidity}>
          <SparklinesLine />
        </Sparklines>
      </td>
    </tr>
  );
};

export default SearchResultsItem;
