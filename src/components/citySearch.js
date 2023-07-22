//This component will handle the text input and the search button at the top of the screen
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchForecast } from '../actions/actions'

const CitySearch = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('') //This is the location that is typed into the text input

    //Trigger the fetchForecast action when the search button is pressed
    const handleSearch = () => {
        //You can think of dispatching actions as "triggering an event" in the application.
        dispatch(fetchForecast(city))
    }

    return (
        <div>
            <input
                class-name="form-control"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                // onChange={console.log('the input is changing')}
            />
            <button type="button" onClick={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default CitySearch
