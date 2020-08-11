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
            <router-link to="/products">服務項目</router-link>
            <ul class="product">
              <li>- 運動</li>
              <li>- 吃飯</li>
              <li>- 出遊</li>
              <li>- 看電影</li>
              <li>- 玩桌遊</li>
              <li>- 加購區</li>
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

<style lang="scss">
  $main-color:#ffd571;

  *{
    box-sizing: border-box;
    color: #606266;
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
