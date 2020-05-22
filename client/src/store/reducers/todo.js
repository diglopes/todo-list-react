const INITIAL_STATE = { description: "", list: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return {
        ...state,
        description: action.payload,
      };
    case "TODO_SEARCHED":
      return {
        ...state,
        list: action.payload.data,
      };
    case "TODO_CREATED":
      return { ...state, description: "" };
    case "MARKED_AS_DONE":
      return {
        ...state,
        list: state.list.map((item) => {
          return item._id === action.payload._id ? action.payload : item;
        }),
      };
    case "MARKED_AS_PENDING":
      return {
        ...state,
        list: state.list.map((item) => {
          return item._id === action.payload._id ? action.payload : item;
        }),
      };
    default:
      return INITIAL_STATE;
  }
};
