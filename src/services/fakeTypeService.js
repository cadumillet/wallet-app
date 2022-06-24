const types = [
  { _id: 1, name: "Compras", items: ["Roupas", "Utensílios"] },
  { _id: 2, name: "Entretenimento e Lazer", items: ["Bar", "Filmes"] },
  { _id: 3, name: "Assinaturas", items: ["Amazon Prime", "iCloud"] },
  { _id: 4, name: "Transporte", items: ["Estacionamento", "Passagem"] },
];

// When the description is new
export function addType() {}

// When already existis a type with the description
export function updateType() {}

export function getTypes() {
  return types;
}
