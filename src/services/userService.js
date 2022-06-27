import http from "./httpService";
import config from "../config.json";

const apiUrl = config.apiUrl;
const endpoint = "/users";

export function getUsers() {
  return http.get(apiUrl + endpoint);
}
