import axios from 'axios'

// 创建一个对象
const instance = axios.create({
  baseURL: "https://api.cat-shop.penkuoer.com",
  timeout: 5000,
})

// 请求拦截
// 所有的网络请求都会先走这个方法
instance.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  // Do something before response is sent
  return response;
}, error => {
  // Do something with response error
  return Promise.reject(error);
});


export function get(url, params) {
  return instance.get(url, {
    params
  });
}
export function post(url, data) {
  return instance.post(url, data);
}