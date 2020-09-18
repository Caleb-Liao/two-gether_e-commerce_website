import axios from 'axios'
import { Loading } from 'element-ui'
import lodash from 'lodash'

// 前台api
const api = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec`
})

// 產品相關的api
export const apiProductsGet = (page = 1, paged = 999) => api.get(`/products?page=${page}&paged=${paged}`)
export const apiProductDetail = data => api.get(`product/${data}`)

// 購物車相關的api
export const apiCartGet = (paged = 999) => api.get(`/shopping?paged=${paged}`)
export const apiCartAdd = data => api.post('/shopping', data)
export const apiCartDeleteOne = data => api.delete(`/shopping/${data}`)
export const apiCartDeleteAll = () => api.delete('/shopping/all/product')
// 一進入網站不想要跳圈圈，所以將'取得購物車數量的api'獨立出來
export const apiCartNum = (paged = 999) => axios.get(`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping?paged=${paged}`)

// 訂單相關的api
export const apiOrderGet = () => api.get('/orders')
export const apiOrderDetail = data => api.get(`/orders/${data}`)
export const apiOrderSend = data => api.post('/orders', data)

// 優惠券相關的api
export const apiCouponSend = data => api.post('/coupon/search', data)

// 設置攔截器，統一管理loading效果，並且防止抖動以免loading開開關關
let loading
let needLoadingRequestCount = 0

function startLoading () {
  loading = Loading.service()
}
const endLoading = lodash.debounce(() => {
  loading.close()
}, 300)

api.interceptors.request.use(
  config => {
    if (needLoadingRequestCount === 0) {
      startLoading()
    }
    needLoadingRequestCount++
    return config
  }
)

api.interceptors.response.use(
  response => {
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
      endLoading()
    }
    return response
  },
  error => {
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
      endLoading()
    }
    return Promise.reject(error)
  }
)
