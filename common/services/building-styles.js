import { getData } from '../webService';

export const getConstructionDetails = (styleCode) => {
    let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetConstructionDetails&params=${styleCode}`;
    return getData(DATA_URL);
} 

export const getStillImages = (filter) => { 
    let DATA_URL = ``;
    switch (filter) {
        case 'SL':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_SL_STILL_IMAGES.json`;
            break;
        case 'PB':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_PB_STILL_IMAGES.json`;
            break;
        case 'TF':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_TF_STILL_IMAGES.json`;
            break;
    }
    return getData(DATA_URL);
}

export const getTechVids = (filter) => { 
    let DATA_URL = ``;
    switch (filter) {
        case 'SL':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_SL_TECH_VID.json`;
            break;
        case 'PB':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_PB_TECH_VID.json`;
            break;
        case 'TF':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_TF_TECH_VID.json`;
            break;
    }
    return getData(DATA_URL);
}

export const getTimelapseVids = (filter) => { 
    let DATA_URL = ``;
    switch (filter) {
        case 'SL':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_SL_TIMELAPSE_VID.json`;
            break;
        case 'PB':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_PB_TIMELAPSE_VID.json`;
            break;
        case 'TF':
            DATA_URL = `${process.env.DATA_BASE_URL}/DAS_TF_TIMELAPSE_VID.json`;
            break;
    }
    return getData(DATA_URL);
}