<template>
  <transition name="fade">
    <div id="header" v-show="isShow">
    <div class="logo">
      <img src="~assets/img/logo.jpg" alt="">
    </div>
    <nav>
      <a href="#swiper">首页</a>
      <a href="#cards">冰雪健儿</a>
      <a href="#history">奖牌之路</a>
      <a href="#spirit">冬奥精神</a>
      <a href="#news">新闻动态</a>
    </nav>
    </div>
  </transition>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isShow: true,
      startScrollTop: 0,
      navHeight: 0
    }
  },
  methods: {
    show() {
      let nav = document.querySelector('#header');
      this.endHeight = window.pageYOffset
      if(this.endHeight > this.startScrollTop){
        this.isShow = true
      }else {
        this.isShow = false
      }
      this.startScrollTop = window.pageYOffset
      if(this.startScrollTop == 0){
        this.isShow = true
      }
    }
  },
  mounted() {
    let that = this
    this.startScrollTop = window.pageYOffset
    window.addEventListener('scroll',that.show)
  }
}
</script>

<style scoped>
#header {
  position: fixed;
  width: 100vw;
  height: 70px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 0 24px;
  z-index: 200;
  top: 0px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.logo {
  margin-top: 10px;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text);
}

nav {
  justify-self: end;
}

nav a {
  margin: 0 24px;
  color: var(--color-text);
  font-weight: 600;
}

</style>