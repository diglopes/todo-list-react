import axios from "axios";

const URL = "http://localhost:3004/api/todo";

export function changeDescription(description) {
  return {
    type: "DESCRIPTION_CHANGED",
    payload: description,
  };
}

export function search() {
  const request = axios.get(`${URL}?sort=-createdAt`);
  return {
    type: "TODO_SEARCHED",
    payload: request,
  };
}

export function add(description) {
  return (dispatch) => {
    axios
      .post(URL, { description })
      .then(({ data }) => dispatch({ type: "TODO_CREATED", paylaod: data }))
      .then(() => dispatch(search()));
  };
}
