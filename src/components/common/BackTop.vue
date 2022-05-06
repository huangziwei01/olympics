<template>
  <div>
    <div class="back" v-if="isShow">
      <slot @click="backTop"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isShow: false,
      scrollTop:0
    }
  },
  methods: {
    showBtn() {
      this.scrollTop = window.pageYOffset
      if (this.scrollTop > 1000) {
        this.isShow = true
      } else {
        this.isShow = false
      }
      // console.log(this);
      // console.log(this.isShow);
    },
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  },
  mounted () {
    window.addEventListener('scroll',this.showBtn)
  }
}
</script>

<style scoped>
.back {
  width: 100px;
  height: 100px;
  position: absolute;
  background-color:red;
  top: 0;
  right: 60px;
  z-index: 100;
}
</style>