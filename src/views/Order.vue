<template>
  <div class="orderPage"  v-loading="loading">
    <h2 class="title"><mark class="mark">我的訂單</mark></h2>
    <p>訂單編號：</p>
    <p class="orderId">{{order.id}}</p>
    <div class="products">
      <div v-for="item in order.products" :key="item.product.imageUrl[0]" class="product">
        <el-image :src="item.product.imageUrl[0]" alt=""></el-image>
        <div class="productTitle">
          <h3>{{item.product.title}}</h3>
          <span>&nbsp;</span>
          <h4>{{item.product.category}}</h4>
          <h5>—{{item.product.price}}$</h5>
        </div>
      </div>
    </div>
    <div class="orderOthers">
      <p>訂購人：{{order.user.name}}</p>
      <p>聯絡電話：{{order.user.tel}}</p>
      <p>電子郵件：{{order.user.email}}</p>
      <p v-if="order.message">備註：{{order.message}}</p>
      <p v-if="!order.message">備註：無</p>
      <p v-if="order.coupon">使用優惠券：{{order.coupon.title}}</p>
      <p v-if="order.coupon">折扣百分比：{{order.coupon.percent}} %</p>
      <p>共計：{{Math.round(order.amount)}} $</p>
      <p>付款方式：{{order.payment}}
        <span v-if="order.paid">已付款</span>
        <span v-if="!order.paid">尚未付款</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      loading: false
    }
  },

  created () {
    this.getOrderId()
  },

  methods: {
    getOrderId () {
      this.loading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`
      this.axios.get(api).then((response) => {
        this.orderId = response.data.data[0].id
        this.getOrder()
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    },

    getOrder () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.axios.get(api).then((response) => {
        this.order = response.data.data
        this.loading = false
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
  .orderPage{
    padding: 100px 120px 50px 80px;
    @media(max-width: 768px){
      padding: 100px 30px 30px 30px;
    }
    .orderId{
      font-family: 'Prata';
      font-style: italic;
      margin-left: 2em;
      margin-top: 20px;
      word-wrap:break-word;
      word-break:break-all;
      @media(max-width: 768px){
        margin-left: 0;
      }
    }
    .products{
      padding: 40px 0;
      display: flex;
      flex-wrap: wrap;
      @media(max-width: 768px){
        padding-bottom: 0;
      }
      .product{
        width: 50%;
        display: flex;
        align-items: flex-end;
        margin-bottom: 30px;
        @media(max-width: 768px){
          width: 100%;
        }
      }
      .el-image{
        background-color: #f7f5f4;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        img{
          width: 60px;
          transform: translateY(10px);
        }
        @media (max-width: 768px) {
          width: 60px;
          height: 60px;
          img{
            width: 50px;
          }
        }
      }
      .productTitle{
        display: flex;
        margin-left: 30px;
        @media (max-width: 768px) {
          margin-left: 10px;
        }
        h3{
          font-size: 28px;
          color: #4b403c;
          @media (max-width: 768px) {
            font-size: 18px;
          }
        }
        span{
          width: 30px;
          height: 30px;
          border-bottom: 1px solid #000;
          transform:rotate(-45deg) translateY(-30%);
          @media (max-width: 768px) {
            width: 20px;
            height: 20px;
          }
        }
        h4{
          color: #a59a96;
          margin-left: 10px;
          transform: translateY(10px);
          @media (max-width: 768px) {
            transform: translateY(0);
          }
        }
        h5{
          color: #4b403c;
          font-size: 16px;
          margin-left: 30px;
          transform: translateY(10px);
          @media (max-width: 768px) {
            margin-left: 10px;
            transform: translateY(0);
          }
        }
      }
    }
    .orderOthers{
      p{
        color: #4b403c;
        margin: 20px 0;
      }
    }
  }
</style>
