import 'whatwg-fetch'
import 'es6-promise'

//导出Get请求
export function fetchget(url) {
    const result = fetch(url, {
        //fetch不管在同域还是在跨域的情况下，默认都不携带cookie的，所以那些需要权限验证的请求就无法正常获取到数据，这时候需要配置credentials项，有一下三个选项可添：
        //credentials:omit        默认值，忽略cookie的发送
        //credentials:same-origin 同源情况会发送cookie
        //credentials:include     表示既可以同域发送，也可以跨域发送
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })
    //response就是服务器相应的结果，有三种方式解析获取到的数据：
    //1 json数据      用response.json()来解析
    //2 xml格式文件   用response.text()来解析
    //3 图片文件      用response.blob()来解析
    return result.then(response => response.json())
}

export function fetchpost(url, paramsObj) {
    const result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        //post请求发送的数据需要是这样的："name=zhangsan&content=宝宝不开心"
        body: obj2params(paramsObj)
    })
    return result.then(response => response.json());
}

function obj2params(obj) {
    var result = '';
    var item
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}