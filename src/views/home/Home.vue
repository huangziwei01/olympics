<template>
  <div id="home">
    <home-header/>
    <Swiper/>
    <athletes-cards/>
    <Medals/>
    <History/>
    <Spirit/>
    <News/>
    <back-top/>
  </div>
</template>

<script>
import HomeHeader from './childcomps/HomeHeader'
import Swiper from './childcomps/Swiper'
import AthletesCards from './childcomps/AthletesCards'
import Medals from './childcomps/Medals'
import History from './childcomps/History'
import Spirit from './childcomps/Spirit'
import News from './childcomps/News'

import BackTop from 'components/common/BackTop'

export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {},
  components: {
    Swiper,
    AthletesCards,
    Medals,
    HomeHeader,
    History,
    Spirit,
    BackTop,
    News
  }
}
</script>

<style scoped>

</style>