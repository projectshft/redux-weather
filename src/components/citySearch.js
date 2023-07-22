//This component will handle the text input and the search button at the top of the screen
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchForecast } from '../actions/actions'

const CitySearch = () => {
    const dispatch = useDispatch()
    const [location, setLocation] = useState('') //This is the location that is typed into the text input

    //Trigger the fetchForecast action when the search button is pressed
    const handleSearch = () => {
        //You can think of dispatching actions as "triggering an event" in the application.
        dispatch(fetchForecast(location))
    }

    return (
        <div>
            <input
                class-name="forn-control"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button type="button" onChange={handleSearch}>
                Search
            </button>
        </div>
    )
}

export default CitySearch
