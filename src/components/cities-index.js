import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import _ from 'lodash';

import { fetchCity } from '../actions';


const CitiesIndex = (props) => {   
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();

    const [city, setCity] = useState("")

    

    const handleFormSubmit = (e) => {
        e.preventDefault();

        dispatch(
            fetchCity(e, () => {
                props.history.push("/");
            })
        );
    }    

    return (
        <form onSubmit={handleFormSubmit}>
        <div>
        <div className="text-xs-right">
            <input
            className='form-control'
            name='city'></input>                     
            <Link className="btn btn-primary">
            Add a City
            </Link>
        </div>
        <hr />        
        <Table striped bordered hover>
        <thead>
        <tr>
        <th>City</th>
        <th>Temperature (F)</th>
        <th>Pressure (hPa)</th>
        <th>Humidity (%)</th>
        </tr>
        </thead>        
        </Table>
        </div>
        </form>
    )
}

export default CitiesIndex;