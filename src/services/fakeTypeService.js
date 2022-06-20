const types = [
  { _id: 1, name: "Compras", items: ["Roupas", "Utensílios"] },
  { _id: 2, name: "Entretenimento e Lazer", items: ["Bar", "Filmes"] },
  { _id: 3, name: "Assinaturas", items: ["Amazon Prime", "iCloud"] },
  { _id: 4, name: "Transporte", items: ["Estacionamento", "Passagem"] },
];

export function getTypes() {
  return types;
}
