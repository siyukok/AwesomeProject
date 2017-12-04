const request = (url, method, body) => {
    console.log('-----------------------------------------------------------------------------------------')
    console.log('parameters', url)
    console.log('parameters', method)
    console.log('parameters', body)
    console.log('-----------------------------------------------------------------------------------------')
    let request = new XMLHttpRequest();
    request.timeout = 0;
    request.responseType = ''
    request.withCredentials = false;
    request.open(method, url, true);
    request.onload = function (e) {
        if (this.status == 200 || this.status == 304) {
            console.log(request.responseText)
        }
    };
    request.ontimeout = function (e) {
        console.log(e)
    };
    request.onerror = function (e) {
        console.log(e)
    };
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send(body);
}

export default {
    request
};