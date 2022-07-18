import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent } from "../../redux/actions";

const FilterByContinent = () => {
  const dispatch = useDispatch();
  const handleFilterContinent = (e) => {
    dispatch(filterByContinent(e.target.value));
  };

  return (
    <div>
      <select onChange={(e) => handleFilterContinent(e)}>
        <option value="all">All</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
    </div>
  );
};

export default FilterByContinent;
