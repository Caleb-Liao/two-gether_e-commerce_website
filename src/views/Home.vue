<template>
  <div class="home">
      <div class="sidebar">
        <div class="sidebarBtn" @click="sidebarOpen = !sidebarOpen">
          <img v-if="sidebarOpen" src="@/assets/icon/sidebarOpen.svg" alt="">
          <img v-if="!sidebarOpen" src="@/assets/icon/sidebarClose.svg" alt="">
        </div>
        <div class="logo">
          <router-link to="/" exact>
            <div style="display:flex">
              <div class="logoPC"><img src="@/assets/logo.png" alt=""></div>
              <div class="logoMobile"><img src="@/assets/logoMobile.png" alt=""></div>
              <h1>Two - <br>Gether</h1>
            </div>
          </router-link>
          <el-badge :value="cartNum" class="cartPC" :hidden="cartNum == 0">
            <router-link to="/cart" class="cartBtn">我的購物車
              <img src="@/assets/icon/cart.svg" alt="">
              <img src="@/assets/icon/cartWhite.svg" alt="">
            </router-link>
          </el-badge>
          <div class="cartMobile">
            <router-link to="/cart">
              <img src="@/assets/icon/cart2.svg" alt="">
            </router-link>
          </div>
        </div>

        <transition name="fade">
          <div class="menu" v-show="sidebarOpen">
            <ul>
              <li @click="closeMobileMenu">
                <router-link to="/" exact>
                  <h4>首頁</h4>
                  <h5>Home Page</h5>
                </router-link>
              </li>
              <li @click="closeMobileMenu">
                <router-link to="/about">
                  <h4>關於我們</h4>
                  <h5>About Us</h5>
                </router-link>
              </li>
              <li class="products" @click="$bus.$emit('reshowImg')">
                <router-link to="/products/all">
                  <h4>服務項目</h4>
                  <h5>Our Service</h5>
                </router-link>
                <ul class="product">
                  <li to="/products" v-for="category in categories" :key="category.name" @click="closeMobileMenu">
                  <router-link :to="`/products/${category.value}`">/ {{ category.name }}</router-link></li>
                </ul>
              </li>
              <li @click="closeMobileMenu">
                <router-link to="/order">
                  <h4>我的訂單</h4>
                  <h5>My Order</h5>
                </router-link>
              </li>
              <li @click="drawer = true">
                <h4>線上客服</h4>
                <h5>Customer Service</h5>
              </li>
            </ul>
          </div>
        </transition>

        <div class="information">
          <ul class="icon">
            <li><a href="https://github.com/Caleb-Liao/two-gether_e-commerce_website"><i class="fab fa-github fa-lg"></i></a></li>
            <li><a href=""><i class="fab fa-facebook fa-lg"></i></a></li>
            <li><a href=""><i class="fab fa-instagram fa-lg"></i></a></li>
          </ul>
          <ul>
            <li><a href="tel:0234567890"><i class="fas fa-phone-alt"></i> 02-34567890</a></li>
            <li><a href="mailto:two_gether222@gmail.com"><i class="far fa-envelope"></i> two_gether222@gmail.com</a></li>
          </ul>
          <p>&copy; 2020 TwoGether公司 版權所有</p>
        </div>
      </div>
    <div class="container">
      <router-view/>
    </div>
    <chatmodal :drawer="drawer" @close-modal="drawer=false;"></chatmodal>
  </div>
</template>

<script>
import { apiCartGet } from '@/api.js'
import ChatModal from '@/components/ChatModal'
import lodash from 'lodash'

export default {
  components: {
    chatmodal: ChatModal
  },

  data () {
    return {
      drawer: false,
      categories: [
        { name: '運動', value: 'exercise' },
        { name: '吃飯', value: 'eatout' },
        { name: '出遊', value: 'hangout' },
        { name: '看電影', value: 'movie' },
        { name: '玩桌遊', value: 'boardgame' },
        { name: '加購區', value: 'others' }
      ],
      cartNum: 0,
      sidebarOpen: true,
      windowWidth: window.innerWidth
    }
  },

  created () {
    this.getCartNum()
    this.$bus.$on('updateCartNum', () => this.getCartNum())
    this.menuOpenByWidth()
    window.onresize = lodash.debounce(() => {
      this.menuOpenByWidth()
    }, 500)
  },

  methods: {
    getCartNum () {
      apiCartGet().then((response) => {
        this.cartNum = response.data.data.length
      })
    },

    menuOpenByWidth () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 768) {
        this.sidebarOpen = false
      } else {
        this.sidebarOpen = true
      }
    },

    closeMobileMenu () {
      if (this.windowWidth <= 768) {
        this.sidebarOpen = false
      }
    }
  }
}
</script>
