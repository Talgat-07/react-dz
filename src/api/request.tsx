import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com/products",
});


// https://dummyjson.com/products/1