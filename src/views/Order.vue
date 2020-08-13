<template>
  <div class="order"  v-loading="loading">
    <h1>我的訂單</h1>
    <p>訂單編號：{{order.id}}</p>
    <div v-for="item in order.products" :key="item.product.title+item.product.description">
      <p>品項：{{item.product.title}}</p>
      <p>類別：{{item.product.category}}</p>
      <p>內容：{{item.product.content}}</p>
      <p>描述：{{item.product.description}}</p>
      <p>價錢：{{item.product.price}}</p>
      <img :src="item.product.imageUrl[0]" alt="" style="width:200px;height:200px">
    </div>
    <p>備註：{{order.message}}</p>
    <p v-if="order.coupon">使用優惠券：{{order.coupon.title}}</p>
    <p v-if="order.coupon">折扣百分比：{{order.coupon.percent}}</p>
    <p>共計：{{order.amount}}</p>
    <p>付款方式：{{order.payment}}</p>
    <p v-if="order.paid">已付款</p>
    <p v-if="!order.paid">尚未付款</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      order: {},
      loading: false
    }
  },

  created () {
    this.getOrder()
  },

  methods: {
    getOrder () {
      this.loading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders?paged=99999`
      this.axios.get(api).then((response) => {
        this.orderId = response.data.data[32].id
        // 取得最新一筆訂單資料的id後，用它來取得該筆完整的訂單細節
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
        this.axios.get(api).then((response) => {
          this.order = response.data.data
          this.loading = false
        }).catch((err) => {
          console.log('取得訂單細節有誤', err)
          this.loading = false
        })
      }).catch((err) => {
        console.log('取得訂單id有誤', err)
        this.loading = false
      })
    }
  }
}
</script>
