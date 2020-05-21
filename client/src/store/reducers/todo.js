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

export default () => {
  return INITIAL_STATE;
};
