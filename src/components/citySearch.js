//This component will handle the text input and the search button at the top of the screen
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchForecast } from '../actions/actions'

const CitySearch = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('') //This is the location that is typed into the text input

    //Trigger the fetchForecast action when the search button is pressed
    const handleSearch = () => {
        if (!city) {
            alert('Please enter a city')
        } else {
            dispatch(fetchForecast(city))
            setCity('')
        }
    }

    return (
        <div className="input-group mb-3 ">
            <input
                className="form-control"
                type="text"
                placeholder="Get a five-day forecast in your favorite cities"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value)
                }}
            />
            <div className="input-group-append">
                <button
                    type="text"
                    className="btn btn-secondary"
                    onClick={handleSearch}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CitySearch
