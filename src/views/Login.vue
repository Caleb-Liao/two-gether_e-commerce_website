<template>
  <div class="login">
    <el-row type="flex" justify="center">
      <el-col align="center">
        <h1>請先登入</h1>
          <el-form label-width="70px" @submit.native.prevent="signin">
              <el-form-item label="帳號" for="account">
                <el-input id="account" type="email" v-model="user.email" placeholder="請輸入電子信箱"></el-input>
              </el-form-item>
              <el-form-item label="密碼" for="password">
                <el-input id="password" type="password" v-model="user.password" placeholder="請輸入密碼"></el-input>
              </el-form-item>
              <el-button type="info" native-type="submit">登入</el-button>
              <p v-if="error == true ">帳號或密碼輸入錯誤</p>
          </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}/api/auth/login`
      this.axios.post(api, this.user).then((response) => {
        const token = response.data.token
        const expired = response.data.expired
        document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
        this.$router.push('admin/')
      }).catch((error) => {
        console.log(error)
        this.user.password = ''
        this.error = true
      })
    }
  }
}
</script>

<style lang="scss">
  .login{
    .el-col{
      margin-top: 30vh;
      width: 350px;
      p{
        color: #c02c38;
        margin-top: 16px;
      }
      @media(max-width: 576px){
        width: 90%;
      }
    }
    h1{
      margin-bottom: 25px;
    }
    .el-form-item__content{
      margin-right: 50px;
    }
  }
</style>
