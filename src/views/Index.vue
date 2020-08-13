<template>
  <div class="index">
    <div class="block">
      <el-carousel autoplay height="100vh">
        <el-carousel-item v-for="item in images" :key="item.image">
          <img :src="item.image" alt="">
          <router-link :to="`${item.path}`" class="indexBtn">{{item.word}}<i class="el-icon-right"></i></router-link>
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
      ]
    }
  }
}
</script>

<style lang="scss">
  .img{
    width: 100%;
    height: 100vh;
    img{
      width: 100%;
      position: relative;
    }
  }
  .indexBtn{
    width: 200px;
    height: 50px;
    background: #303133;
    color: white;
    text-decoration: none;
    font-weight: 600;
    position: absolute;
    line-height: 50px;
    text-align: center;
    bottom: 30px;
    left: 80px;
    i{
      color: white;
      position: absolute;
      font-size: 20px;
      right: 15px;
      top: 16px;
      font-weight: 600;
    }
  }
</style>
