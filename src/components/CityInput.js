import { useDispatch, useSelector } from 'react-redux';
import { fetchCity } from '../action-creators/actions'
import { useState, useEffect } from 'react'


const CityInput = () => {
  const cities = useSelector((state) => state.cities)
  const dispatch = useDispatch()
  const [city, setCity] = useState('')

  useEffect(() => {
    dispatch(fetchCity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  function renderCities () {
    let dayOne = 0
      let dayTwo = 0
      let dayThree = 0
      let dayFour = 0
      let dayFive = 0
    return cities.map((section, index) => {
      if(index <= 7){
        dayOne = dayOne + section.main.temp
        return <li>{dayOne}</li> // this returns 8 items, they are temps that have been added together sequentially
      } else {console.log('nothing')} 
    })
  }
  
  return (
    <form>
      <input
      value={city}
      onChange={(e) => setCity(e.target.value)}></input>
      <button>Submit</button>
      <div>temp:</div>
      <ul>{renderCities()}</ul>
    </form>
    
  )
}

export default CityInput;