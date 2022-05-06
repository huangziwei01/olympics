<template>
  <div id="medals">
    <div class="medal" v-scroll-reveal.reset>
      <h1>金牌</h1>
      <div class="num">9</div>
    </div>
    <div class="medal" v-scroll-reveal.reset>
      <h1>银牌</h1>
      <div class="num">4</div>
    </div>
    <div class="medal" v-scroll-reveal.reset>
      <h1>铜牌</h1>
      <div class="num">2</div>
    </div>
    <div class="medal" v-scroll-reveal.reset>
      <h1>总数</h1>
      <div class="num">15</div>
    </div>
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
#medals {
  width: 100%;
  height: 255px;
  background-image: url(~assets/img/medalBackground.jpg);
  background-size: cover;
  background-position: center;

  display: grid;
  grid-template-columns: repeat(4,minmax(auto,220px));
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 20;
}


#medals::before {
  width: 100%;
  height: 100%;
  content: '';
  display: block;
  position: absolute;
  background-color: rgba(42, 42, 42, 0.69);
}

.medal {
  width: 250px;
  display: grid;
  grid-template-rows: repeat(2,1fr);
  justify-items: center;
  color: #fff;
  position: relative;
  z-index: 30;
}

.medal h1 {
  font-size: 48px;
}

.num {
  font-size: 32px;
  font-weight: 600;
}
</style>