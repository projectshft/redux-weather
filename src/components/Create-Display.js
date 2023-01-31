import { useSelector } from "react-redux";

const CreateDisplay = () => {
  const weather = useSelector((state) => state.weather);

  function handleDisplay() {
    weather.map(city => {
      const getData = () => {
        for (const key in city) {
          city[key].map((measurement) => <li>{measurement}</li>)
        }
      }
    return getData()
    });   
  }

  return (
    <div>  
    <ul>{handleDisplay()}</ul>
    </div>
  )
}

export default CreateDisplay;

//won't show up for some reason.