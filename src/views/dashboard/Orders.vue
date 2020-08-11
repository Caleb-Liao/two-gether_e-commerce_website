<template>
  <div class="orderList">
    <ordermodal
    :dialog-visible="dialogVisible"
    ref="ordermodal"
    @dialog-cancel="dialogVisible = false"></ordermodal>

    <el-table
      :data="ordersList"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        label="訂單時間"
        prop="created.datetime"
        width="200"
        sortable>
      </el-table-column>
      <el-table-column
        label="名稱"
        width="180">
        <div slot-scope="scope" class="tableColumn">
          <span v-for="(item,index) in scope.row.products" :key="index">{{item.product.title}}</span>
        </div>
      </el-table-column>
      <el-table-column
        label="類別"
        width="150"
        sortable>
        <div slot-scope="scope" class="tableColumn">
          <span v-for="(item,index) in scope.row.products" :key="index">{{item.product.category}}</span>
        </div>
      </el-table-column>
      <el-table-column
        label="付款方式"
        prop="payment"
        width="120"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="總消費金額"
        prop="amount"
        align="right"
        width="120"
        sortable>
      </el-table-column>
      <el-table-column label="是否付款"
      align="center"
      width="120"
      sortable>
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.paid"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changePaidStatus(scope.row)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="訂單詳細資料" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="openModal(scope.row.id)">點我</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import OrderModal from '@/components/OrderModal'

export default {
  name: 'orders',
  components: {
    ordermodal: OrderModal
  },

  data () {
    return {
      dialogVisible: false,
      ordersList: [],
      pagination: {},
      loading: false
    }
  },

  created () {
    this.getOrders()
  },

  methods: {
    getOrders (paged = 99999) {
      this.loading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders?paged=${paged}`
      this.axios.get(api).then((response) => {
        this.ordersList = response.data.data
        this.pagination = response.data.meta.pagination
        this.loading = false
      }).catch((err) => {
        console.log(err)
      })
    },

    changePaidStatus (item) {
      this.loading = true
      let api = ''
      if (item.paid) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`
      } else {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`
      }
      this.axios.patch(api).then((response) => {
        this.getOrders()
        console.log(item.paid)
      }).catch((err) => {
        console.log(err)
      })
    },

    openModal (id) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.dialogVisible = true
      }, 1500)
      this.$refs.ordermodal.getOrder(id)
    }
  }
}
</script>

<style lang="scss">
  .tableColumn{
    display:flex;
    flex-direction:column;
    align-items:start
  }
</style>
