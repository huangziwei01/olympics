<template>
  <div id="header">
    <div class="back" @click="back">
      &lt; 返回
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
    back() {
      this.$router.back()
    }
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
  padding: 0 66px;
  z-index: 200;
  top: 0px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.4);
}

.back {
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text);
  cursor: pointer;
}


</style>