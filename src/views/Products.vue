<template>
  <div class="frontendProducts" v-loading="loading">
    <h2 class="title"><mark class="mark">服務項目</mark></h2>
    <span class="smallTitle">OurServices</span>
    <div class="head">
      <span>Showing 1–9 of 48 results</span>
      <select v-model="sort" @change="sortProducts">
        <option v-for="item in sortList" :key="item.value" :value="item.value">{{item.name}}</option>
      </select>
    </div>

    <div class="productBox">
      <div v-for="(item,index) in productsList" :key="item.id" class="product">
        <div v-if="(index+1) > (page-1)*9 && (index+1) <= page*9">
          <div class="imgCircle">
            <img src="@/assets/icon/cart.svg" alt="" class="cartIcon">
            <img src="@/assets/icon/more.svg" alt="" class="informationIcon">
            <img :src="item.imageUrl[0]" alt="" class="productImg">
          </div>
          <div class="productInformation">
            <img src="@/assets/icon/tools.svg" alt="" v-if="item.title == '客製化服務'">
            <img src="@/assets/icon/ticket.svg" alt="" v-if="item.title == '時數券(1hr)' || item.title == '情侶券'">
            <img src="@/assets/icon/male.svg" alt="" v-if="item.options.gender == '男'">
            <img src="@/assets/icon/female.svg" alt="" v-if="item.options.gender == '女'">
            <span style="margin-left:50px">{{item.title}}</span>
            <span>{{item.price}}<span style="font-size:16px;color:#a59a96;margin-left:3px">$</span></span>
          </div>
        </div>
      </div>
    </div>

    <el-pagination
      background
      ref="pagination"
      layout="pager"
      :page-count="totalPages"
      :hide-on-single-page="true"
      >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categoryList: {
        all: [],
        exercise: [],
        eatout: [],
        hangout: [],
        boardgame: [],
        movie: [],
        others: []
      },
      sort: '',
      sortList: [
        { name: '請選擇排序方式', value: '' },
        { name: '排序依據性別', value: 'gender' },
        { name: '排序依據地區', value: 'area' },
        { name: '排序依據價錢', value: 'price' }
      ],
      loading: false
    }
  },

  created () {
    this.getProducts()
  },

  computed: {
    totalPages () {
      return Math.ceil(this.categoryList[this.$route.params.category].length / 9)
    },
    page () {
      return this.$refs.pagination.internalCurrentPage
    },
    productsList () {
      return this.categoryList[this.$route.params.category]
    }
  },

  methods: {
    getProducts (page = 1, paged = 99999) {
      this.loading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=${paged}`
      this.axios.get(api).then((response) => {
        this.categoryList.all = response.data.data
        this.categoryList.all.forEach((item) => {
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
          this.categoryList[category].push(item)
        })
        this.loading = false
      }).catch((err) => {
        console.log(err)
        this.loading = false
      })
    },

    sortProducts () {
      if (!this.sort) return
      const mapped = this.productsList.map((item, i) => {
        if (this.sort === 'price') {
          return { index: i, value: item.price }
        } else if (this.sort === 'area') {
          return { index: i, value: item.options.area }
        } else if (this.sort === 'gender') {
          return { index: i, value: item.options.gender }
        }
      })

      if (this.sort === 'price' || this.sort === 'gender') {
        mapped.sort((a, b) => {
          if (a.value > b.value) return 1
          if (a.value < b.value) return -1
          else return 0
        })
      } else if (this.sort === 'area') {
        mapped.sort((a, b) => {
          const order = ['基隆市', '臺北市', '新北市', '桃園市', '新竹縣市', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣市', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣']
          return order.indexOf(a.value) - order.indexOf(b.value)
        })
      }

      const result = mapped.map(item => {
        return this.productsList[item.index]
      })

      this.categoryList[this.$route.params.category] = result
    }
  }
}
</script>

<style lang="scss">
  .frontendProducts{
    padding: 100px 130px 80px 100px;
    position: relative;
    .smallTitle{
      color: #a59a96;
      position: absolute;
      top: 40px;
      right: 100px;
    }
    .head{
      color: #a59a96;
      display: flex;
      justify-content: space-between;
      margin-bottom: 120px;
      select{
        color: #a59a96;
        border-radius: 16px;
        padding: 5px;
        font-size: 18px;
        border: solid 1px #d6cbc7;
        outline: none;
      }
      option{
        border: 1px solid !important;
      }
    }
    .productBox{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .product{
        width: 27%;
        .imgCircle{
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background-color: #a59a96;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          &::after{
            content: "";
            width: 250px;
            height: 250px;
            border-radius: 50%;
            background-color: rgba(214, 203, 199, 0.2);
            position: absolute;
            top: 20px;
            left: 20px;
            z-index: -1;
          }
          .cartIcon{
            width: 24px;
            height: 24px;
            position: absolute;
            border-radius: 50%;
            padding: 3px;
            right: 10px;
            top: 97px;
            background-color: #e7e2e1;
          }
          .informationIcon{
            position: absolute;
            border-radius: 50%;
            right: 10px;
            top: 130px;
            background-color: #e7e2e1;
          }
          .productImg{
            width: 72%;
            height: 80%;
            border-radius: 40%;
          }
        }
        .productInformation{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 60px 0 110px 0;
          img{
            position: absolute;
          }
        }
      }
    }
    .el-pagination{
      margin-left: 38%;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active{
      background-color: #a59a96;
      border-radius: 50%;
    }
    .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li{
      color: #a59a96;
      background-color: white;
    }
  }
</style>
