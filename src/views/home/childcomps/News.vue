<template>
  <div id="news" class="w">
    <h2>新闻动态</h2>
    <div class="new">
      <a class="n-item" href="https://www.beijing2022.cn/wog.htm?cmsid=20220206002394" target="_blank">
        <img src="~assets/img/news/pic1.jpg" alt="">
        <div class="intro">
          <div class="jiaodian">焦点新闻</div>
          <h3>国际奥委会主席巴赫：中国为全球冰雪运动开启新时代</h3>   
        </div>    
      </a>

      <a class="n-item" href="https://www.beijing2022.cn/paralympics/wog.htm?cmsid=20220312050909" target="_blank">
        <img src="~assets/img/news/pic2.jpg" alt="">
        <div class="intro">
          <div class="jiaodian">焦点新闻</div>
          <h3>国际残奥委会主席帕森斯：北京冬残奥会把办赛标准提高到了新水平</h3> 
        </div>    
      </a>

      <a class="n-item" href="https://www.beijing2022.cn/wog.htm?cmsid=20220419007506" target="_blank">
        <img src="~assets/img/news/pic3.jpg" alt="">
        <div class="intro">
          <div class="jiaodian">焦点新闻</div>
          <h3>弘扬北京冬奥精神 续写“双奥之城”荣耀 在新起点上更加奋发有为推动新时代首都发展</h3>
        </div>     
      </a>

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
#news {
  margin-top: 68px;
  padding-top: 62px;
  background-color: #FAFAFA;
  text-align: center;
}

#news h2 {
  font-size: 34px;
  display: inline;
  padding: 10px 8px;
  border-bottom: 5px solid #000;
}

.new {
  margin-top: 86px;
  display: flex;
  justify-content: space-around; 
}

.n-item {
  display: block;
  width: 420px;
  height: 400px;
  text-align: center;
  transition:  0.4s;
}

.n-item img {
  width: 100%;
  object-fit: cover;
}

.n-item:hover {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0px 0px 36px rgba(0,0,0,0.1);
}

.jiaodian {
  width: 80px;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 10px 0;
  background-color: #c11827;
  border-radius: 8px;
  text-align: center;
  color: #fff;
}

h3 {
  text-align: left;
}

.intro {
  padding: 0 30px;
}
</style>