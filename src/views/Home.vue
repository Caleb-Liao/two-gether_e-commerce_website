<template>
  <div class="home">
    <div class="sidebar">
      <div class="logo"></div>
      <div class="menu">
        <el-badge :value="12" class="item">
          <router-link to="/cart" class="el-icon-shopping-cart-2"></router-link>
        </el-badge>
        <ul>
          <li><router-link to="/" exact>首頁</router-link></li>
          <li><router-link to="/about">關於我們</router-link></li>
          <li class="products">
            <router-link :to="`/products/all`">服務項目</router-link>
            <ul class="product">
              <li to="/products" v-for="category in categories" :key="category.name">
              <router-link :to="`/products/${category.value}`">-{{category.name}}</router-link></li>
            </ul>
          </li>
          <li><router-link to="/order">我的訂單</router-link></li>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        { name: '運動', value: 'exercise' },
        { name: '吃飯', value: 'eatout' },
        { name: '出遊', value: 'hangout' },
        { name: '看電影', value: 'movie' },
        { name: '玩桌遊', value: 'boardgame' },
        { name: '加購區', value: 'others' }
      ]
    }
  }
}
</script>

<style lang="scss">
  $main-color:#ffd571;

  *{
    box-sizing: border-box;
  }
  body{
    height: 100vh;
  }
  .home{
    display: flex;
  }
  .router-link-active{
    text-shadow: $main-color 1px 3px 1px
  }

  .sidebar{
    width: 250px;
    height: 100%;
    padding: 30px;
    position: fixed;
    border-right: 1px solid #F5F5F5;
    .logo{
      height: 25%;
    }

    .menu{
      height: 63%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      a{
        color: #606266;
        text-decoration: none;
        font-size: 18px;
        font-weight: 600;
      }
      ul{
        width: 100%;
        &:hover{
          cursor: pointer;
        }
      }
      ul>li{
        padding-top: 10px;
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
        font-weight: 600;
        display: none;
        position: absolute;
        width: 100px;
        left: 100px;
        top: -30px;
        li:hover{
          text-shadow: $main-color 1px 3px 1px
        }
      }
    }

    .information{
      font-size: 12px;
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
    margin-left: 250px;
  }
</style>
