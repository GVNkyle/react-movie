import axios from "axios";
import { API_URL } from "./constants";

const httpRequest = axios.create({
    baseURL: API_URL
})

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
}

export default httpRequest;