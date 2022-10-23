import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCity } from '../Features/city/citySlice';

const SearchCities = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSearchSubmit = () => {
    dispatch(addCity(text));
  };

  return (
    <div className="m-2 my-5 flex w-5/6">
      <input
        className="w-full rounded-l-md border-r px-3"
        placeholder="Search City..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="rounded-r-md bg-white p-1 text-blue-500" type="submit" onClick={handleSearchSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchCities;
