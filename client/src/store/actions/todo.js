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
  const request = axios.post(URL, { description });
  return {
    type: "TODO_CREATED",
    payload: request,
  };
}
