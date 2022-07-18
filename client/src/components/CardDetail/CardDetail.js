import style from "./CardDetail.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
import ActivityDetail from "../ActivityDetail/ActivityDetail";

const CardDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);
  let countryId = params.id;

  useEffect(() => {
    dispatch(getCountryDetail(countryId));
  }, [dispatch]);

  function renderDetail(countryDetail) {
    return (
      <div className={style.backgroundContainer}>
        <NavBar />
        <div className={style.container}>
          <div className={style.detailContainer}>
            <img className={style.image} src={countryDetail.flag} alt="flag" />
            <div key={countryDetail.id} className={style.countryInfo}>
              <div className={style.name}>
                <h6>NAME: {countryDetail.name}</h6>
              </div>
              <div className={style.continent}>
                <h6>CONTINENT: {countryDetail.continent}</h6>
              </div>
              <div className={style.continent}>
                <h6>SUBREGION: {countryDetail.subregion}</h6>
              </div>
              <div className={style.continent}>
                <h6>AREA: {countryDetail.area}</h6>
              </div>
              <div className={style.continent}>
                <h6>CAPITAL: {countryDetail.capital}</h6>
              </div>
              <div className={style.continent}>
                <h6>POPULATION: {countryDetail.population}</h6>
              </div>
            </div>
          </div>
          {/* <h2 className={style.activityTitle}>ACTIVITIES</h2> */}
          <div className={style.activityContainer}>
            {countryDetail.Tourist_Activities.length ? (
              countryDetail.Tourist_Activities.map((activity) => {
                const { name, duration, difficulty, season, id } = activity;
                return (
                  <ActivityDetail
                    className={style.Activity}
                    key={id}
                    id={id}
                    name={name}
                    duration={duration}
                    difficulty={difficulty}
                    season={season}
                  />
                );
              })
            ) : (
              <h2 className={style.noActivity}>There aren't any activities</h2>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {countryDetail ? (
        renderDetail(countryDetail)
      ) : (
        <h1 className={style.loading}>Loading...</h1>
      )}
    </div>
  );
};

export default CardDetail;
