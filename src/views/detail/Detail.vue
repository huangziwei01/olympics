<template>
  <div>
    <detail-header></detail-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import DetailHeader from './childcomps/DetailHeader'

export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {},
  components: {
    DetailHeader
  },
}
</script>

<style scoped>

</style>