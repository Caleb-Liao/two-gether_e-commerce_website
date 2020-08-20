<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  html,body {
    height: 100%;
  }
  #app{
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    font-family: "Microsoft YaHei","Microsoft JhengHei",sans-serif;
    @media(max-width: 768px){
      width: 100%;
    }
  }
  .el-loading-spinner{
      position: fixed;
      width: 60%;
      @media(max-width: 768px){
        width: 100%;
      }
  }
</style>
