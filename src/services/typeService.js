import http from "./httpService";

const baseURL = "http://localhost:4000/api";
const endpoint = "/types";

export function getTypes() {
  return http.get(baseURL + endpoint);
}
