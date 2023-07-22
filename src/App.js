import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import CitySearch from './components/CitySearch'
import Forecasts from './components/Forecasts'

function App() {
    return (
        <div>
            <CitySearch />
            <Forecasts />
        </div>
    )
}

export default App
