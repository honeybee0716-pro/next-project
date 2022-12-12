import axios from 'axios'

export const fetcher = (url) => axios.get(url).then(res => res.data);

export const postData = (url, data) => axios.post(url, JSON.stringify(data)).then(res => res.data);

export const getData = (url) => axios.get(url).then(res => res.data);


var fileDownload = require('js-file-download');

export const downloadFile = (url, payload, fileName) => {
  const fileUrl = url;
  axios({
    url: fileUrl,
    method: 'POST',
    responseType: 'blob', // Important
    data: payload
  }).then((response) => {
    fileDownload(response.data, fileName);
  });
}


export const readTextFile = (url) => axios.get(url).then(res => res.data);