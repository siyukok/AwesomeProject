import 'whatwg-fetch'

const fetchUtil = (url, method, body) => {
    return new Promise((resolve, reject) => {
        let request = new Request(url, {
            method: method,
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8'
            }),
            body: body
        });
        fetch(request).then((response) => {
            console.log('json' + response.json())
            console.log('text' + response.text())
            resolve(response)
        }).catch((error) => {
            reject(error)
        })

    })
}

export default {
    fetchUtil
}