import axios from "axios";

export const API_URL = "http://localhost:8080/";
export const fileUrl = API_URL + "files/download/";

// Check if 'data' exists in localStorage before accessing its properties
let authStr = "";
const storedData = localStorage.getItem("data");
if (storedData) {
  authStr = "Bearer " + JSON.parse(storedData).token;
}
const authorization = { headers: { Authorization: authStr } };

export const getAPI = async (url) => {
  let result = {};
  await axios
    .get(API_URL + url, authorization)
    .then((res) => (result = res.data.data));
  return result;
};

export const putAPI = (url, data, fc) => {
  axios.put(API_URL + url, data, authorization).then(() => fc());
};

export const postAPI = (url, data, fc) => {
  axios.post(API_URL + url, data, authorization).then(() => fc());
};

export const delAPI = (url, fc) => {
  axios.delete(API_URL + url, authorization).then(() => fc());
};
