import CityTable from './city-table'
import './../index.css'
import { fetchCity } from './../actions/actions-index'
import { useDispatch } from 'react-redux'



const CitySearch = () => {

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(fetchCity())
  }

  return (
    <div className="input-group mb-3 custom">
  <input type="text" className="form-control" placeholder="City" />
  <div className="input-group-append">
    <button className="btn btn-outline btn-primary" type="button" onClick={handleSubmit}>Submit</button>
  </div>
  <CityTable />
</div>
  )
}

export default CitySearch;