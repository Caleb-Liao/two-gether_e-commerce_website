<template>
  <div class="frontendProductModal">
    <el-dialog
      :visible.sync="dialogVisible"
      width="900px"
      top="10vh"
      :before-close="closeModal">
      <el-row class="Modal">
        <el-col :span="11">
          <div class="imgCircle">
            <img :src="product.imageUrl[0]" alt="" class="productImg">
          </div>
        </el-col>
        <el-col :span="13">
          <h2>{{product.title}}</h2>
          <div class="basicInformation">
            <h5>基本資訊</h5>
            <p>產品類別：{{product.category}}</p>
            <p>性別：{{product.options.gender}}</p>
            <p>地區：{{product.options.area}}</p>
            <p>價錢：{{product.price}} $</p>
          </div>
          <div class="productInformation">
            <h5>產品資訊</h5>
            <div style="display:flex">
              <p style="width:22%">產品內容：</p>
              <p style="width:75%">{{product.content}}</p>
            </div>
            <div style="display:flex">
              <p style="width:22%">產品描述：</p>
              <p style="width:75%">{{product.description}}</p>
            </div>
          </div>
          <div class="button">
            <el-button @click="addToCart(product.id,'add')">直接購買<img src="@/assets/icon/creditcard.svg" alt=""></el-button>
            <el-button @click="addToCart(product.id,'buy')">加入購物車<img src="@/assets/icon/cart2.svg" alt=""></el-button>
          </div>
        </el-col>
      </el-row>

      <div class="closeIcon" @click="closeModal"><img src="@/assets/icon/close.svg" alt=""></div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        imageUrl: [],
        options: {}
      }
    }
  },

  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    closeModal () {
      this.$emit('close-modal')
    },

    getProduct (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`

      this.axios.get(api).then((response) => {
        this.product = response.data.data
      }).catch((err) => {
        console.log(err)
      })
    },

    addToCart (id, status) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.axios.post(api, { product: id, quantity: 1 }).then((response) => {
        if (status === 'buy') this.$router.push({ name: 'Cart' })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
.frontendProductModal{
  .el-dialog{
    box-shadow: 0 0 20px 10px rgba(165, 154, 150, 0.5);
    z-index: 1;
  }
  .el-dialog__wrapper{
    backdrop-filter: blur(10px);
    background-color: rgba(165, 154, 150, 0.5);
  }
  .Modal{
    padding: 0 40px;
    .imgCircle{
      margin-top: 35%;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background-color: #a59a96;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      &::after{
        content: "";
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: rgba(214, 203, 199, 0.2);
        position: absolute;
        top: 20px;
        left: 20px;
        z-index: -1;
      }
      .productImg{
        width: 72%;
        height: 80%;
        border-radius: 40%;
      }
    }
    h2{
      font-size: 32px;
      color: #4b403c;
    }
    h5{
      color:#a59a96;
      opacity: 0.5;
    }
    p{
      font-size: 16px;
      color: #a59a96;
      margin: 1em 0;
      line-height: 1.5em;
    }
    .basicInformation{
      margin: 2em 0;
      width: 400px;
      border-bottom: 1px solid;
      border-image-source: linear-gradient(to left, #ffffff, #a59a96 0%);
      border-image-slice: 1;
    }
    .button{
      text-align: center;
      margin: 40px 0 50px 0;
      .el-button{
        height: 32px;
        color: #a59a96;
        border-radius: 16px;
        border: solid 1px #d6cbc7;
        padding: 0 10px;
        line-height: 32px;
        img{
          margin-left: 3px;
          transform: translateY(5px);
        }
      }
    }
  }
  .closeIcon{
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>
