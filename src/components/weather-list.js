import { useSelector, useDispatch } from "react-redux";
import {fetchCoordinates} from '../actions'
import { useEffect } from "react";


const WeatherList = () => {


    const forecast = useSelector((state) => {
        console.log('state',state)
        // state.forecast
    })

   
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCoordinates());
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //   }, [fetchCoordinates]);

return (
    <div>
        <h1></h1>
    </div>
    )

}

export default WeatherList