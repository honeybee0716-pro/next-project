export const setCookie = (name, value, expires) => {
    var lifetime = 360; //-- DEFAULT, IN DAYS
    if (expires) lifetime = expires;
    var todayDate = new Date();
    var expireDate = new Date(todayDate.getTime() + (lifetime * 24 * 3600 * 1000)); //-- MILLISECONDS
    document.cookie = (name + '=' + escape(value) + '; expires=' + expireDate.toGMTString());
}

export const eraseCookie = (name) => {
    if (document.cookie && ((document.cookie.indexOf(name)) > -1)) {
        var lifetime = -1; //-- IN DAYS
        var todayDate = new Date();
        var expireDate = new Date(todayDate.getTime() + (lifetime * 24 * 3600 * 1000)); //-- MILLISECONDS
        document.cookie = (name + '=' + ' ' + '; expires=' + expireDate.toGMTString());
    }
}

export const getCookie = (name) => {

    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
    

}

export const arrayFromCookie = (formName) => {
    var cString = getCookie(formName);
    if (!cString) return false;
    var fieldArray = cString.split("&", 200);
    var cookieElements = new Array();
    var fieldName = "";
    var fieldValue = "";
    for (i in fieldArray) {
        var temp = fieldArray[i].split("=", 2);
        fieldName = temp[0];
        fieldValue = temp[1];
        cookieElements[fieldName] = fieldValue;
    }
    return cookieElements;
}
