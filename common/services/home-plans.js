import { getData, postData } from '../webService';

export const getHomePlan = (planCode) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetLogHomePlans&params=${planCode}`;
    return getData(DATA_URL);
} 

export const getFilteredHomePlans = (filter) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetFilteredHomePlans&params=${filter}`;
    return getData(DATA_URL);
} 

export const getHomePlanImages = (planCode) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetPlanImagesData&params=${planCode}`;
    return getData(DATA_URL);
} 

export const saveStudySet = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=SaveStudySetOrderDetails&params=''`;
    return postData(DATA_URL, payload);
}

export const getStockPlanQuantities = (planCode) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetStockPlanQuantities&params=${planCode}`;
    return getData(DATA_URL);
}

export const savePriceQuote = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=SavePriceQuote&params=''`;
    return postData(DATA_URL, payload);
}

export const calculatePriceQuote = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=CalculatePrice&params=''`;
    return postData(DATA_URL, payload);
}

export const searchHomePlan = (payload) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=SearchHomePlan&params=''`;
    return postData(DATA_URL, payload);
}