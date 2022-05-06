<template>
  <div id="w">
    <slot></slot>
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
  activated() {
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
#w {
  background-color: #e6e6e6;
}

.titleImg {
  display: block;
  width: 1200px;
  height: 500px;
  margin: 0 auto;
  margin-top: 70px;
  object-fit: cover;
}

.article {
  width: 1200px;
  padding: 50px 200px;
  margin: 0 auto;
  background-color: #fff;
}

.article h1 {
  font-size: 48px;
}

.article #intro {
  margin: 40px 0;
  font-size: 22px;
  color: #8b8b8b;
}

.article img {
  width: 800px;
  height: 500px;
  object-fit: cover;
  margin: 50px 0;
}

.article p {
  margin: 40px 0;
  font-size: 20px;
  line-height: 1.8em;
}

.end {
  padding-bottom: 100px;
}

.end .author {
  float: right;
  font-weight: 600;
}
</style>