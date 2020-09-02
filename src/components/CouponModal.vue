<template>
  <el-dialog
    title="新增優惠券"
    :visible.sync="dialogVisible"
    top="5vh"
    :before-close="cancel">
    <el-form label-width="80px">
      <el-form-item label="名稱">
        <el-input v-model="tempCoupon.title" class="couponModalInput"></el-input>
      </el-form-item>
      <el-form-item label="序號">
        <el-input v-model="tempCoupon.code" class="couponModalInput"></el-input>
      </el-form-item>
      <el-form-item label="折扣比例">
        <el-input v-model.number="tempCoupon.percent" class="couponModalInput"></el-input> %
      </el-form-item>
      <el-form-item label="舊到期日" v-if="this.isNew === false">
        <el-date-picker
          disabled
          v-model="tempCoupon.deadline.datetime"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="23:59:59">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="到期時間">
        <el-date-picker
          v-model="tempCoupon.deadline_at"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="23:59:59">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="是否啟用">
        <el-switch
          v-model="tempCoupon.enabled"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item class="couponModalBtn">
        <el-button type="primary" @click="updateCoupon">儲存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  data () {
    return {
      tempCoupon: {
        title: '',
        code: '',
        percent: 0,
        enabled: true,
        deadline_at: '',
        deadline: {
          datetime: ''
        }
      }
    }
  },

  props: {
    dialogVisible: {
      type: Boolean,
      required: true
    },
    isNew: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    cancel () {
      this.$emit('dialog-cancel')
    },

    getCoupon (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${id}`
      this.axios.get(api).then((response) => {
        this.tempCoupon = response.data.data
      })
    },

    updateCoupon () {
      let api = ''
      let httpMethod = ''
      if (this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon`
        httpMethod = 'post'
      } else if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
        httpMethod = 'patch'
      }

      this.axios[httpMethod](api, this.tempCoupon).then(() => {
        this.cancel()
        this.$emit('update')
      })
    }
  }
}
</script>
