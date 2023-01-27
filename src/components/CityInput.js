import { useDispatch, useSelector } from 'react-redux';
import { fetchTemp } from '../action-creators/actions'
import { useState, useEffect } from 'react'


const CityInput = () => {
  const weather = useSelector((state) => state.weather)
  const dispatch = useDispatch()
  const [city, setCity] = useState('')

  useEffect(() => {
    dispatch(fetchTemp());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  const renderWeather = () => {
    console.log(weather)
  }
  
  return (
    <form>
      <input
      value={city}
      onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={renderWeather()}>Submit</button>
      <div>temp:</div>
    </form>
    
  )
}

export default CityInput;