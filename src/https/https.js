import axios from "axios";

export const BASE_URL = "https://shared.udoyadn.com";
export const API_KEY = "PaHewl79mMh91kg48dHgsdl0L739jGzM";

export const headers = {
    'Content-Type': 'application/json',
    'Authorization': `API-Key ${API_KEY}`
}

export default axios.create({
    baseURL: BASE_URL,
    headers: headers
});

export async function Post(apiEndPoint, data) {
    return await axios.post(`${BASE_URL}${apiEndPoint}`, data, {
        headers: headers
    });
}

export async function Get(apiEndPoint) {
    return await axios.get(`${BASE_URL}${apiEndPoint}`, {
        headers: headers
    });
}
