import { useSelector } from "react-redux"
import DetailCity from "./detail_city"

const ListBody = function () {
  const city = useSelector((state) => state.weather)

  const renderDetailCity = function (data) {
    return data.map((city) => <DetailCity key={city.id} city={city} />)
  }

  
  console.log(city)
  
  if (city.length === 0) {
    return (
      <tbody> 
        <tr>
          <td>Search a city!</td>
          <td>Search a city!</td>
          <td>Search a city!</td>
          <td>Search a city!</td>
        </tr>
      </tbody> 
    )
  }
  return (
    <tbody>
      {renderDetailCity(city)}
    </tbody>
  )
}

export default ListBody
