<template>
  <div class="dashboard">
    <el-container>
      <el-container>
        <el-aside>
          <navmenu @signout="signout"></navmenu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { apiLoginCheck } from '@/apiAdmin.js'
import NavMenu from '@/components/NavMenu'

export default {
  components: {
    navmenu: NavMenu
  },

  data () {
    return {
      checkSuccess: false
    }
  },

  created () {
    apiLoginCheck().then((response) => {
      if (response.data.success) {
        this.checkSuccess = true
      }
    }).catch(() => {
      this.$router.push('/login')
    })
  },

  methods: {
    signout () {
      document.cookie = 'token=;expires=;path=/'
      this.$router.push('/login')
    }
  }
}
</script>
