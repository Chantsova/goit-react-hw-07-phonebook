import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
    const { data } = await axios.get(`/items`);
    return data;
};