<template>
  <div class="cartPage">
    <h2 class="title"><mark class="mark">我的購物車</mark></h2>

      <template v-if="active === 1">
        <div class="line1"><img src="@/assets/icon/cart3.svg" alt="" ></div>
        <el-button @click="deleteAll">清空購物車<img src="@/assets/icon/trashcan.svg" alt=""></el-button>
        <el-table :data="cart">
          <el-table-column
            min-width="40%"
            label="品名">
            <div slot-scope="scope">
              <el-image
                :src="scope.row.product.imageUrl[0]"
                @click="openModal(scope.row.product.id)">
              </el-image>
              <h6>{{scope.row.product.title}}</h6>
            </div>
          </el-table-column>
          <el-table-column
          min-width="25%"
            prop="product.category"
            label="類別"
            align="center">
          </el-table-column>
          <el-table-column
          min-width="25%"
            prop="product.price"
            label="小計"
            align="center">
          </el-table-column>
          <el-table-column
            min-width="10%"
            align="center">
            <div slot-scope="scope" class="delete">
              <img src="@/assets/icon/trashcan.svg" alt="" @click="deleteItem(scope.row.product.id)" style="cursor:pointer">
            </div>
          </el-table-column>
        </el-table>
        <div class="cost">
          <div>
            <p>折扣碼 ：</p>
            <el-input
              placeholder="請輸入折扣碼"
              v-model="couponCode"
              style="width:120px"
              @keyup.native.enter="sendCouponCode"
              v-if="coupon === null">
            </el-input>
            <span v-if="coupon">-{{ couponDiscount }}(-{{ couponDiscountRate }} %) 元</span>
          </div>
          <div>
            <p>運費 ：</p>
            <span>0 元</span>
          </div>
          <div>
            <p>共計 :</p>
            <span v-if="!coupon">{{ cartTotalBefore }} 元</span>
            <span v-else-if="coupon">{{ cartTotalAfter }} 元</span>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end">
          <span v-show="!couponStatus" style="color:#F56C6C;margin-top:15px">*您輸入的折扣碼錯誤，請重新輸入 !</span>
          <el-button @click="moveToForm">前往結帳<img src="@/assets/icon/creditcard.svg" alt=""></el-button>
        </div>
        <div class="notice">
          <p v-if="cart.length == 0">
            購物車裡目前沒有商品唷，再來去逛逛吧！
            <router-link to="/products/all">繼續逛逛</router-link>
          </p>
        </div>
      </template>

      <template v-if="active === 2">
        <div class="line2">
          <div class="line2-1">
            <img src="@/assets/icon/cartWhite2.svg" alt="" >
          </div>
          <div class="line2-2">
            <img src="@/assets/icon/creditcard2.svg" alt="" >
          </div>
        </div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="姓名：" prop="name" label-width="120px">
            <label slot="label" for="name"><span style="margin-right:2em">姓</span>名：</label>
            <el-input v-model="form.name" placeholder="請填寫當日活動者" class="input" id="name"></el-input>
          </el-form-item>
          <el-form-item label="電話：" prop="tel" label-width="120px">
            <label slot="label" for="tel"><span style="margin-right:2em">電</span>話：</label>
            <el-input v-model="form.tel" placeholder="0912-345-678" class="input" id="tel"></el-input>
          </el-form-item>
          <el-form-item label="電子郵件：" prop="email" label-width="120px" for="email">
            <el-input v-model="form.email" placeholder="abc123999@gmail.com" class="input" id="email"></el-input>
          </el-form-item>
          <el-form-item label="付款方式：" prop="payment" label-width="120px" for="payment">
            <el-select v-model="form.payment" placeholder="請選擇付款方式" id="payment">
              <el-option v-for="item in payment" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="備註：" label-width="120px">
            <label slot="label" for="notice"><span style="margin-right:2em">備</span>註：</label>
            <el-input v-model="form.message" type="textarea" placeholder="小提示：可以在我們聯絡您之前，先簡單告訴我們您的需求唷！ " class="input" id="notice"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="submitForm('ruleForm')">確認送出<img src="@/assets/icon/send.svg" alt=""></el-button>
        <el-button @click="active--" style="float:left"><img src="@/assets/icon/return.svg" alt="" style="transform:translateX(-5px) translateY(5px)">返回</el-button>
      </template>

      <template v-if="active === 3">
        <div class="line3">
          <div class="line3-1">
            <img src="@/assets/icon/cartWhite2.svg" alt="" >
          </div>
          <div class="line3-2">
            <img src="@/assets/icon/creditcard2White.svg" alt="" >
          </div>
          <div class="line3-3">
            <img src="@/assets/icon/send2.svg" alt="" >
          </div>
        </div>
        <div class="complete">
          <h3>您的訂單已完成！</h3>
          <div class="content">
            <p>恭喜您已完成訂單，您的訂單編號為：<br>
            {{ orderId }}<br>
            我們會在活動當天前七天聯絡您討論當天內容，<br>
            若是有需要的話也可以直接連絡我們！<br>
            您可以在<router-link to="/order">我的訂單</router-link>中查詢您的訂單，<br>
            若要修改或刪除訂單請直接連絡我們。<br>
            以下有幾點注意事項要提醒您：</p>
            <div style="text-decoration:underline;margin:2em 0">
              <p>我們不會向邊友透漏您的個資<br>
              在指定日期當天的72小時以前，若因故要取消合約，能無條件完全退費<br>
              如果當天有不滿意邊友之處，在活動結束後72小時內提出合理原因，可予以退費50%</p>
            </div>
            <p>我們還有更多可愛的小哥哥、小姊姊唷！<router-link to="/products/all">繼續逛逛</router-link></p>
          </div>
        </div>
      </template>
      <productmodal
        :dialog-visible="dialogVisible"
        @close-modal="dialogVisible = false"
        ref="frontendProductModal"
        @open-modal="dialogVisible = true">></productmodal>
    </div>
