import style from './Home.module.css';
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import Pagination from '../Pagination/Pagination';
import Filters from '../Filters/Filters';

const Home = () => {
    return (
        <div className={style.container}>
            <div><NavBar /></div>
            <div className={style.countries_Page_Container}>
                <div className={style.searchBar}><SearchBar /></div>
                <div className={style.filters}><Filters /></div>
                <div className={style.pagination}><Pagination /></div>
            </div>
        </div>

    )
}

export default Home;