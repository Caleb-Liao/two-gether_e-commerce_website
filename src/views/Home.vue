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
          <el-badge :value="cartNum" class="cartPC">
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
            <ul @click="closeMenu">
              <li>
                <router-link to="/" exact>首頁</router-link>
                <h5>Home Page</h5>
              </li>
              <li>
                <router-link to="/about">關於我們</router-link>
                <h5>About Us</h5>
              </li>
              <li class="products" @click="$bus.$emit('reshowImg')">
                <router-link to="/products/all">服務項目</router-link>
                <h5>Our Service</h5>
                <ul class="product">
                  <li to="/products" v-for="category in categories" :key="category.name">
                  <router-link :to="`/products/${category.value}`">/ {{category.name}}</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/order">我的訂單</router-link>
                <h5>My Order</h5>
              </li>
              <li>
                <a href="#" @click="drawer = true">線上客服</a>
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
    this.menuOpen()
    window.onresize = lodash.debounce(() => {
      this.menuOpen()
    }, 500)
  },

  methods: {
    getCartNum (paged = 9999) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping?paged=${paged}`
      this.axios.get(api).then((response) => {
        this.cartNum = response.data.data.length
      }).catch((err) => {
        console.log(err)
      })
    },

    menuOpen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 768) {
        this.sidebarOpen = false
      } else {
        this.sidebarOpen = true
      }
    },

    closeMenu () {
      if (this.windowWidth <= 768) {
        this.sidebarOpen = false
      }
    }
  }
}
</script>

<style lang="scss">
  $main-color:#ffd571;

  *{
    box-sizing: border-box;
  }
  .home{
    font-size: 18px;
    display: flex;
  }
  .sidebarBtn{
    display: none;
    position: absolute;
    width: 50px;
    height: 80px;
    top: 30px;
    left: 39px;
    cursor: pointer;
    @media(max-width: 768px){
      display: block;
    }
  }

  .sidebar{
    .fade-enter-active, .fade-leave-active {
      transition: all 1s;
    }
    .fade-enter, .fade-leave-to{
      transform: translateY(-50px);
      opacity: 0;
    }
    width: 300px;
    height: 100vh;
    position: sticky;
    top: 0;
    border-right: 2px solid #F5F5F5;
    background-color: white;
    @media (max-width: 768px) {
      z-index: 1;
      width: 100%;
      height: 80px;
      position: fixed;
    }
    .logo{
      height: 25%;
      padding: 30px;
      @media(max-width: 768px){
        display: flex;
        justify-content: center;
        padding: 15px 0 0 0;
        height: 80px;
        box-shadow: 10px 0 20px 0 #a59a96;
      }
      a{
        text-decoration: none;
      }
      h1{
        font-family: 'Prata', serif;
        font-size: 48px;
        margin: 0 0 30px 15px;
        color: #4b403c;
        @media (max-width:768px) {
          font-size:28px;
          margin-bottom: 0;
        }
      }
      .cartPC{
        float: right;
        @media (max-width: 768px) {
          display: none;
        }
        .cartBtn{
          font-size: 16px;
          color: #a59a96;
          text-decoration: none;
          border-radius: 16px;
          border: solid 1px #d6cbc7;
          padding: 5px 10px;
          img{
            transform: translateY(2px);
          }
          img:nth-of-type(1){
            display: inline;
          }
          img:nth-of-type(2){
            display: none;
          }
        }
        .router-link-active{
          color: white;
          background: #d6cbc7;
          border-radius: 16px;
          img:nth-of-type(1){
            display: none;
          }
          img:nth-of-type(2){
            display: inline;
          }
        }
      }
      .cartMobile{
        display: none;
        @media (max-width:768px) {
          position: fixed;
          right: 0;
          bottom: 5%;
          width: 35px;
          height: 32px;
          border-radius: 16px 0 0 16px;
          box-shadow: 0 0 20px 0 #a59a96;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 3;
        }
      }
    }

    .logoPC{
      @media (max-width: 768px){
        display: none;
      }
    }

    .logoMobile{
      @media (min-width: 768px){
        display: none;
      }
    }

    .menu{
      .router-link-active{
        color: #a59a96;
        background: linear-gradient(transparent 40%,rgba(255,255,255,0) 40%, #ffd571 90%,transparent 95%);
        padding: 2px 1px;
      }
      height: 63%;
      padding: 30px;
      flex-direction: column;
      align-items: flex-start;
      @media (max-width: 768px) {
        background-color: white;
        height: auto;
        box-shadow: 0 20px 20px -20px #a59a96;
      }
      a{
        color: #606266;
        text-decoration: none;
        @media (max-width: 768px) {
          margin-left: 5%;
        }
      }
      h5{
        font-family: 'Prata', serif;
        font-size: 14px;
        color:#606266;
        opacity: 0.5;
        margin: 5px 0 0 5px;
        @media (max-width: 768px) {
          margin-left: 10px;
        }
      }
      ul{
        width: 100%;
        &:hover{
          cursor: pointer;
        }
      }
      ul>li{
        padding-top: 20px;
        width: 100px;
        &:hover{
          transform: translateX(2px);
        }
        @media (max-width:768px) {
          width:100%;
          border-bottom:1px solid rgba(223,229,218,0.5);
          padding: 10px 0;
          h5{
            display: inline;
          }
        }
      }
      .products{
        position: relative;
        &:hover>.product{
          display: block;
        }
      }
      .product{
        display: none;
        position: absolute;
        width: 90px;
        height: 180px;
        left: 100px;
        top: -55px;
        box-shadow: 0 0 10px 0 rgba(165, 154, 150, 0.5);
        padding: 5px 15px;
        &::after{
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -30px;
          border-width: 15px;
          border-style: solid;
          border-color: transparent white transparent transparent;
        }
        &::before{
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: -32px;
          border-width: 15px;
          border-style: solid;
          border-color: transparent rgba(165, 154, 150, 0.2) transparent transparent;
        }
        li{
          padding: 0;
          font-size: 14px;
          line-height: 2em;
          color: #808185;
          opacity: 0.8;
        }
        li:hover{
          text-shadow: $main-color 1px 3px 1px
        }
      }
    }

    .information{
      font-size: 12px;
      padding-left: 30px;
      color: #606266;
      @media(max-width: 768px){
        display: none;
      }
      a{
        color: #606266;
        text-decoration: none;
      }
      li{
        margin: 0 5px 10px 0;
      }
      .icon{
        display: flex;
      }
    }
  }

  .container{
    height: 100%;
    width: 100%;
    position: relative;
    background-color: white;
    @media(max-width:768px){
      margin-left: 0;
      margin-top: 80px;
    }
    .title{
      position: absolute;
      top: 40px;
      left: 50px;
      .mark{
        color: #a59a96;
        background: linear-gradient(transparent 40%,rgba(255,255,255,0) 40%, #ffd571 90%,transparent 95%);
        padding: 2px 1px;
      }
    }
  }
</style>
