const transactions = [
  {
    _id: "629e0ea8e85542ec4ebd2cb2",
    description: "Livros",
    price: 12,
    date: "062022",
    user: "Moyses",
    type: "Compras",
    __v: 0,
  },
  {
    _id: "629e115e3f50c63a1f9cd120",
    description: "Teste supremo",
    price: 12.32,
    date: "052022",
    user: "Moyses",
    type: "Compras",
    __v: 0,
  },
  {
    _id: "629f65387e43dc3308ac4826",
    description: "ney",
    price: 1222.32222,
    date: "012022",
    user: "Moyses",
    type: "Compras",

    __v: 0,
  },
  {
    _id: "629f65d27ee49ca923cc7b2e",
    description: "ney",
    price: 1222.32222,
    date: "012022",
    user: "Cadu",
    type: "Compras",
    __v: 0,
  },
  {
    _id: "62a15494f562c4033d3b432d",
    description: "Dino",
    price: 252,
    date: "062022",
    user: "Maca",
    type: "Compras",
    __v: 0,
  },
];

export function getTransactions() {
  return transactions;
}
