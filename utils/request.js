import qs from "qs"
import {
  ROOT_URL
} from "../libs/config"
import {
  showMsg
} from "./util";

const requestMethod = (url, params, method, header) => {
  const env = wx.getAccountInfoSync().miniProgram.envVersion
  switch (env) {
    case 'develop':
      url = ROOT_URL.dev + url;
      break;
    case "trial":
      url = ROOT_URL.test + url;
      break;
    case "release":
      url = ROOT_URL.prod + url;
      break;
    default:
      url = ROOT_URL.dev + url;
      break;
  }
  header = {
    'Content-Type': 'application/json; charset=UTF-8',
    ...header
  }
  console.log(url)
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data: method === 'GET' ? null : params,
      dataType: 'json',
      header,
      method,
      success: (result) => {
        if (result.errMsg === 'request:ok' && result.statusCode === 200) {
          //请求成功

          const data = result.data
          const code = data.code
          console.log(data)
          switch (code) {
            case 0:
              resolve(data.data);
              break;
            default:
              showMsg(data.message);
              reject(data);
              break;
          }
        } else {
          reject(result.data)
        }
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export const Get = (url, params, header) => {
  url = `${url}?${qs.stringify(params)}`
  const method = 'GET'
  return requestMethod(url, params, method, header)
}

export const Post = (url, params, header) => {
  const method = 'POST'
  return requestMethod(url, params, method, header)
}