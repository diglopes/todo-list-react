const INITIAL_STATE = {
  description: "Ler livro",
  list: [
    {
      _id: 1,
      description: "Pagar fatura do cartao",
      done: true,
    },
    {
      _id: 2,
      description: "Reunião",
      done: false,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return {
        ...state,
        description: action.payload,
      };
    default:
      return INITIAL_STATE;
  }
};
