import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const ClearFilters = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountries());
  };

  return <button onClick={(e) => handleClick(e)}>Clear Filters</button>;
};

export default ClearFilters;
