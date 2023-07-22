//This component will handle the text input and the search button at the top of the screen
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

const CitySearch = () => {
    const [location, setLocation] = useState('') //This is the location that is typed into the text input

    const handleSearch = () => {
        //I know i need to use dispatch here because the logic to call the info from
        // the weather API is in the actions component..
        //
        //From redux documentation:
        //The only way to update the state is to call store.dispatch() and pass in an action object.
        //The store will run its reducer function and save the new state value inside, and we can
        //call getState() to retrieve the updated value
        //You can think of dispatching actions as "triggering an event" in the application.
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
