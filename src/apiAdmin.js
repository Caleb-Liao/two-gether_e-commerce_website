import axios from 'axios'
import { Loading } from 'element-ui'
import lodash from 'lodash'

// 登入的api，並將token存入cookie
export const apiLogin = data => axios.post(`${process.env.VUE_APP_APIPATH}/api/auth/login`, data).then((response) => {
  document.cookie = `token=${response.data.token};expires=${new Date(response.data.expired * 1000)}; path=/`
})

let token
let headers

//  製作出之後要驗證的headers讓要驗證的api能代入，並確認token沒失效
export const apiLoginCheck = () => {
  token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
  return axios.post(`${process.env.VUE_APP_APIPATH}/api/auth/check`, { api_token: token })
}

// 後台api
const apiAdmin = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec`
})

// 後台購物車相關的api
export const apiDashboardProductsGet = (paged = 999) => apiAdmin.get(`/products?paged=${paged}`, { headers: headers })
export const apiDashboardProductDetail = data => apiAdmin.get(`/product/${data}`, { headers: headers })
export const apiDashboardProductsAdd = data => apiAdmin.post('/product', data, { headers: headers })
export const apiDashboardProductsUpdate = data => apiAdmin.patch(`/product/${data.id}`, data, { headers: headers })
export const apiDashboardProductsDelete = data => apiAdmin.delete(`/product/${data}`, { headers: headers })

// 後台訂單相關的api
export const apiDashboardOrdersGet = (paged = 999) => apiAdmin.get(`/orders?paged=${paged}`, { headers: headers })
export const apiDashboardOrderDetail = data => apiAdmin.get(`/orders/${data}`, { headers: headers })
export const apiDashboardPaidChange = data => {
  if (data.paid) {
    return apiAdmin.patch(`/orders/${data.id}/paid`, { headers: headers })
  } else {
    return apiAdmin.patch(`/orders/${data.id}/unpaid`, { headers: headers })
  }
}

// 後台優惠券相關的api
export const apiDashboardCouponsGet = (paged = 999) => apiAdmin.get(`/coupons?paged=${paged}`, { headers: headers })
export const apiDashboardCouponDetail = data => apiAdmin.get(`/coupon/${data}`, { headers: headers })
export const apiDashboardCouponsAdd = data => apiAdmin.post('/coupon', data)
export const apiDashboardCouponsUpdate = data => apiAdmin.patch(`/coupon/${data.id}`, data, { headers: headers })
export const apiDashboardCouponsDelete = data => apiAdmin.delete(`/coupon/${data}`, { headers: headers })

// 設置攔截器，統一管理loading效果，並且防止抖動以免loading開開關關
let loading
let needLoadingRequestCount = 0

function startLoading () {
  loading = Loading.service()
}
const endLoading = lodash.debounce(() => {
  loading.close()
}, 300)

apiAdmin.interceptors.request.use(
  config => {
    if (needLoadingRequestCount === 0) {
      startLoading()
    }
    needLoadingRequestCount++
    return config
  }
)

apiAdmin.interceptors.response.use(
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
