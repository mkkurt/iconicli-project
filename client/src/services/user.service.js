import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getClientBoard = () => {
  return axios.get(API_URL + "client", { headers: authHeader() });
};

const getModelBoard = () => {
  return axios.get(API_URL + "model", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getAdminBoard,
  getModeratorBoard,
  getClientBoard,
  getModelBoard,
};

export default userService;
