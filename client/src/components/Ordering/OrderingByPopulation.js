import style from "../Filters/Filters.module.css";
import { orderingByPopulation } from "../../redux/actions";
import { useDispatch } from "react-redux";

const OrderingByPop = () => {
  const dispatch = useDispatch();
  const handleOrdering = (e) => {
    e.preventDefault();
    dispatch(orderingByPopulation(e.target.value));
  };
  return (
    <div>
      <select
        className={style.selectContainer}
        onChange={(e) => handleOrdering(e)}
      >
        <option value="population">Order by Population</option>
        <option value="asc">Lower to higher</option>
        <option value="desc">Higher to lower </option>
      </select>
    </div>
  );
};

export default OrderingByPop;
