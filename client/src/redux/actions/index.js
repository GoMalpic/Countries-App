const axios = require("axios");

export function getCountries() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/countries")
      .then((response) =>
        dispatch({ type: "GET_COUNTRIES", payload: response.data })
      )
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getCountrybyName(name) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries?name=${name}`)
      .then((response) =>
        dispatch({ type: "GET_BY_NAME", payload: response.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getCountryDetail(id) {
  return (dispatch) => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) =>
        dispatch({ type: "GET_BY_ID", payload: response.data })
      )
      .catch((error) => console.log(error));
  };
}

export function createActivity(payload) {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/activity`, payload)
      .then((response) =>
        dispatch({ type: "CREATE_ACTIVITY", payload: response.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getActivity() {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/activity/getAct/all")
      .then(({ data: payload }) =>
        dispatch({ type: "GET_ACTIVITIES", payload })
      )
      .catch((error) => console.log(error));
  };
}

export function searchByActivity(payload) {
  return {
    type: "FILTER_BY_ACTIVITY",
    payload,
  };
}

export function filterByPopulation(payload) {
  return {
    type: "FILTER_BY_POPULATION",
    payload,
  };
}

export function filterByContinent(payload) {
  return {
    type: "FILTER_BY_CONTINENT",
    payload,
  };
}

export function orderingByAlphabet(payload) {
  return {
    type: "ORDERING_BY_ALPHABET",
    payload,
  };
}

export function orderingByPopulation(payload) {
  return {
    type: "ORDERING_BY_POPULATION",
    payload: payload,
  };
}

export function deleteActivitybyId(payload) {
  return async function (dispatch) {
    return await axios
      .delete(`http://localhost:3001/activity/getAct/${payload}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch({ type: "DELETE_ACTIVITY", payload: data });
      })
      .catch((error) => console.log(error));
  };
}
