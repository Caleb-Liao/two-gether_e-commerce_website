<template>
  <el-dialog
    title="新增產品"
    :visible.sync="dialogVisible"
    top="0"
    :before-close="cancel">
    <el-form label-width="80px">
      <el-form-item label="產品名稱">
        <el-input v-model="tempProduct.title"></el-input>
      </el-form-item>
      <el-form-item label="產品類別">
        <el-select placeholder="請選擇類別" v-model="tempProduct.category" style="width:100%">
          <el-option v-for="item in category" :label="item.interest" :value="item.interest" :key="item.interest"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性別">
        <el-radio-group v-model="tempProduct.options.gender">
          <el-radio v-for="item in gender" :label="item.gender" :key="item.gender"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地區">
        <el-select placeholder="請選擇地區" v-model="tempProduct.options.area" style="width:100%">
          <el-option v-for="item in area" :label="item.city" :value="item.city" :key="item.city"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="售價">
        <el-input v-model.number="tempProduct.price"></el-input>
      </el-form-item>
      <el-form-item label="產品內容">
        <el-input v-model="tempProduct.content" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="產品描述">
        <el-input v-model="tempProduct.description" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="上傳圖片">
        <el-image
          style="width: 50%; height: 250px"
          :src="tempProduct.imageUrl[0]"
          :preview-src-list="tempProduct.imageUrl">
        </el-image>
        <el-input v-model="tempProduct.imageUrl[0]" placeholder="請輸入圖片網址"></el-input>
      </el-form-item>
      <el-form-item label="是否啟用">
        <el-switch
          v-model="tempProduct.enabled"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item class="productModalBtn">
        <el-button type="primary" @click="updateProduct">儲存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { apiDashboardProductDetail, apiDashboardProductsAdd, apiDashboardProductsUpdate } from '@/apiAdmin.js'
export default {
  data () {
    return {
      tempProduct: {
        // 非第一層的一定要打出來才不會出錯，其他會綁定到的資料可以打出來方便識別
        title: '',
        category: '',
        content: '',
        description: '',
        price: '',
        options: {
          area: '',
          gender: ''
        },
        enabled: true,
        imageUrl: []
      },
      category: [
        { interest: '運動' },
        { interest: '吃飯' },
        { interest: '出遊' },
        { interest: '玩桌遊' },
        { interest: '看電影' },
        { interest: '加購區' }
      ],
      gender: [
        { gender: '男' },
        { gender: '女' }
      ],
      area: [
        { city: '基隆市' },
        { city: '臺北市' },
        { city: '新北市' },
        { city: '桃園市' },
        { city: '新竹縣市' },
        { city: '苗栗縣' },
        { city: '臺中市' },
        { city: '彰化縣' },
        { city: '南投縣' },
        { city: '雲林縣' },
        { city: '嘉義縣市' },
        { city: '臺南市' },
        { city: '高雄市' },
        { city: '屏東縣' },
        { city: '宜蘭縣' },
        { city: '花蓮縣' },
        { city: '臺東縣' }
      ]
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

    getProduct (id) {
      apiDashboardProductDetail(id).then((res) => {
        this.tempProduct = res.data.data
        this.$emit('open-modal')
      })
    },

    updateProduct () {
      if (this.isNew) {
        apiDashboardProductsAdd(this.tempProduct).then(() => {
          this.cancel()
          this.$emit('update')
        })
      } else if (!this.isNew) {
        apiDashboardProductsUpdate(this.tempProduct).then(() => {
          this.cancel()
          this.$emit('update')
        })
      }
    }
  }
}
</script>
