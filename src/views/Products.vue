<template>
  <div class="frontendProductsPage">
    <h2 class="title"><mark class="mark">服務項目</mark></h2>
    <span class="smallTitle">OurServices</span>
    <div class="categoryBtn">
      <span>類別：</span>
      <span class="category">{{ categoryName }}</span>
    </div>
    <div class="head">
      <span>{{ `Showing ${count.from}-${count.to} of ${count.total} results` }}</span>
      <select v-model="sort" @change="sortProducts">
        <option v-for="item in sortList" :key="item.value" :value="item.value">{{ item.name }}</option>
      </select>
    </div>

    <div class="productBox">
      <div v-for="(item,index) in productsList" :key="item.id" class="product">
        <div v-if="(index+1) > (page-1)*9 && (index+1) <= page*9">
          <div class="imgCircle" @click="openModal(item.id)">
            <img src="@/assets/icon/cart.svg" alt="" class="cartIcon" @click.stop="addToCart(item.id)">
            <transition name="fade">
              <img :src="item.imageUrl[0]" alt="" class="productImg" v-if="imgShow">
            </transition>
          </div>
          <div class="productInformation">
            <img src="@/assets/icon/tools.svg" alt="" v-if="item.title === '客製化服務'">
            <img src="@/assets/icon/ticket.svg" alt="" v-if="item.title === '時數券(1hr)' || item.title === '情侶券'">
            <img src="@/assets/icon/male.svg" alt="" v-if="item.options.gender === '男'">
            <img src="@/assets/icon/female.svg" alt="" v-if="item.options.gender === '女'">
            <span style="margin-left:50px">{{ item.title }}</span>
            <span>{{ item.price }}
              <span style="font-size:16px;color:#a59a96;margin-left:3px">$</span>
            </span>
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
      @current-change="imgShow = false">
    </el-pagination>

    <productmodal
      :dialog-visible="dialogVisible"
      @close-modal="dialogVisible = false"
      ref="frontendProductModal"
      @open-modal="dialogVisible = true">
    </productmodal>
  </div>
</template>

<script>
import { apiProductsGet, apiCartAdd } from '@/api.js'
import FrontendProductModal from '@/components/FrontendProductModal'

export default {
  components: {
    productmodal: FrontendProductModal
  },

  data () {
    return {
      category: [
        { name: '全部', value: 'all' },
        { name: '運動', value: 'exercise' },
        { name: '吃飯', value: 'eatout' },
        { name: '出遊', value: 'hangout' },
        { name: '玩桌遊', value: 'boardgame' },
        { name: '看電影', value: 'movie' },
        { name: '加購區', value: 'others' }
      ],
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
      count: { from: 0, to: 0, total: 0 },
      sortList: [
        { name: '請選擇排序方式', value: '' },
        { name: '排序依據性別', value: 'gender' },
        { name: '排序依據地區', value: 'area' },
        { name: '排序依據價錢', value: 'price' }
      ],
      dialogVisible: false,
      imgShow: false
    }
  },

  created () {
    this.getProducts()
    // 讓圖片每次點選選單都能重新有動畫效果
    this.$bus.$on('reshowImg', () => { this.imgShow = false })
  },

  updated () {
    this.imgShow = true
    this.count.from = (this.page * 9) - 8
    this.count.total = this.productsList.length

    if (this.page !== this.totalPages) {
      this.count.to = this.page * 9
    } else this.count.to = this.productsList.length
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
    },
    categoryName () {
      const result = this.category.filter(item => {
        return this.$route.params.category === item.value
      })
      return result[0].name
    }
  },

  methods: {
    getProducts () {
      apiProductsGet().then((response) => {
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
      }).catch(() => {
      })
    },

    sortProducts () {
      this.imgShow = false
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
    },

    addToCart (id) {
      apiCartAdd({ product: id, quantity: 1 }).then((response) => {
        this.$bus.$emit('updateCartNum')
        this.$notify({
          title: '恭喜～',
          message: '商品已經加入購物車囉ヽ(●´∀`●)ﾉ',
          offset: 150
        })
      }).catch(() => {
        this.$notify({
          title: '咦～',
          message: '商品已經在購物車裡囉(｡◕∀◕｡)',
          offset: 150
        })
      })
    },

    openModal (id) {
      this.$refs.frontendProductModal.getProduct(id)
    }
  }
}
</script>
