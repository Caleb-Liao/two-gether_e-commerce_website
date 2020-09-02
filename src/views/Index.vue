<template>
  <div class="indexPage">
    <div v-for="(item,index) in images" :key="item.image">
      <div class="backgroundImg"><img :src="item.image" alt="" v-if="index === activeImg"></div>
    </div>
    <div class="block">
      <el-carousel :interval=2000 autoplay height="60vh" ref="carousel" @change="getIndex($refs.carousel.activeIndex)">
        <el-carousel-item v-for="item in images" :key="item.image">
          <router-link :to="`${item.path}`"><img :src="item.image" alt=""></router-link>
          <router-link :to="`${item.path}`" class="indexBtn">{{ item.word }}</router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        { image: 'https://images.unsplash.com/photo-1530541381035-22bb64900301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', word: '脫離邊緣人', path: '/products/all' },
        { image: 'https://images.unsplash.com/photo-1520512533001-af75c194690b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', word: '加入我們', path: '/about/' },
        { image: 'https://images.unsplash.com/photo-1490379936993-c343b8780fbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', word: '一日情人', path: '/products/others' }
      ],
      activeImg: 0
    }
  },

  methods: {
    getIndex (num) {
      // 背景出現的時間同步一點
      setTimeout(() => {
        this.activeImg = num
      }, 300)
    }
  }
}
</script>
