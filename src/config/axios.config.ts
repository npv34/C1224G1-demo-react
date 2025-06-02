import axios from "axios";

const intanceAxios = axios.create({
    baseURL: "http://localhost:3000"
})

export default intanceAxios;