</template>

<script>
import { apiCartGet, apiCartDeleteOne, apiCartDeleteAll, apiCouponSend, apiOrderSend, apiOrderGet } from '@/api.js'
import FrontendProductModal from '@/components/FrontendProductModal'

export default {
  components: {
    productmodal: FrontendProductModal
  },
  data () {
    return {
      cart: [],
      active: 1,
      couponCode: '',
      coupon: null,
      couponStatus: true,
      orderId: '',
      payment: ['WebATM', 'ATM', 'CVS', 'Barcode', 'Credit', 'ApplePay', 'GooglePay'],
      form: {
        name: '',
        email: '',
        tel: '',
        payment: '',
        message: '',
        address: '無',
        coupon: ''
      },
      rules: {
        name: [
          { required: true, message: '請輸入姓名', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '請輸入電話', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '請輸入email', trigger: 'blur' },
          { type: 'email', message: '請輸入正確的email格式', trigger: 'blur' }
        ],
        payment: [
          { required: true, message: '請選擇付款方式', trigger: 'change' }
        ]
      },
      dialogVisible: false
    }
  },

  created () {
    this.getCart()
  },

  computed: {
    cartTotalBefore () {
      const map = this.cart.map(item => {
        return item.product.price
      })
      const total = map.reduce((a, b) => {
        return a + b
      }, 0)
      return total
    },

    couponDiscountRate () {
      return 100 - this.coupon.percent
    },

    couponDiscount () {
      return Math.round(this.cartTotalBefore * this.couponDiscountRate / 100)
    },

    cartTotalAfter () {
      return Math.round(this.cartTotalBefore * this.coupon.percent / 100)
    }
  },

  methods: {
    getCart () {
      apiCartGet().then((response) => {
        this.cart = response.data.data
        if (this.cart.length === 0) {
          this.coupon = null
        }
      })
    },

    sendCouponCode () {
      apiCouponSend({ code: this.couponCode }).then((response) => {
        this.coupon = response.data.data
        this.couponStatus = true
        this.form.coupon = this.couponCode
        this.couponCode = ''
        this.$notify({
          title: '恭喜～',
          message: '優惠券已存入購物車囉ヽ(●´∀`●)ﾉ',
          offset: 150
        })
      }).catch(() => {
        this.couponStatus = false
        this.couponCode = ''
      })
    },

    deleteItem (id) {
      apiCartDeleteOne(id).then((response) => {
        this.getCart()
        this.$bus.$emit('updateCartNum')
      })
    },

    deleteAll () {
      apiCartDeleteAll().then((response) => {
        this.getCart()
        this.$bus.$emit('updateCartNum')
      })
    },

    openModal (id) {
      this.$refs.frontendProductModal.getProduct(id)
    },

    moveToForm () {
      if (this.cart.length !== 0) {
        this.active++
      } else {
        this.$notify({
          title: '哎呀～',
          message: '購物車目前沒有商品唷 ( ´ﾟДﾟ`)',
          offset: 150
        })
      }
    },

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.sendOrder()
        }
      })
    },

    sendOrder () {
      apiOrderSend(this.form).then(() => {
        this.$bus.$emit('updateCartNum')
        this.getOrderId()
      })
    },

    getOrderId () {
      apiOrderGet().then((response) => {
        this.active++
        this.orderId = response.data.data[0].id
      })
    }
  }
}
</script>
