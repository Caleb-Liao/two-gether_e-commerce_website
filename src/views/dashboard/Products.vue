<template>
  <div class="productsList">
    <div class="productsTopBtn">
      <div class="categoryBtn">
        <span>類別：</span>
        <span v-for="item in category" :key="item.value"
        @click="productsList = data[item.value]"
        class="category"
        :class="{'category_active':productsList === data[item.value]}">{{item.name}}</span>
      </div>
      <el-button @click="openModal('new')">新增產品</el-button>
    </div>

    <productmodal
    :dialog-visible="dialogVisible"
    :is-new="isNew"
    ref="productModal"
    @dialog-cancel="dialogVisible = false"
    @update="getProducts"></productmodal>

    <el-table
      :data="productsList"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        label="圖片"
        width="50">
        <div slot-scope="scope">
          <el-image
            style="width: 100%"
            :src="scope.row.imageUrl[0]"
            :preview-src-list="scope.row.imageUrl">
          </el-image>
        </div>
      </el-table-column>
      <el-table-column
        label="名稱"
        prop="title"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        label="性別"
        prop="options.gender"
        width="80"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="類別"
        prop="category"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="地區"
        prop="options.area"
        align="center"
        sortable>
      </el-table-column>
      <el-table-column
        label="價格"
        prop="price"
        width="80"
        align="right"
        sortable>
      </el-table-column>
      <el-table-column label="是否啟用" align="center">
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
import ProductModal from '@/components/ProductModal'

export default {
  name: 'products',
  components: {
    productmodal: ProductModal
  },

  data () {
    return {
      dialogVisible: false,
      productsList: [],
      isNew: true,
      loading: false,
      category: [
        { name: '全部', value: 'all' },
        { name: '運動', value: 'exercise' },
        { name: '吃飯', value: 'eatout' },
        { name: '出遊', value: 'hangout' },
        { name: '玩桌遊', value: 'boardgame' },
        { name: '看電影', value: 'movie' },
        { name: '加購區', value: 'others' }
      ],
      data: {
        all: [],
        exercise: [],
        eatout: [],
        hangout: [],
        boardgame: [],
        movie: [],
        others: []
      }
    }
  },

  created () {
    this.getProducts()
  },

  methods: {
    // 取得產品資料
    getProducts (paged = 99999) {
      this.loading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/products?paged=${paged}`
      this.axios.get(api).then((response) => {
        // 建立好data包含全部資料和篩選過後的資料
        this.data.all = response.data.data
        this.data.all.forEach(item => {
          let category = item.category
          switch (category) {
            case '運動':
              category = 'exercise'
              break
            case '吃飯':
              category = 'eatout'
              break
            case '出遊':
              category = 'hangout'
              break
            case '玩桌遊':
              category = 'boardgame'
              break
            case '看電影':
              category = 'movie'
              break
            case '加購區':
              category = 'others'
              break
            default:
              break
          }
          this.data[category].push(item)
        })
        this.productsList = this.data.all
        this.loading = false
      }).catch((err) => {
        console.log('錯誤:', err)
      })
    },

    openModal (status, id) {
      switch (status) {
        case 'new':
          // 設一個ref方便父元素觸發子元素，這裡將productModal之前的tempProduct清除，以免一打開就是之前的資料
          this.$refs.productModal.tempProduct = {
            // 清空值時，至少要把非第一層的打出來才不會出錯
            options: {
              area: '',
              gender: ''
            },
            imageUrl: []
          }
          this.isNew = true
          this.dialogVisible = true
          break
        case 'edit':
          // 用ref觸發productModal的getProduct()，並將父層tempProduct裡該產品的id以參數傳過去
          this.$refs.productModal.getProduct(id)
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
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`
        this.axios.delete(url).then(() => {
          this.getProducts()
        })
      })
    }
  }
}
</script>

<style lang="scss">
  .productsTopBtn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    margin-left: 10px;
  }
  .category{
    color:#909399;
    margin-right: 10px;
    &:hover{
      cursor: pointer;
    }
  }
  .category_active{
    color:black;
    font-size: 20px;
    font-weight: bolder;
  }
  .categoryBtn{
    @media (max-width: 768px){
      display: none;
    }
  }
</style>
