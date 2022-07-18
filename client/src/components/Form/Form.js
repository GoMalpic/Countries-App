import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from "../../redux/actions";
import validate from "./FormValidation";
import NavBar from "../NavBar/NavBar";

const Form = () => {
  const InitialState = {
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  };

  const [input, setInput] = useState(InitialState);
  const [error, setError] = useState({});

  const countries = useSelector((state) => state.allCountries);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  };

  function handleChangeCountries(e) {
    e.preventDefault();
    setInput((input) => ({
      ...input,
      countryId: [...new Set([...input.countryId, e.target.value])],
    }));

    setError(
      validate({
        ...input,
        countryId: [...input.countryId, e.target.value],
      })
    );
  }

  function handleDeleteCountry(element) {
    setInput({
      ...input,
      countryId: input.countryId.filter((country) => country !== element),
    });
  }

  const handleSubmit = async (e) => {
    if (
      input.name &&
      input.difficulty &&
      input.duration &&
      input.season &&
      input.countryId.length > 0
    ) {
      e.preventDefault();
      dispatch(createActivity(input));
      alert("Activity succesfully Created!");

      setInput({
        type: "",
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: [],
      });

      navigate("/countries");
    } else {
      e.preventDefault();
      alert("You must complete every field!");
    }
  };

  return (
    <div className={style.backgroundContainer}>
      <NavBar />
      <div className={style.principal}>
        <form className={style.container} onSubmit={(e) => handleSubmit(e)}>
          <button className={style.btn} type="submit">
            Create activity
          </button>
          <div className={style.name}>
            <h4 className={style.text}>Insert activity name</h4>
            <input
              className={style.input}
              name="name"
              value={input.name}
              onChange={handleInputChange}
            />
            {error.name && <p className={style.error}>{error.name}</p>}
          </div>
          <div className={style.level}>
            <h4 className={style.text}>Select level of difficulty</h4>
            <select
              className={style.level}
              name="difficulty"
              value={input.difficulty}
              onChange={handleInputChange}
            >
              <option value="" hidden>
                Insert difficulty
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            {error.difficulty && (
              <p className={style.error}>{error.difficulty}</p>
            )}
          </div>
          <div className={style.duration}>
            <h4 className={style.text}>
              Insert duration of the activity in hours
            </h4>
            <input
              className={style.input}
              name="duration"
              value={input.duration}
              onChange={handleInputChange}
            />
            {error.duration && <p className={style.error}>{error.duration}</p>}
          </div>
          <div className={style.seasons}>
            <h4 className={style.text}>Select season</h4>
            <select
              className={style.seasons}
              name="season"
              value={input.season}
              onChange={handleInputChange}
            >
              <option value="" hidden>
                Insert season
              </option>
              <option>Summer</option>
              <option>Autumn</option>
              <option>Winter</option>
              <option>Spring</option>
            </select>
            {error.season && <p className={style.error}>{error.season}</p>}
          </div>
          <div className={style.countries}>
            <h3 className={style.text}>Countries </h3>
            <select
              className={style.searchCountry}
              name="countryId"
              value={input.countryId}
              onChange={(e) => handleChangeCountries(e)}
            >
              <option value="" hidden>
                Select a country
              </option>
              {countries?.map((element) => (
                <option value={element.id} key={element.id}>
                  {`(${element.id}) ${element.name}`}
                </option>
              ))}
            </select>
            {error.countryId && (
              <p className={style.error}>{error.countryId}</p>
            )}
          </div>
          <div className={style.selCountries}>
            <h3 className={style.text}>Countries selected </h3>
            <div className={style.country}>
              {input.countryId !== 0
                ? input.countryId.map((element) => (
                    <ul className={style.countrySelected} key={element}>
                      <li className={style.countryId}>{element}</li>
                      <button
                        className={style.deleteBtn}
                        onClick={() => handleDeleteCountry(element)}
                      >
                        {/* {`X`} */}
                        <img
                          className={style.imgCoutntry}
                          src="https://cdn-icons-png.flaticon.com/128/1/1981.png"
                        />
                      </button>
                    </ul>
                  ))
                : ""}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
