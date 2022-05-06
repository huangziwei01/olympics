<template>
  <div id="swiper" class="w">
    <el-carousel trigger="click" height="900px" :interval="6000">

      

      <el-carousel-item>
        <div class="caption">
          <h1 v-scroll-reveal.reset>体育让人们真正团结在一起</h1>
          <h3 v-scroll-reveal.reset>送别来自世界各地的运动员，特别是那些没有站上领奖台，却同样有着蓬勃人生的人</h3>
          <el-button type="danger" @click="goTogether">探索更多</el-button>
        </div>
        <div class="backdrop"></div>
        <img src="~assets/img/swiper/swiperPic2.jpg" alt="">
      </el-carousel-item>

      <el-carousel-item>
        <div id="first">
          <h1>「未来的冠军」</h1>
          <el-button type="danger" @click="goFuture">探索更多</el-button>
        </div>
        <div class="backdrop"></div>
        <video src="~assets/video/swiperVideo.mp4" muted autoplay loop></video>
      </el-carousel-item>

      <el-carousel-item>
        <div class="caption">
          <h1>热爱抵万难</h1>
          <h3>天才的背面是每个人无数次经历着成功与失败。</h3>
          <el-button type="danger" @click="goLove">探索更多</el-button>
        </div>
        <div class="backdrop"></div>
        <img src="~assets/img/swiper/swiperPic1.png" alt="">
      </el-carousel-item>
      
      
    </el-carousel>
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
    goFuture() {
      this.$router.push('/detail/future')
    },
    goTogether() {
      this.$router.push('/detail/together')
    },
    goLove() {
      this.$router.push('/detail/love')
    }
  },
  
}
</script>

<style scoped>


#swiper {
  position: relative;
  width: 100%;
  margin-top:70px;
}

.el-carousel__item{
  width: 100%;
  text-align: center;
}

.el-carousel__item img,
.el-carousel__item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#first {
  position: absolute;
  top: 550px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

#first h1 {
  color: #fff;
  font-size: 54px;
}

.caption {
  position: absolute;
  color: #fff;
  text-align: center;
  max-width: 60vw;
  top: 450px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

.caption h1 {
  font-size: 54px;
  font-weight: 600;
}

.caption h3 {
  font-size: 24px;
  margin: 48px 0;
}

.el-button {
  padding: 14px 32px;
  font-size: 20px;
}

.backdrop {
  width: 100%;
  height: 100%;
  background: rgba(42, 42, 42, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0.5;
}



</style>