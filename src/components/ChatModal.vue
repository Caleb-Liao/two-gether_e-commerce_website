<template>
  <el-drawer
    title="智慧線上客服笨笨^_^"
    :visible.sync="drawer"
    :before-close="closeModal"
    :size="size">
    <div>
      <p>
        <span>笨笨：</span>
        <p>Two-Gether慶開幕！結帳時輸入優惠碼「luv-2-gether」立即享９折優惠！！
        <br>您好請問有什麼我可以幫助您的地方嗎？&#128516;
      </p>
      <div v-for="(item,index) in msgBox" :key="item+index">
        <p><span>我：</span><br>{{item.customerMsg}}</p>
        <p v-html="item.computerMsg"></p>
      </div>
    </div>
    <el-input v-model="tempMsg" type="textarea" class="messengeBox" @keyup.enter.native.exact="sendMsg" v-if="keyboardBtn == false"></el-input>
    <div class="keyboard" @click="keyboardBtn = false" v-if="keyboardBtn == true"><img src="@/assets/icon/keyboard.svg" alt=""></div>
  </el-drawer>
</template>

<script>
export default {
  data () {
    return {
      tempMsg: '',
      msgBox: [],
      keyboardBtn: true,
      size: '25%'
    }
  },

  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },

  created () {
    window.addEventListener('resize', this.detectWindowWidth)
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
      this.keyboardBtn = true
    },

    detectWindowWidth () {
      if (window.innerWidth < 1200) {
        this.size = '90%'
      } else {
        this.size = '25%'
      }
    }
  }
}
</script>

<style lang="scss">
  .el-drawer.rtl{
    animation: rtl-drawer-out 0s;
  }
  .el-drawer__wrapper{
    &::after{
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 25%;
      backdrop-filter: blur(10px);
      background-color: rgba(165, 154, 150, 0.8);
      z-index: -1;
      @media(max-width: 1200px){
        width: 90%;
      }
    }
  }
  .el-drawer{
    position: absolute;
    padding: 30px 20px;
    color: white;
    outline: none;
    background-color: transparent !important;
    header > span:focus {
      outline: none;
    };

    .el-drawer__header{
      color: white;
    }

    .el-drawer__body{
      padding: 0 20px;
      margin-bottom: 100px;
      box-sizing: border-box;
      overflow-y: auto;
      p{
        line-height: 2em;
        margin-bottom:20px;
        word-break:break-all;
        word-wrap:break-word;
        white-space: pre-wrap
      }

      .messengeBox{
        position: absolute;
        bottom: 20px;
        left: 25px;
        width: 85%;
      }

      .keyboard{
        width: 60px;
        height: 60px;
        border-radius: 35px;
        background-color: rgba(247, 245, 244, 0.8);
        display: flex;
        justify-content: center;
        position: absolute;
        right: 25px;
        bottom: 25px;
        cursor: pointer;
      }
    }
  }
</style>
