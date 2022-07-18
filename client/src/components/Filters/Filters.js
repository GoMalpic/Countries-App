import style from "./Filters.module.css";
import FilterByContinent from "../FilterBy/FilterByContinent";
import FilterByActivity from "../FilterBy/FilterByActivity";
import ClearFilters from "../FilterBy/ClearFilters";
import OrderingByAlph from "../Ordering/OrderingByAlpha";
import OrderingByPop from "../Ordering/OrderingByPopulation";

const Filters = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.Continent}>
          <FilterByContinent />
        </div>
        <div className={style.Activity}>
          <FilterByActivity />
        </div>
        <div className={style.ForName}>
          <OrderingByAlph />
        </div>
        <div className={style.ForPopulation}>
          <OrderingByPop />
        </div>
      </div>
      <div className={style.btnCleanFilters}>
        <ClearFilters />
      </div>
    </>
  );
};

export default Filters;
