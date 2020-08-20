<template>
  <div class="orderPage"  v-loading="loading">
    <h2 class="title"><mark class="mark">我的訂單</mark></h2>
    <p>訂單編號：</p>
    <p class="orderId">{{order.id}}</p>
    <div class="products">
      <div v-for="item in order.products" :key="item.product.imageUrl[0]" class="product">
        <img :src="item.product.imageUrl[0]" alt="">
        <div class="productTitle">
          <h3>{{item.product.title}}</h3>
          <span>&nbsp;</span>
          <h4>{{item.product.category}}</h4>
        </div>
        <p class="productContent">{{item.product.content}}</p>
        <p class="productDescription">—{{item.product.description}}</p>
        <p class="productPrice"><span>—</span>{{item.product.price}}$</p>
      </div>
    </div>
    <div class="orderOthers">
      <p v-if="order.message">備註：{{order.message}}</p>
      <p v-if="!order.message">備註：無</p>
      <p v-if="order.coupon">使用優惠券：{{order.coupon.title}}</p>
      <p v-if="order.coupon">折扣百分比：{{order.coupon.percent}} %</p>
      <p>共計：{{order.amount}} $</p>
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
        this.order = response.data.data[32]
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
    padding: 100px 120px 100px 80px;
    @media(max-width: 768px){
      padding: 100px 30px
    }
    .orderId{
      margin-left: 2em;
      margin-top: 20px;
      word-wrap:break-word;
      word-break:break-all;
    }
    .products{
      padding: 40px 0 40px 80px;
      display: flex;
      justify-content: space-between;
      @media(max-width: 768px){
        padding-left: 0;
        flex-direction: column;
        align-items: center;
      }
      .product{
        width: 30%;
        @media(max-width: 768px){
          width: 50%;
          margin-bottom: 30px;
        }
        @media(max-width: 550px){
          width: 80%;
        }
      }
      img{
        width: 100%;
        height: 250px;
        box-shadow: 0 0 20px #a59a96;
      }
      .productTitle{
        display: flex;
        justify-content: center;
        margin: 20px 0;
        h3{
          font-size: 28px;
          color: #4b403c;
        }
        span{
          width: 40px;
          height: 40px;
          border-bottom: 1px solid #000;
          transform:rotate(-45deg) translateY(-40%)
        }
        h4{
          color: #a59a96;
          transform: translateY(20px);
        }
      }
      .productContent{
        line-height: 1.33em;
        color: #4b403c;
        font-style: italic;
      }
      .productDescription{
        font-size: 14px;
        line-height: 1.7em;
        color: #a59a96;
        font-style: italic;
        margin: 20px 0;
      }
      .productPrice{
        text-align: end;
        font-size: 28px;
        font-style: italic;
        span{
          color: #a59a96;
          margin-right: 10px;
          font-size: 20px;
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
