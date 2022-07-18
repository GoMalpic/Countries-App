import style from "./ActivityDetail.module.css";
import { useDispatch } from "react-redux";
import { deleteActivitybyId } from "../../redux/actions";
import { useEffect } from "react";

const Activity = ({ name, difficulty, season, duration, id }) => {
  const dispatch = useDispatch();

  function handleCLick(e) {
    dispatch(deleteActivitybyId(e.target.value));
  }

  useEffect(() => {}, [dispatch(deleteActivitybyId)]);

  return (
    <article className={style.container}>
      <div className={style.name}>
        <h4 className={style.activitySubtitle}>Name</h4>
        <p className={style.data}>{name}</p>
      </div>
      <div className={style.duration}>
        <h4 className={style.activitySubtitle}>Duration</h4>
        <p className={style.data}>{duration} hrs</p>
      </div>
      <div className={style.difficulty}>
        <h4 className={style.activitySubtitle}>Difficulty</h4>
        <p className={style.data}>Level {difficulty}</p>
      </div>
      <div className={style.season}>
        <h4 className={style.activitySubtitle}>Season</h4>
        <p className={style.data}>{season}</p>
      </div>
    </article>
  );
};

export default Activity;
