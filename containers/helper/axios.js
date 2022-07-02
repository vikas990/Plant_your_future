import axios from "axios";

const instance = axios.create({
  baseURL: "https://plant-your-future-backend.herokuapp.com",
});

export default instance;
