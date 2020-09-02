<template>
  <el-drawer
    title="智慧線上客服笨笨^_^"
    :visible.sync="drawer"
    :before-close="closeModal"
    size="100%">
    <div>
      <p>
        <span>笨笨：</span>
        <p>Two-Gether慶開幕！結帳時輸入優惠碼「luv-2-gether」立即享９折優惠！！
        <br>您好請問有什麼我可以幫助您的地方嗎？&#128516;
      </p>
      <div v-for="(item,index) in msgBox" :key="item + index">
        <p>
          <span>我：</span><br>{{ item.customerMsg }}</p>
        <p v-html="item.computerMsg"></p>
      </div>
    </div>
    <el-input v-model="tempMsg" type="textarea" class="messengeBox" @keyup.enter.native.exact="sendMsg" v-if="keyboardBtn === false"></el-input>
    <div class="keyboard" @click="keyboardBtn = false" v-if="keyboardBtn === true"><img src="@/assets/icon/keyboard.svg" alt=""></div>
  </el-drawer>
</template>

<script>
export default {
  data () {
    return {
      tempMsg: '',
      msgBox: [],
      keyboardBtn: true
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
      this.keyboardBtn = true
    }
  }
}
</script>
