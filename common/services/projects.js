import { getData } from "../webService";

export const getProjectLists = (filter) => {
  let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetProjectList&params=`;
  console.log("daatprocess.env.PHP_ENDPOINT", process.env.PHP_ENDPOINT);
  switch (filter) {
    case "current":
      DATA_URL = `http://2021.thelogconnection.com/_php/index.php?function=GetProjectList&params=current`;
      //   DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetProjectList&params=current`;
      break;
    case "past":
      DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetProjectList&params=past`;
      break;
    case "favorite":
      DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetProjectList&params=favorite`;
      break;
  }

  return getData(DATA_URL);
};

export const getProjectDetails = (projectCode) => {
  let DATA_URL = `${process.env.PHP_ENDPOINT}?function=GetProjectDetails&params=${projectCode}`;
  return getData(DATA_URL);
};
