import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import _ from 'lodash';

const CitiesIndex = () => {
    //todo

    function renderCities() {
        return <div>No cities to show</div>;
    }

    return (
    <div>
      <div className="text-xs-right">
        <input
          className='form-control'
          name='title'>
        </input>
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
  <tbody>
    <tr>
      <td>todo</td>      
    </tr>    
  </tbody>
</Table>
    </div>
    )
}

export default CitiesIndex;