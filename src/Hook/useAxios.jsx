import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000/api/v1/",
  baseURL: "https://job-hub-server-three.vercel.app/api/v1/",
  // baseURL: "https://job-hub-server-4teo0aw2u-jakirulislamhakim.vercel.app/api/v1/",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;