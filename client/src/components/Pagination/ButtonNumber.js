import style from './ButtonNumber.module.css'

function ButtonNumber({ countriesPerPage, allCountries, setCurrentPage, currentPage, maxPageNumberLimit, minPageNumberLimit, handlePrevBtn, handleNextBtn}) {

    const pageNumber = []
    const handlePage = (e, number) => {
        e.preventDefault();
        setCurrentPage(Number(number))
    }

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumber.push(i);
    }

    const renderPageNumbers = pageNumber.map((number) =>{

        if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
          return (
            <li onClick={(e) => handlePage(e, number)} key={number}>
            <a className={currentPage === number ? style.active : null}>{number}</a>
            </li>
          )
        } else{
            return null;
        }
    })

    return (
        <nav className={style.container} >
            <ul className={style.pageNumbers} >
                <li>
                    <button disabled={currentPage === 1} onClick={handlePrevBtn}>
                        PREV
                    </button> 
                </li>
                    {renderPageNumbers}
                <li>
                    <button  disabled={currentPage >= pageNumber.length} onClick={handleNextBtn}>
                        NEXT
                    </button> 
                </li>
            </ul>
        </nav>
    )
}

export default ButtonNumber;