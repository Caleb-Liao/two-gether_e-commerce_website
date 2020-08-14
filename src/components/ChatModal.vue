<template>
  <el-drawer
    title="智慧線上客服笨笨^_^"
    :visible.sync="drawer"
    :before-close="closeModal"
    size="25%">
    <div>
      <p><span>笨笨：</span><br>請問有什麼我可以幫助您的地方嗎？&#128516;</p>
      <div v-for="(item,index) in msgBox" :key="item+index">
        <p><span>我：</span><br>{{item.customerMsg}}</p>
        <p v-html="item.computerMsg"></p>
      </div>
    </div>
    <el-input v-model="tempMsg" type="textarea" class="messengeBox" @keyup.enter.native.exact="sendMsg"></el-input>
  </el-drawer>
</template>

<script>
export default {
  data () {
    return {
      tempMsg: '',
      msgBox: []
    }
  },

  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },

  updated () {
    // 讓聊天室scroll置底的方法
    const ele = document.querySelector('.el-drawer__body')
    ele.scrollTop = ele.scrollHeight
  },

  methods: {
    sendMsg () {
      this.msgBox.push({ customerMsg: this.tempMsg })
      this.tempMsg = ''
      setTimeout(() => {
        this.$set(this.msgBox[this.msgBox.length - 1], 'computerMsg', '...輸入訊息中')
      }, 500)
      setTimeout(() => {
        this.$set(this.msgBox[this.msgBox.length - 1], 'computerMsg', '<span>笨笨：</span><br>不好意思笨笨在睡覺了&#128564;<br>再麻煩您撥打電話或寄信給我們喔～')
      }, 2000)
    },

    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss">
  .el-drawer{
    outline-color: white;
    header > span:focus {
      outline-color: white;
    }
  }

  .el-drawer__body{
    padding: 0 20px;
    margin-bottom: 100px;
    box-sizing: border-box;
    overflow-y: auto;
    p{
      line-height: 1.3em;
      margin-bottom:20px;
      word-break:break-all;
      word-wrap:break-word;
      white-space: pre-wrap
    }

    span{
      font-size: 14px;
      color: #3282b8;
      font-weight: 600;
    }

    .messengeBox{
      position: absolute;
      bottom: 20px;
      left: 25px;
      width: 85%;
    }
  }
</style>
