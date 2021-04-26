import { reduxForm, Field} from "redux-form"
import {weatherApi, FETCH_CITY, CITY_NAME} from '../actions'
import {useDispatch} from 'react-redux'


// renders for the form
const renderInput = (props) => (
  <input {...props.input} type="text" className="form-control"/>
)
// on submit of form 
const onSubmit = (values, dispatch) => {
  
  // imported async function from actions and the inputed value passed as an argument
  const request = weatherApi(values['city-search'])

  // after the data comes back dispatches the actions
  request.then(res => { 
    dispatch({
    type: FETCH_CITY,
    payload: res.data
  })})
   dispatch({
    type: CITY_NAME,
    payload: values["city-search"]
  })
}

let SearchBar = ({handleSubmit}) => {

  return (
  
  <form onSubmit={handleSubmit}>
    <div className="container d-flex justify-content-center mb-5">
      <div className="card mt-1 p-3">
        <div className="input-group mb-3"> 
        <Field 
        name="city-search"
        component={renderInput}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            search city
          </button>
        </div>
        </div>
      </div>
    </div>
  </form>
  
  )
}                    


export default reduxForm({
  form: "search-input",
  onSubmit
})(SearchBar)