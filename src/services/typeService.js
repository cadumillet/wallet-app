import http from "./httpService";
import config from "../config.json";

const apiUrl = config.apiUrl;
const endpoint = "/types";

// When the description is new
export function addType() {}

// When already existis a type with the description
export function updateType() {}

export function getTypes() {
  return http.get(apiUrl + endpoint);
}
