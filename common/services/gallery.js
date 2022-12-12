import { getData } from '../webService';

export const getGalleryList = (filter) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetGalleryList&params=${filter}`;
    return getData(DATA_URL);
} 