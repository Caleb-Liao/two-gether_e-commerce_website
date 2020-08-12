<template>
  <div class="frontendProducts" v-loading="loading">
    <div v-for="(item,index) in categoryList[this.$route.params.category]" :key="item.id">
      <p v-if="(index+1) > ($refs.pagination.internalCurrentPage-1)*9 && (index+1) <= ($refs.pagination.internalCurrentPage)*9">
        {{item.title}}{{index}}</p>
    </div>
    <el-pagination
      background
      ref="pagination"
      layout="prev, pager, next"
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
      loading: false
    }
  },

  created () {
    this.getProducts()
  },

  computed: {
    totalPages () {
      return Math.ceil(this.categoryList[this.$route.params.category].length / 9)
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
    }
  }
}
</script>
