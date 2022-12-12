import { postData } from '../webService';

export const sendMessage = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=SendMessage&params`;
    return postData(DATA_URL, payload);
}