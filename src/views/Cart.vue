<template>
  <div class="cart">
      <el-steps :active="active" finish-status="success">
        <el-step title="我的購物車" v-show="active == 0">
          <template slot="description">
            <el-table
              :data="tableData">
              <el-table-column
                prop="date"
                label="品名"
                width="500"
                align="center">
              </el-table-column>
              <el-table-column
                prop="name"
                label="類別"
                width="180"
                align="center">
              </el-table-column>
              <el-table-column
                prop="address"
                label="小計"
                align="center">
              </el-table-column>
              <el-table-column>
              </el-table-column>
            </el-table>
            <el-button @click="active++">前往結帳</el-button>
          </template>
        </el-step>

        <el-step title="請填寫資料" v-show="active == 1">
          <template slot="description">
            <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" style="margin:5% 0 0 20%">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="請填寫當日活動者" class="input"></el-input>
              </el-form-item>
              <el-form-item label="電話" prop="tel">
                <el-input v-model="form.tel" placeholder="0912-345-678" class="input"></el-input>
              </el-form-item>
              <el-form-item label="Email" prop="email">
                <el-input v-model="form.email" placeholder="abc123999@gmail.com" class="input"></el-input>
              </el-form-item>
              <el-form-item label="付款方式" prop="payment">
                <el-select v-model="form.payment" placeholder="請選擇付款方式">
                  <el-option v-for="item in payment" :key="item" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="備註(非必填)">
                <el-input v-model="form.message" type="textarea" placeholder="小提示：可以在我們聯絡您之前，先簡單告訴我們您的需求唷！ " class="input"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="submitForm('ruleForm')" style="margin:10px 0 0 20px">下一步</el-button>
                <el-button @click="active--" style="margin-top:10px">返回</el-button>
              </el-form-item>
            </el-form>
          </template>
        </el-step>

        <el-step title="完成訂單" v-show="active == 2">
          <template slot="description">
            <h2>恭喜您已完成訂單，您的訂單編號為：</h2>
            <p>我們會在活動當天前<span>七天</span>聯絡您討論當天內容，若是有需要的話也可以直接連絡我們唷！</p>
            <p>您可以在<span>我的訂單</span>中查詢您的訂單，若是要修改或刪除訂單請直接連絡我們。</p>
            <ul>
              <p>以下有幾點注意事項要提醒您：</p>
              <li>我們不會向邊友透漏您的個資</li>
              <li>在指定日期當天的72小時以前，若因故要取消合約，能無條件完全退費</li>
              <li>如果當天有不滿意邊友之處，在活動結束後72小時內提出合理原因，可予以退費50%</li>
            </ul>
          </template>
        </el-step>
      </el-steps>
    </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [],
      active: 0,
      payment: ['WebATM', 'ATM', 'CVS', 'Barcode', 'Credit', 'ApplePay', 'GooglePay'],
      form: {
        name: '',
        email: '',
        tel: '',
        payment: '',
        message: ''
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
      }
    }
  },

  created () {
    this.getCart()
  },

  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.axios.get(api).then((response) => {
        this.cart = response.data.data
      }).catch((err) => {
        console.log(err)
      })
    },

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.active++
        } else {
          console.log('error submit!!')
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .cart{
    margin: 30px;
    .el-step{
      flex-basis: 100% !important;
    }
    .el-step__description{
      padding-right: 0;
    }
    .input{
      width: 50%;
    }
  }
</style>
