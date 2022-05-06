<template>
  <div id="footer">
    <div class="content w">
      <div class="logo left">
      <img src="~assets/img/f-logo.jpg" alt="">
    </div>
    <div class="service right">
      <ul>
        <li class="s-item">
          <h1>冬奥会</h1>
        </li>
        <li class="s-item"><a href="javascript:void(0);">结果和奖牌</a></li>
        <li class="s-item"><a href="javascript:void(0);">回看和集锦</a></li>
        <li class="s-item"><a href="javascript:void(0);">全部冬奥会</a></li>
      </ul>
      <ul>
        <li class="s-item">
          <h1>频道</h1>
        </li>
        <li class="s-item"><a href="javascript:void(0);">电视频道</a></li>
        <li class="s-item"><a href="javascript:void(0);">直播赛事</a></li>
        <li class="s-item"><a href="javascript:void(0);">原创系列</a></li>
      </ul>
      <ul>
        <li class="s-item">
          <h1>新闻</h1>
        </li>
        <li class="s-item"><a href="javascript:void(0);">博客</a></li>
        <li class="s-item"><a href="javascript:void(0);">话题</a></li>
      </ul>
      <ul>
        <li class="s-item">
          <h1>探索</h1>
        </li>
        <li class="s-item"><a href="javascript:void(0);">运动员</a></li>
        <li class="s-item"><a href="javascript:void(0);">项目</a></li>
      </ul>
    </div>
    </div>
    <div class="about">
      <ul>
        <li class="a-item"><a href="javascript:void(0);">博物馆</a></a></li>
        <li class="a-item"><a href="javascript:void(0);">商店</a></li>
        <li class="a-item"><a href="javascript:void(0);">关于我们</a></a></li>
        <li class="a-item"><a href="javascript:void(0);">联络中心</a></li>
        <li class="a-item"><a href="javascript:void(0);">站点地图</a></li>
        <li class="a-item"><a href="javascript:void(0);">生涯</a></li>
      </ul>
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
#footer {
  position: relative;
  width: 100%;
  height: 500px;
  padding: 40px 200px;
  margin-top: 70px;
  background-color: #000;
  color: #fff;
}

.content {
  height: 300px;
  border-bottom: 1px solid #b4b4b4;
}

.service {
  width: 1000px;
  margin-right: 30px; 
  display: flex;
  justify-content: space-around;
}

.s-item {
  padding-bottom: 22px;
  font-size: 20px;
}

.s-item h1 {
  font-size: 34px;
  color: #fff;
}

.s-item a {
  color: #b4b4b4;
}

.s-item a:hover {
  color: #fff;
}

.about {
  position: absolute;
  margin-top: 50px;
  width: 1000px;
  top: 320px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
}

.about ul {
  display: flex;
  justify-content: space-around;
}

.about a {
  color: #b4b4b4;
}

.about a:hover {
  color: #fff;
}
</style>