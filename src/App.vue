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
    margin: 0 auto;
    font-family: "Microsoft YaHei","Microsoft JhengHei",sans-serif;
  }
  .el-loading-spinner{
      position: fixed;
      width: 60%;
  }
</style>
