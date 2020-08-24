<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app{
    border-right: 2px solid #F5F5F5;
    border-left: 2px solid #F5F5F5;
    width: 1440px;
    height: 100%;
    margin: 0 auto;
    font-family: "Noto Sans TC","Microsoft YaHei","Microsoft JhengHei",sans-serif;
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
