import axios from 'axios'
import { Toast } from 'antd-mobile';
import router from 'umi/router';
console.log(process.env)
console.log(process.env.APP_TYPE)

let requsturl = ""
// switch(process.env.NODE_ENV){
//   case "development":
//     requsturl = "www.baidu1.com"
//     break;
//   case "development":
//     requsturl = "www.baidu2.com"
//     break;
//   default:
//     requsturl = 'https://google.com'
// }
// create an axios instance
const service = axios.create({
  baseURL: 'www.baidu.com', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    console.log(process.env.NODE_ENV);
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
    response => {
    const res = response.data;
    if (res.code === 0 || res.code === 10 ) {
      return res;
    } else if (res.code === 401) {
      Toast.offline(`请求错误 ${response.info}`);
      router.replace({
        path: "/login"
      });
      return res;
    } else {
      Toast.offline(`请求错误 ${response.info}`);
      return Promise.reject(error || "Error");
    }
    
  },
  error => {
    Toast.offline(`请求错误 ${response.info}`);
    return Promise.reject(error || "Error");
  }
)

export default service
