import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/";

const register = (name, website, email, password, roles) => {
  return axios.post(API_URL + "signup", {
    name,
    email,
    website,
    password,
    roles,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
