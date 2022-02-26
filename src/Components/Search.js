import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { getData } from "../Actions/Index";


const citySchema = Yup.object().shape({city: Yup.string().required()});

const Search = (props) => {
  const {  handleSubmit } = useForm({
    resolver: yupResolver(citySchema)
  });

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    dispatch(
      getData(data)
    )
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="input-group c">
          <div className="form-group col-lg-6">
            <input 
              className="form-control" 
              name='city'>
            </input>
          </div>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </form>
    </div>
  )

};


export default Search;

