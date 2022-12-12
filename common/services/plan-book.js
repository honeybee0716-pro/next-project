import { postData } from '../webService';

export const savePlanBook = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=SavePlanBookOrder&params`;
    return postData(DATA_URL, payload);
}