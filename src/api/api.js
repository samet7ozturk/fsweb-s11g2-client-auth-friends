import axios from "axios";

export const createAxiosInstance = () => {
  const token = localStorage.getItem("token");

  return token
    ? axios.create({
        baseURL: "http://localhost:9000/api/",
        headers: {
          Authorization: token,
        },
      })
    : axios.create({
        baseURL: "http://localhost:9000/api/",
        headers: {},
      });
};

export let AxiosInstance;

export const renewAxiosInstance = () => {
  AxiosInstance = createAxiosInstance();
};

renewAxiosInstance();
