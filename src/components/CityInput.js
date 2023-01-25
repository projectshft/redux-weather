import { useDispatch } from 'react-redux';
import { fetchCity } from '../action-creators/actions'
import { useState } from 'react'


const CityInput = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')

  const handleQuery = () => {
    dispatch(
      fetchCity(city)
    )
  }

  return (
    <form>
      <input
      value={city}
      onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={handleQuery}>Submit</button>
    </form>
    
  )
}

export default CityInput;