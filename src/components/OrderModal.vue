<template>
  <el-dialog
    title="訂單資料"
    :visible.sync="dialogVisible"
    top="0"
    :before-close="cancel">
    <span class="alert">請勿直接修改訂單，<br>若尚未付款則重新下單即可，<br>已付款者則聯絡退款後重新下單。</span>
    <el-form label-width="80px" style="margin-top:20px">
      <el-form-item label="留言事項">
        <el-input v-model="tempOrder.message" placeholder="無"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="tempOrder.user.name"></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="tempOrder.user.email"></el-input>
      </el-form-item>
      <el-form-item label="電話">
        <el-input v-model="tempOrder.user.tel"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="tempOrder.user.address"></el-input>
      </el-form-item>
      <el-form-item label="優惠券">
        <el-input v-model="tempOrder.coupon.title" placeholder="無"></el-input>
      </el-form-item>
      <el-form-item label="折抵%數">
        <el-input v-model="tempOrder.coupon.percent" placeholder="無"></el-input>
      </el-form-item>
      <el-form-item class="orderModalBtn">
        <el-button type="primary" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { apiDashboardOrderDetail } from '@/apiAdmin.js'
export default {
  data () {
    return {
      tempOrder: {
        message: '',
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        coupon: {
          title: '',
          percent: ''
        }
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
    cancel () {
      this.$emit('dialog-cancel')
    },

    getOrder (id) {
      apiDashboardOrderDetail(id).then((response) => {
        // 拿會用到的資料就好，以免深層的東西沒處理會出錯
        this.tempOrder.message = response.data.data.message
        this.tempOrder.user = response.data.data.user
        this.tempOrder.coupon.title = response.data.data.coupon.title
        this.tempOrder.coupon.percent = response.data.data.coupon.percent
        this.$emit('open-modal')
      })
    }
  }
}
</script>
