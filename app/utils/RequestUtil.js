/**
 *
 * Copyright 2015-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import getUrl from "./UrlUtil";


const request = (url, method, body) => {
    let isOk;
    return new Promise((resolve, reject) => {
        // const form = new FormData();
        // form.append('showapi_appid', '50982');
        // form.append('showapi_sign', 'cf6546bc82104f42a8c7c2792192c937');
        fetch(getUrl(url), {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/json;charset=utf-8'
            },
            body: body
            //     JSON.stringify({
            //     showapi_appid: '50982',
            //     showapi_sign: 'cf6546bc82104f42a8c7c2792192c937'
            // })
        })
            .then((response) => {
                if (response.ok) {
                    isOk = true;
                } else {
                    isOk = false;
                }
                // console.log('-----------------------------------------')
                // console.log(response)
                return response.json();
            })
            .then((responseData) => {
                if (isOk) {
                    resolve(responseData);
                } else {
                    reject(responseData);
                }
                // console.log(responseData.showapi_res_body.result)
            })
            .catch((error) => {
                reject(error);
                console.log(error)
            });
        // console.log('-----------------------------------------')
    });
};

export default {
    request
};
