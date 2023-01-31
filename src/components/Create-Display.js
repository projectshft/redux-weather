import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine } from 'react-sparklines';

const CreateDisplay = () => {
  let weather = useSelector((state) => state.weather);

  if(weather < 1) {
    weather = 0
  }

 console.log(weather)

  return (
    <div>  
    hello
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