import style from './Pagination.module.css'
import Card from '../Card/Card';
import { getCountries } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonNumber from './ButtonNumber';

const Pagination = () => {

    const countries = useSelector((state) => state.allCountries);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage; //10 = pagina 1 * cantidad de elementos/paises 10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
    const currentCountries = Array.isArray(countries) ? countries.slice(indexOfFirstCountry, indexOfLastCountry) : 'Country does not exist'; //corta el array y determina que sean 10 por pagina
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    useEffect(() => {
        setCurrentPage(1)
    }, [countries]);

    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    const handleNextBtn = () => {
        setCurrentPage(currentPage + 1);

        if (currentPage+1 > maxPageNumberLimit){ // si estoy en pag 5 y el +1 supera mi limite, traeme otros 5 pag mas
            setMaxPageNumberLimit(maxPageNumberLimit+ pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage-1)%pageNumberLimit === 0){ 
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    return (
        <div className={style.paginateContainer}>
            <div>
                <ButtonNumber className={style.buttonNumber}
                    countriesPerPage={countriesPerPage}
                    allCountries={countries?.length}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    maxPageNumberLimit={maxPageNumberLimit}
                    minPageNumberLimit={minPageNumberLimit}
                    handlePrevBtn={handlePrevBtn}
                    handleNextBtn ={handleNextBtn}
                />
                <div className={style.countries}><h1>Countries</h1></div>
                <div className={style.cards}>
                    {Array.isArray(currentCountries) && currentCountries.length ?
                    currentCountries?.map(countries => {
                        return (
                            <div key={countries.id}>
                                <Card
                                    name={countries.name}
                                    flag={countries.flag}
                                    id={countries.id}
                                    continent={countries.continent} />
                            </div>
                        )
                    }) : <p>{currentCountries}</p>
                    }  
                </div>
            </div>
        </div>
    )
}

export default Pagination;