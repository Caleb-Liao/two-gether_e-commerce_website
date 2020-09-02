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
import NavMenu from '@/components/NavMenu'

export default {
  components: {
    navmenu: NavMenu
  },

  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },

  created () {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`
    const api = `${process.env.VUE_APP_APIPATH}/api/auth/check`
    this.axios.post(api, { api_token: this.token }).then((response) => {
      if (response.data.success) {
        this.checkSuccess = true
      }
    }).catch((res) => {
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
