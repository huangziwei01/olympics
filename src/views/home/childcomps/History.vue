<template>
  <div id="history" class="w">
    <h1>奖牌之路</h1>
    <p class="intro1">中国冬奥奖牌路：征程经历坎坎坷坷，英雄从未放弃</p>
    <div class="cards">
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/1980.jpg" alt="" >
        <h2 class="title">1980</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/1984.jpg" alt="">
        <h2 class="title">1984</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/1988.jpg" alt="">
        <h2 class="title">1988</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/1994.jpg" alt="">
        <h2 class="title">1994</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/1992.jpg" alt="">
        <h2 class="title">1992</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/1998.jpg" alt="">
        <h2 class="title">1998</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/2002.jpg" alt="">
        <h2 class="title">2002</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/2006.jpg" alt="">
        <h2 class="title">2006</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/2010.jpg" alt="">
        <h2 class="title">2010</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/2014.jpg" alt="">
        <h2 class="title">2014</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/2018.jpg" alt="">
        <h2 class="title">2018</h2>
        <div class="backdrop"></div>
      </div>
      <div class="card" v-scroll-reveal>
        <img src="~assets/img/history/2022.jpg" alt="">
        <h2 class="title">2022</h2>
        <div class="backdrop"></div>
      </div>
    </div>
    <p class="intro2">&nbsp;&nbsp;&nbsp;&nbsp;从1980年中国首次参加冬奥会到即将开始的北京冬奥会，中国体育健儿一次次向金牌发起冲击，尽管经历坎坎坷坷，但每次努力每一次的奋进与收获，都书写下一段中国冰雪传奇...</p>
    <el-button type="danger"><a href="https://new.qq.com/rain/a/20220204A02D4V00" target="_blank">阅读文章</a></el-button>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods: {},
}
</script>

<style scoped>
#history {
  margin-top: 68px;
  padding-top: 62px;
  padding-bottom: 52px;
  text-align: center;
  margin-bottom: 50px;
  background-color: #FAFAFA;
}

#history h1 {
  font-size: 34px;
  display: inline;
  padding: 10px 8px;
  border-bottom: 5px solid #000;
}

.intro1 {
  margin-top: 44px;
  font-size: 24px;
  font-weight: 600;
  color: #8b8b8b;
}

.intro2 {
  text-align: left;
  margin: 44px 0;
  font-size: 24px;
  font-weight: 600;
  color: #8b8b8b;
  padding: 10px 100px;
}

.cards {
  margin-top: 44px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3,1fr);
  column-gap: 24px;
  row-gap: 24px;
}

.card {
  position: relative;
  height: 300px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .title {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  z-index: 20;
  font-size: 70px;
}

.card .backdrop {
  width: 100%;
  height: 100%;
  background: rgba(42, 42, 42, 0.69);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0.5;
}

.el-button a {
  font-size: 16px;
  color: #fff;
}
</style>