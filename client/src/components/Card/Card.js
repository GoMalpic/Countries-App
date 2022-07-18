import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ name, id, flag, continent }) => {
    return (
    <Link className={style.button} to={`/countries/${id}`}>
        <div  key={id} className={style.card}>
            <img  className={style.image} src={flag} alt='not found'/>
            <div className={style.countryInfo}>
                <div className={style.name}><h3>{name}</h3></div>
                <div className={style.id}><h4>{id}</h4></div>
                <div className={style.continent}><h4>{continent}</h4></div>
            </div>
        </div>
    </Link>
    )
}

export default Card;