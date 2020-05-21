export function changeDescription(description) {
  return {
    type: "DESCRIPTION_CHANGED",
    payload: description,
  };
}
