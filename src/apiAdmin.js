import axios from 'axios'

let token
let headers

// 登入api，並將token存入
export const apiLogin = data => axios.post(`${process.env.VUE_APP_APIPATH}/api/auth/login`, data).then((response) => {
  document.cookie = `token=${response.data.token};expires=${new Date(response.data.expired * 1000)}; path=/`
  token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
  headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
})

// 確認token沒失效
export const apiLoginCheck = () => {
  return axios.post(`${process.env.VUE_APP_APIPATH}/api/auth/check`, { api_token: token })
}

// 後台需要驗證的api
const apiAdmin = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec`
  // headers: headers
})

export const apiDashboardProductsGet = (paged = 99999) => {
  return apiAdmin.get(`/products?paged=${paged}`, { headers: headers })
}
