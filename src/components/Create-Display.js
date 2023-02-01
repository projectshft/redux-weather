import { useSelector } from "react-redux";
// import { Sparklines, SparklinesLine } from 'react-sparklines';

const CreateDisplay = () => {
  let weather = useSelector((state) => state.weather);

  

 const handleDisplay = () => {
  let data = [];

  if(weather.length > 1) {
    console.log(weather)
    weather.map((city) => {
      let cityInfo = [];
      for (const key in city) {
        console.log(city[key])
        cityInfo.push(<li>{key}: {city[key]}</li>)
      }
      data.push(<ul>{cityInfo}</ul>)
    })
  }
  return data
 }

  return (
    <div>  
    {handleDisplay()}
    </div>
  )
}

export default CreateDisplay;














// const data = weather[0].pressure

//   const handleDisplay = () => {
//     return (
//       <div>{data.map((item) => <li>{item}</li>)}</div>
//     )
    
//   }