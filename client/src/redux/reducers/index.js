const initialState = {
  countries: [],
  allCountries: [],
  countryDetail: [],
  activities: [],
  filtros: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
        filtros: action.payload,
      };
    case "GET_BY_NAME":
      return {
        ...state,
        allCountries: action.payload,
      };
    case "GET_BY_ID":
      return {
        ...state,
        countryDetail: action.payload,
      };

    case "CREATE_ACTIVITY":
      return { ...state };

    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    case "FILTER_BY_CONTINENT":
      const allContinents = state.countries;
      const continentsFiltered =
        action.payload === "all"
          ? state.allCountries
          : allContinents.filter((c) => c.continent === action.payload);
      return { ...state, allCountries: continentsFiltered };
    case "FILTER_BY_POPULATION":
      const allPopulation = state.countries;
      const countriesFiltered = allPopulation.filter(
        (c) => c.population >= action.payload
      );
      return { ...state, allCountries: countriesFiltered };
    case "FILTER_BY_ACTIVITY":
      const allCountries = state.countries;
      const activitiesFiltered =
        action.payload === "all"
          ? state.countries
          : allCountries.filter((c) =>
              c.Tourist_Activities.includes(action.payload)
            );
      return { ...state, allCountries: activitiesFiltered };

    case "ORDERING_BY_ALPHABET":
      let CountriesName = [...state.allCountries];
      if (action.payload === "asc") {
        CountriesName.sort((a, b) => {
          if (a.name > b.name) return 1; //si  A es mayor que B, B se ordena antes que A
          if (a.name < b.name) return -1; //si A es menor que B, A se ordena primero que B
          return 0; //el orden esa bien, no cambia nada
        });
      } else {
        CountriesName.sort((b, a) => {
          if (a.name > b.name) return 1; // si B es menor que A, A se ordena antes (venez - china) --> china, venez
          if (a.name < b.name) return -1; // si B es mayor que A, B se ordena antes ( china-venez) --> venez, china
          return 0;
        });
      }
      return { ...state, allCountries: [...CountriesName] };
    case "ORDERING_BY_POPULATION":
      let CountriesPopulation = [...state.allCountries];
      if (action.payload === "desc") {
        CountriesPopulation.sort((CountryB, CountryA) => {
          if (CountryA.population > CountryB.population) return 1;
          if (CountryA.population < CountryB.population) return -1;
          return 0;
        });
      } else {
        CountriesPopulation.sort((CountryA, CountryB) => {
          if (CountryA.population > CountryB.population) return 1;
          if (CountryA.population < CountryB.population) return -1;
          return 0;
        });
      }
      return { ...state, allCountries: [...CountriesPopulation] };

    case "DELETE_ACTIVITY":
      let { activities } = state;
      return {
        ...state,
        activities: activities.filter((act) => act.id !== action.payload),
      };

    default:
      return { state };
  }
};

export default rootReducer;
