<template>
  <div class="home">
    <div class="sidebar">
      <div class="logo">
        <div style="display:flex">
          <div style="width:88px;height:88px;background-color:#d8d8d8"></div>
          <h1 style="font-size:48px;margin-left:15px;margin-bottom:30px;color:#4b403c">Two - <br>Gether</h1>
        </div>
        <el-badge :value="cartNum" style="float:right;">
          <router-link to="/cart" class="cartBtn">我的購物車
            <img src="@/assets/icon/cart.svg" alt="">
            <img src="@/assets/icon/cartWhite.svg" alt="">
          </router-link>
        </el-badge>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/" exact>首頁</router-link>
            <h5>Home Page</h5>
          </li>
          <li>
            <router-link to="/about">關於我們</router-link>
            <h5>About Us</h5>
          </li>
          <li class="products">
            <router-link :to="`/products/all`">服務項目</router-link>
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
      <div class="information">
        <ul class="icon">
          <li><a href=""><i class="fab fa-github fa-lg"></i></a></li>
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
      cartNum: 0
    }
  },

  updated () {
    this.getCartNum()
  },

  methods: {
    getCartNum (paged = 9999) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping?paged=${paged}`
      this.axios.get(api).then((response) => {
        this.cartNum = response.data.data.length
      }).catch((err) => {
        console.log(err)
      })
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
    border: 1px solid #F5F5F5;
    font-size: 18px;
    display: flex;
    .router-link-active{
        color: #a59a96;
        background: linear-gradient(transparent 40%,rgba(255,255,255,0) 40%, #ffd571 90%,transparent 95%);
        padding: 2px 1px;
    }
  }

  .sidebar{
    width: 300px;
    height: 100%;
    position: fixed;
    border-right: 1px solid #F5F5F5;
    .logo{
      height: 25%;
      padding: 30px 30px 30px 30px;
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

    .menu{
      height: 63%;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      a{
        color: #606266;
        text-decoration: none;
      }
      h5{
        font-size: 14px;
        color:#606266;
        opacity: 0.5;
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
      }
      .el-badge{
        a{
          font-size:22px;
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
    width: 100%;
    margin-left: 300px;
    position: relative;
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
