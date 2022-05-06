<template>
  <div id="header">
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
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {}
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