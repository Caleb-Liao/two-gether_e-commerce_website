<template>
  <div class="couponList">
    <div class="couponsTopBtn">
      <el-button @click="openModal('new')">新增優惠券</el-button>
    </div>

    <couponmodal
    :dialog-visible="dialogVisible"
    :is-new="isNew"
    ref="couponModal"
    @update="getCoupons"
    @dialog-cancel="dialogVisible = false"></couponmodal>

    <el-table
      :data="couponList"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        label="名稱"
        prop="title"
        width="180">
      </el-table-column>
      <el-table-column
        label="序號"
        prop="code"
        width="200"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="折扣百分比"
        prop="percent"
        width="150"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="到期時間"
        prop="deadline.datetime"
        width="200"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="是否啟用"
        prop="enabled"
        width="100"
        align="center">
        <div slot-scope="scope">
          <span v-if="scope.row.enabled" style="color:#c02c38">啟用</span>
          <span v-else>未啟用</span>
        </div>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            style="margin-left:10px"
            @click="openModal('edit',scope.row.id)">編輯</el-button>
          <el-button
            size="mini"
            type="danger" @click="deleteItem(scope.row)">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal'

export default {
  components: {
    couponmodal: CouponModal
  },

  data () {
    return {
      dialogVisible: false,
      isNew: true,
      loading: false,
      couponId: '',
      couponList: []
    }
  },

  created () {
    this.getCoupons()
  },

  methods: {
    getCoupons () {
      this.loading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons`
      this.axios.get(api).then((response) => {
        this.couponList = response.data.data
        this.loading = false
      })
    },

    openModal (status, id) {
      switch (status) {
        case 'new':
          this.$refs.couponModal.tempCoupon = {}
          this.isNew = true
          this.dialogVisible = true
          break
        case 'edit':
          this.couponId = id
          this.$refs.couponModal.getCoupon(this.couponId)
          this.isNew = false
          this.loading = true
          setTimeout(() => {
            this.dialogVisible = true
            this.loading = false
          }, 1500)
          break
        default:
          break
      }
    },

    deleteItem (item) {
      this.$confirm(`確定要刪除 ${item.title} 嗎？`, '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '刪除成功!'
        })
        this.loading = true
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${item.id}`
        this.axios.delete(url).then(() => {
          this.getCoupons()
        })
      }).catch(() => {})
    }
  }
}
</script>
