import axios from 'axios'
import qs from 'qs'

let base = process.env.API_ROOT + '/v4/'

// 获取香评接口
export const listPerfumeComment = params => {
  return axios.post(`${base}/perfumeComment/listPerfumeComment`, qs.stringify(params), { headers: { isUseUserId: false } }).then(res => res.data)
}
