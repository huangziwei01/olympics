<template>
  <div id="cards" class="w">
    <h2>冰雪健儿</h2>
    <div class="athletes">
      <div class="athlete" @click="goGuailing">
        <img src="~assets/img/athletes/guailing.jpg" alt="">
        <h4 class="name">谷爱凌</h4>
        <p class="profile">历史上最年轻的自由滑雪奥运金牌得主 <br>
          第一位在同一届奥运会上获得三枚奖牌的极限运动员</p>
      </div>

      <div class="athlete" @click="goSuyiming">
        <div class="profile-image">
          <img src="~assets/img/athletes/suyiming.jpg" alt="">
        </div>
        <h4 class="name">苏翊鸣</h4>
        <p class="profile">摘得中国单板滑雪冬奥首金 <br>
          将中国队单届冬奥会5金的纪录推高到6金</p>
      </div>

      <div class="athlete" @click="goWudajing">
        <div class="profile-image">
          <img src="~assets/img/athletes/wudajing.jpg" alt="">
        </div>
        <h4 class="name">武大靖</h4>
        <p class="profile">2018年平昌冬奥会短道速滑男子500米冠军 <br>
          2022年北京冬奥会短道速滑男女2000米混合接力金牌</p>
      </div>

      <div class="athlete" @click="goRenziwei">
        <div class="profile-image">
          <img src="~assets/img/athletes/renziwei.jpg" alt="">
        </div>
        <h4 class="name">任子威</h4>
        <p class="profile">2000米混合接力金牌 <br>
          北京冬奥会短道速滑男子1000米金牌</p>
      </div>
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
  methods: {
    goGuailing() {
      this.$router.push('/detail/guailing')
    },
    goWudajing() {
      this.$router.push('/detail/wudajing')
    },
    goSuyiming() {
      this.$router.push('/detail/suyiming')
    },
    goRenziwei() {
      this.$router.push('/detail/renziwei')
    }
  }
}
</script>

<style scoped>
#cards {
  margin-top: 68px;
  padding-top: 62px;
  padding-bottom: 52px;
  text-align: center;
  margin-bottom: 50px;
  background-color: #FAFAFA;
}

#cards h2 {
  font-size: 34px;
  display: inline;
  padding: 10px 8px;
  border-bottom: 5px solid #000;
}

.athletes {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4,1fr);
  column-gap: 24px;
  margin-top: 86px;
}

.athlete {
  background-color: #fff;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-bottom: 20px;
  transition: 0.4s;
  cursor: pointer;
}

.athlete:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0px 0px 36px rgba(0,0,0,0.1);
}

.athlete img {
  width: 100%;
  height: 264px;
  object-fit: cover;
  object-position: top center;
}

.athlete .name {
  margin-top: 18px;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.athlete .profile {
  padding: 18px 30px;
  font-size: 14px;
}


</style>
