import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPreviousCity, setCurrentCity } from '../../Features/city/currentCity';
import searchIcon from '../../assets/search-interface-symbol.png';

const SearchCities = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrentCity(text));
    dispatch(addPreviousCity(text));
    setText('');
  };

  const handleSearchChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="m-2 my-5 flex w-5/6 shadow-md">
      <input
        className="w-full rounded-l-md bg-white px-3"
        placeholder="Search City..."
        value={text}
        onChange={(e) => handleSearchChange(e)}
        onKeyDown={(e) => handleSearchChange(e)}
        onSubmit={(e) => handleSearchSubmit(e)}
      />
      <button className="rounded-r-md bg-white p-1 text-blue-500" type="submit" onClick={(e) => handleSearchSubmit(e)}>
        <img className="w-4" src={searchIcon} alt="search-icon" />
      </button>
    </form>
  );
};

export default SearchCities;
