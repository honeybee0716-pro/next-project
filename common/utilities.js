export const paginateArray = (arr, size) => {

  return arr.reduce((acc, val, i) => {
    let idx = Math.floor(i / size)
    let page = acc[idx] || (acc[idx] = [])
    page.push(val)

    return acc
  }, [])
}


export const validateField = (fieldName, value) => {

  let result = {
    isValid: "",
    message: ""
  }
  switch (fieldName) {
    case 'email':
      let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      if (emailValid) {
        result.isValid = true;
        result.message = '';
      } else {
        result.isValid = false;
        result.message = 'Invalid Email Address';
      }
      return result;
    case 'text':
      let textValid = value;
      if (textValid) {
        result.isValid = true;
        result.message = '';
      } else {
        result.isValid = false;
        result.message = 'Invalid input';
      }
      return result;
    default:
      break;
  }
}