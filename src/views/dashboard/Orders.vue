<template>
  <div class="orderList">
    <ordermodal
    :dialog-visible="dialogVisible"
    ref="ordermodal"
    @open-modal="dialogVisible = true"
    @dialog-cancel="dialogVisible = false"></ordermodal>

    <el-table
      :data="ordersList"
      style="width: 100%">
      <el-table-column
        label="訂單時間"
        prop="created.datetime"
        width="250"
        sortable>
      </el-table-column>
      <el-table-column
        label="名稱"
        width="250">
        <div slot-scope="scope" class="tableColumn">
          <span v-for="(item,index) in scope.row.products" :key="index">{{ item.product.title }}</span>
        </div>
      </el-table-column>
      <el-table-column
        label="類別"
        width="150"
        sortable>
        <div slot-scope="scope" class="tableColumn">
          <span v-for="(item,index) in scope.row.products" :key="index">{{ item.product.category }}</span>
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
        align="right"
        width="120"
        sortable>
        <template slot-scope="scope">
          <span>{{ Math.round(scope.row.amount) }}</span>
        </template>
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
import { apiDashboardOrdersGet, apiDashboardPaidChange } from '@/apiAdmin.js'
import OrderModal from '@/components/OrderModal'

export default {
  components: {
    ordermodal: OrderModal
  },

  data () {
    return {
      dialogVisible: false,
      ordersList: [],
      pagination: {}
    }
  },

  created () {
    this.getOrders()
  },

  methods: {
    getOrders () {
      apiDashboardOrdersGet().then((response) => {
        this.ordersList = response.data.data
        this.pagination = response.data.meta.pagination
      })
    },

    changePaidStatus (item) {
      apiDashboardPaidChange(item).then(() => {
        this.getOrders()
      })
    },

    openModal (id) {
      this.$refs.ordermodal.getOrder(id)
    }
  }
}
</script>
