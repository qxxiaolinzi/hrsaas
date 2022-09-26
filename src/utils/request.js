// 实现对axios二次封装
import axios from 'axios'
import { Message } from 'element-ui'
// 通过axios 创建axios 实例

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 基准地址 // prod-api
  timeout: 5000
})

service.interceptors.response.use(response => {
  const { message, data, success } = response.data
  // if(success){
  //   return data

  //   Message.error(message)
  //   return Promise.reject(new Error(message))
  // }, error =>{
  //   Message.error(error.message)
  //   return Promise.reject(error)
  // }
  if (success) {
    return data
  }
  Message.error(message)
  return Promise.reject(new Error(message))
}, error => {
  Message.error(error.message)
  return Promise.reject(error)
})

export default service
