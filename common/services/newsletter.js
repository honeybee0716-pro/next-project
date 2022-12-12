import { postData, getData} from '../webService';

export const subscribeToNewsletter = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=SubscribeToNewsletter&params='`;
    return postData(DATA_URL, payload);
}

export const subscribeToNewsletterGeneric = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=SubscribeToNewsletterGeneric&params='`;
    return postData(DATA_URL, payload);
}

export const getNewsletter = (filter) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetNewsletter&params=${filter}`;
    return getData(DATA_URL);
} 

export const getNewsletterByTemplate = (templateCd) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetNewsletterByTemplate&params=${templateCd}`;
    return getData(DATA_URL);
} 