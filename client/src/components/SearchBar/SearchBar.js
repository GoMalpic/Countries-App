import style from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountrybyName } from "../../redux/actions/index";

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    if (name) {
      e.preventDefault();
      dispatch(getCountrybyName(name));
      setName("");
    }
  };

  return (
    <form className={style.search_div}>
      <input
        type="search"
        className="search_text"
        placeholder="Search"
        value={name}
        onChange={(e) => handleInputChange(e)}
      />
      <button
        type="submit"
        className={style.searchButton}
        onClick={(e) => handleSubmit(e)}
      >
        {" "}
        <BsSearch />
      </button>
    </form>
  );
};
export default SearchBar;
