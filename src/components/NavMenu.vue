<template>
  <div class="navmenu">
    <el-col>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <div>
          <el-menu-item index="/admin">
            <i class="el-icon-location"></i>
            <span slot="title">
              首頁
            </span>
          </el-menu-item>

          <el-menu-item index="/admin/products">
            <i class="el-icon-folder"></i>
            <span slot="title">
              產品列表
            </span>
          </el-menu-item>

          <el-menu-item index="/admin/coupons">
            <i class="el-icon-star-on"></i>
            <span slot="title">
              優惠券
            </span>
          </el-menu-item>

          <el-menu-item index="/admin/orders">
            <i class="el-icon-document"></i>
            <span slot="title">
              訂單列表
            </span>
          </el-menu-item>

          <el-menu-item index="/admin/test">
            <i class="el-icon-setting"></i>
            <span slot="title">
              模擬下單系統
            </span>
          </el-menu-item>
        </div>
        <div>
          <el-menu-item @click="signout">
            <i class="el-icon-switch-button"></i>
            <span slot="title">
              登出
            </span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'navmenu',
  data () {
    return {
      isCollapse: false
    }
  },
  created () {
    window.addEventListener('resize', this.detectWindowWidth)
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    signout () {
      this.$emit('signout')
    },
    detectWindowWidth () {
      if (window.innerWidth < 1200) {
        this.isCollapse = true
      } else {
        this.isCollapse = false
      }
    }
  }
}
</script>

<style lang="scss">
  .navmenu{
    height: 100%;
    .el-col{
      height: 100%
    }
    .el-menu-vertical-demo{
      height: 100%;
      border-right: solid 0px #e6e6e6;
      display:flex;
      flex-direction:column;
      justify-content:space-between
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 180px;
      min-height: 400px
    }
  }
</style>
