import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={style.NavBar}>
      <Link to="/" className={style.text}>
        <p>Countries App</p>
      </Link>
      <ul className={style.navLinks}>
        <div className={style.menu}>
          <div>
            <Link to="/countries" className={style.textlink}>
              Countries
            </Link>
          </div>
          <div>
            <Link to="/activity" className={style.textlink}>
              Create Activity
            </Link>
          </div>
        </div>
      </ul>
    </header>
  );
};

export default NavBar;
