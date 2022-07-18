import style from './LandingPage.module.css';
import { Link } from 'react-router-dom'


function LandingPage() {
    return (
      <div className={style.container}>
          <div>
            <h1 className={style.title_landing}>Countries App</h1>
          </div>
          <div>
            <Link className={style.link} to="/countries">
              LETS'S TRAVEL
            </Link>
        </div>
    </div>
    )
  }
  
  export default LandingPage;