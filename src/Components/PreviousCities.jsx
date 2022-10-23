import { useSelector } from 'react-redux';

const PreviousCities = () => {
  const cityArray = useSelector((state) => state.cities.previousCities);

  return (
    <div className="my-5 w-5/6">
      <div>Previous Cities</div>
      {cityArray.map((city) => (
        <div className="my-1 w-full rounded bg-white px-2 text-center">{city}</div>
      ))}
    </div>
  );
};

export default PreviousCities;
