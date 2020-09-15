<template>
  <div class="frontendProductModal">
    <el-dialog
      :visible.sync="dialogVisible"
      width="900px"
      :before-close="closeModal">
      <el-row class="Modal">
        <el-col :span="11" :xs="24">
          <div class="imgCircle">
            <img :src="product.imageUrl[0]" alt="" class="productImg">
          </div>
        </el-col>
        <el-col :span="13" :xs="24">
          <h3>{{ product.title }}</h3>
          <div class="basicInformation">
            <h5>基本資訊</h5>
            <p>產品類別：{{ product.category }}</p>
            <p>性別：{{ product.options.gender }}</p>
            <p>地區：{{ product.options.area }}</p>
            <p>價錢：{{ product.price }} $</p>
          </div>
          <div class="line"></div>
          <div class="productInformation">
            <h5>產品資訊</h5>
            <div style="display:flex">
              <p style="width:22%">產品內容：</p>
              <p style="width:75%">{{ product.content }}</p>
            </div>
            <div style="display:flex">
              <p style="width:22%">產品描述：</p>
              <p style="width:75%">{{ product.description }}</p>
            </div>
          </div>
          <div class="button">
            <el-button @click="addToCart(product.id,'buy')">直接購買<img src="@/assets/icon/creditcard.svg" alt=""></el-button>
            <el-button @click="addToCart(product.id,'add')">加入購物車<img src="@/assets/icon/cart2.svg" alt=""></el-button>
          </div>
        </el-col>
      </el-row>

      <div class="closeIcon" @click="closeModal"><img src="@/assets/icon/close.svg" alt=""></div>
    </el-dialog>
  </div>
</template>

<script>
import { apiCartAdd, apiProductDetail } from '@/api.js'

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
      apiProductDetail(id).then((response) => {
        this.product = response.data.data
        this.$emit('open-modal')
      })
    },

    addToCart (id, status) {
      apiCartAdd({ product: id, quantity: 1 }).then((response) => {
        this.$bus.$emit('updateCartNum')
        this.$notify({
          title: '恭喜～',
          message: '商品已經加入購物車囉ヽ(●´∀`●)ﾉ',
          offset: 150
        })
        if (status === 'buy') this.$router.push({ name: 'Cart' })
      }).catch(() => {
        this.$notify({
          title: '咦～',
          message: '商品已經在購物車裡囉(｡◕∀◕｡)',
          offset: 150
        })
      })
    }
  }
}
</script>
