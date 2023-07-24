import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// import promiseMiddleware from 'redux-promise'
import CitySearch from './components/CitySearch'
import Forecasts from './components/Forecasts'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

function App() {
    return (
        <div className="main-container">
            <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
                <CitySearch />
                <Forecasts />
            </Provider>
        </div>
    )
}

export default App
