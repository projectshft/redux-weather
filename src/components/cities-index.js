import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import _ from 'lodash';

import { fetchCity } from '../actions';

const citySchema = Yup.object().shape({
    city: Yup.string().required().max(85)   //Longest city name in the world is 85 characters
});

const CitiesIndex = (props) => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(citySchema)
    });

    const dispatch = useDispatch();
/*
    const handleFormSubmit = (data) => {
        dispatch(
            fetchCity(data, () => {
                props.history.push("/");
            })
        );
    }    
*/
    return (
        <form onSubmit={handleSubmit(dispatch(fetchCity))}>
        <div>
        <div className="text-xs-right">
            <input
            className='form-control'
            name='city' ref={register({ required: true})}></input>
            {errors.city?.message}            
            <Link className="btn btn-primary">
            Add a City
            </Link>
        </div>
        <hr />
        <h3>Cities</h3>
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