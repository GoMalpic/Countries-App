import { useDispatch, useSelector } from "react-redux";
import { searchByActivity, getActivity } from "../../redux/actions";
import { useEffect } from "react";

const FilterByActivity = () => {
  const dispatch = useDispatch();

  const handleFilterActivity = (e) => {
    console.log(e.target.value);
    dispatch(searchByActivity(e.target.value));
  };

  const { activities, allCountries } = useSelector((state) => state);

  useEffect(() => {
    console.log(allCountries);
  }, [allCountries]);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  return (
    <div>
      <select onChange={(e) => handleFilterActivity(e)}>
        <option value="all">Filter by Activity</option>
        {activities?.map((act) => (
          <option key={act.id} value={act.name}>
            {act.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByActivity;
