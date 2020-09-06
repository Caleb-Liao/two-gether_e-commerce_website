<template>
  <div class="indexPage">
    <div v-for="(item,index) in images" :key="item.image">
      <div class="backgroundImg"><img :src="item.image" alt="" v-if="index === activeImg"></div>
    </div>
    <div class="content">
      <h2>最新消息</h2>
      <ul>
        <li>
          <h3>[臨時公告]<small>2020/09/02</small></h3>
          <p>9/5~9/7，TwoGether員工旅遊三天兩夜，屆時線上客服將暫時關閉，其餘功能依舊正常運作，造成不便請多包涵！</p>
        </li>
        <li>
          <h3>[專屬優惠]<small>2020/07/30</small></h3>
          <p>炎炎夏日，TwoGether陪你一起Fun暑假！即刻起輸入優惠碼「summer9453」立即享優惠６６折，心動不如馬上行動！活動至9/30</p>
        </li>
        <li>
          <h3>[臨時公告]<small>2020/07/14</small></h3>
          <p>開幕第三天感謝大家的蒞臨，由於反應過於熱烈，TwoGether凍未條辣～網站將於今日凌晨24點戰時關閉維護，於隔日早上8點再次開放，造成不便請多包涵！</p>
        </li>
        <li>
          <h3>[專屬優惠]<small>2020/07/12</small></h3>
          <p>Two-Gether慶開幕！結帳時輸入優惠碼「luv-2-gether」立即享９折優惠！！！活動至12/31</p>
        </li>
        <li>
          <h3>[活動公告]<small>2020/06/28</small></h3>
          <p>Two-gether試營運三日，期間歡迎志同道合的小哥哥、小姊姊們加入我們，詳情可以透過email或線上客服聯絡我們，我們非常歡迎您的加入～</p>
        </li>
      </ul>
    </div>
    <div class="block">
      <el-carousel :interval=2500 autoplay height="65vh" ref="carousel" @change="getIndex($refs.carousel.activeIndex)">
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
      }, 0)
    }
  }
}
</script>
