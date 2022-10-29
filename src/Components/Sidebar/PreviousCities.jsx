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
      <div className="my-1 mb-3 w-full rounded-md bg-orange-500 px-2 text-center text-white shadow-md">
        Previous Cities:
      </div>
      {cityArray.length > 0
        ? cityArray.map((city, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => handlePreviousCityClick(e)}
              className="my-1 w-full rounded-md bg-white px-2 text-center  shadow-md hover:bg-orange-500 hover:text-white"
            >
              {city}
            </button>
          ))
        : null}
    </div>
  );
};

export default PreviousCities;
