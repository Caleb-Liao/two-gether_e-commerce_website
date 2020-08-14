<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app{
    font-family: "Microsoft YaHei","Microsoft JhengHei",sans-serif;
  }
  html,body {
    height: 100%;
  }
  .el-loading-spinner{
      position: fixed;
      width: 75%;
  }
</style>
