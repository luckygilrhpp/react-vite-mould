//axios的封装
import axios from 'axios'
//1.根域名的配置
//2.超时时间
//3.请求拦截器 / 响应拦截器

const request  = axios.create({
  baseURL:'http://geek.itheima.net/v1_0',
  timeout:5000
})

//请求拦截器-- 在请求发送之前 做拦截 插入一些自定义的配置
http.interceptors.request.use((config)=>{
  return config
},error=>{
  return Promise.reject(error)
})

//响应拦截器 -- 在请求响应之后（返回到客户端之前） 做拦截 重点处理返回的数据
http.interceptors.response.use((response)=>{
  return response.data
},error=>{
  return Promise.reject(error)
})

export {request}