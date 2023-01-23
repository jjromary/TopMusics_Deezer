import axios from "axios";

export const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/api.deezer.com/",
});

export const jsonServer = axios.create({
  baseURL: "http://localhost:5000",
});
