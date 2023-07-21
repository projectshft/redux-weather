import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import citySearch from './components/citySearch'
import forecasts from './components/forecasts'

function App() {
    return (
        <div>
            <citySearch />
            <forecasts />
        </div>
    )
}

export default App
