import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import CitySearch from './components/CitySearch'
import Forecasts from './components/Forecasts'
import { reducers } from './reducers/reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

function App() {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            <CitySearch />
            <Forecasts />
        </Provider>
    )
}

export default App
