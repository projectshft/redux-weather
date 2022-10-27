import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCity } from '../../Features/city/currentCity';

const PreviousCities = () => {
  const dispatch = useDispatch();

  const cityArray = useSelector((state) => state.currentCity.previousCity);

  const handlePreviousCityClick = (e) => {
    dispatch(setCurrentCity(e.target.innerHTML));
  };

  return (
    <div className="my-5 w-5/6">
      <div className="my-1 w-full rounded-md bg-white px-2 text-slate-900">Previous Cities:</div>
      {cityArray.length > 0
        ? cityArray.map((city, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => handlePreviousCityClick(e)}
              className="my-1 w-full rounded px-2 text-center text-white"
            >
              {city}
            </button>
          ))
        : null}
    </div>
  );
};

export default PreviousCities;
