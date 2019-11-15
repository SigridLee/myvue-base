import axios from 'axios'
import store from '../../src/store/index'
// 超时时间
axios.defaults.timeout = 5000
axios.interceptors.request.use(
  config => {
    // let openId = store.state.openId
    // config.headers['token'] = store.state.token
    // config.headers['openId'] = openId
    let isUseUserId = config.headers['isUseUserId']
    let userId = store.state.userId
    // 如果该接口要使用userId
    if (userId) {
      // 请求头里加userId
      config.headers['userId'] = userId
    } else if (isUseUserId && !userId) {
    //   wx.miniProgram.redirectTo({
    //     url: '../login/login'
    //   })
    //   return Promise.reject('请登录')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http响应拦截器
axios.interceptors.response.use(
  data => {
    return data
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          console.log('拒绝访问')
      }
    }
    return Promise.reject(error)
  }
)

export default axios
