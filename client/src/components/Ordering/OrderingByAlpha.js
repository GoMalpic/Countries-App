import style from "../Filters/Filters.module.css";
import { orderingByAlphabet } from "../../redux/actions";
import { useDispatch } from "react-redux";

const OrderingByAlph = () => {
  const dispatch = useDispatch();
  const handleOrdering = (e) => {
    e.preventDefault();
    dispatch(orderingByAlphabet(e.target.value));
  };
  return (
    <div>
      <select
        className={style.selectContainer}
        onChange={(e) => handleOrdering(e)}
      >
        <option value="alpha">Order by</option>
        <option value="asc">AZ</option>
        <option value="desc">ZA</option>
      </select>
    </div>
  );
};

export default OrderingByAlph;
