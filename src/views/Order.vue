<template>
  <div class="orderPage">
    <h2 class="title"><mark class="mark">我的訂單</mark></h2>
    <p>訂單編號：</p>
    <p class="orderId">{{ order.id }}</p>
    <div class="products">
      <div v-for="item in order.products" :key="item.product.imageUrl[0]" class="product">
        <el-image :src="item.product.imageUrl[0]" alt=""></el-image>
        <div class="productTitle">
          <h3>{{ item.product.title }}</h3>
          <span>&nbsp;</span>
          <h4>{{ item.product.category }}</h4>
          <h5>—{{ item.product.price }}$</h5>
        </div>
      </div>
    </div>
    <div class="orderOthers">
      <p>訂購人：{{ order.user.name }}</p>
      <p>聯絡電話：{{ order.user.tel }}</p>
      <p>電子郵件：{{ order.user.email }}</p>
      <p v-if="order.message">備註：{{ order.message }}</p>
      <p v-if="!order.message">備註：無</p>
      <p v-if="order.coupon">使用優惠券：{{ order.coupon.title }}</p>
      <p v-if="order.coupon">折扣百分比：{{ order.coupon.percent }} %</p>
      <p>共計：{{ Math.round(order.amount) }} $</p>
      <p>付款方式：{{ order.payment }}
        <span v-if="order.paid">已付款</span>
        <span v-if="!order.paid">尚未付款</span>
      </p>
    </div>
  </div>
</template>

<script>
import { apiOrderGet, apiOrderDetail } from '@/api.js'

export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
    }
  },

  created () {
    this.getOrderId()
  },

  methods: {
    getOrderId () {
      apiOrderGet().then((response) => {
        this.orderId = response.data.data[0].id
        this.getOrderDetail()
      })
    },

    getOrderDetail () {
      apiOrderDetail(this.orderId).then((response) => {
        this.order = response.data.data
      })
    }
  }
}
</script>
