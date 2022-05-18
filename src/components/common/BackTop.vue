<template>
  <div>
    <div class="back" v-show="isShow" @click="backTop">
      <img src="~assets/img/arrow_top.jpg"/>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
  name: '',
  data () {
    return {
      isShow: false,
      showScrollTop:0,
      backScrollTop:0
    }
  },
  methods: {
    // showBtn() {
    //   this.scrollTop = window.pageYOffset
    //   console.log(this.scrollTop);
    //   if (this.scrollTop > 1000) {
    //     this.isShow = true
    //   } else {
    //     this.isShow = false
    //   }
    // },
    showBtn: debounce(function () {
      this.showScrollTop = window.pageYOffset
      console.log('执行了');
      if (this.showScrollTop > 2000) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },60),
    getBackScrollTop(){
      this.backScrollTop = window.pageYOffset
    },
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.backScrollTop / 7)
        document.documentElement.scrollTop = that.backScrollTop + ispeed
        if (that.backScrollTop === 0) {
          clearInterval(timer)
        }
      }, 20)
      
    }
  },
  mounted () {
    let that = this
    window.addEventListener('scroll',that.showBtn)
    window.addEventListener('scroll',that.getBackScrollTop)
  }
}
</script>

<style scoped>
.back {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 50px;
  z-index: 100;
}

.back img {
  width: 100%;
  border-radius: 50%;
}
</style>