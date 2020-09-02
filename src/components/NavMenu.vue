<template>
  <div class="navmenu">
    <el-col>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        :collapse="collapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <div>
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
import lodash from 'lodash'

export default {
  name: 'navmenu',
  data () {
    return {
      collapse: false,
      windowWidth: window.innerWidth
    }
  },

  mounted () {
    window.onresize = lodash.debounce(() => {
      this.collapseOpen()
    }, 500)
  },

  methods: {
    signout () {
      this.$emit('signout')
    },
    collapseOpen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 1200) {
        this.collapse = true
      } else {
        this.collapse = false
      }
    }
  }
}
</script>
