<template>
  <div id="spirit" class="w">
    <h1>冬奥精神</h1>
    <h3>深刻认识和大力发扬北京冬奥精神（深入学习贯彻习近平新时代中国特色社会主义思想）</h3>
    <p id="first">伟大的事业孕育伟大的精神，伟大的精神推进伟大的事业。胸怀大局、自信开放、迎难而上、追求卓越、共创未来的北京冬奥精神是中华民族精神的时代彰显，是激励全党全国各族人民在新时代更好坚持和发展中国特色社会主义、实现中华民族伟大复兴的强大精神动力。</p>
    <p>北京冬奥会、冬残奥会是在全党全国各族人民向第二个百年奋斗目标迈进的关键时期举办的重大标志性活动。7年来，在以习近平同志为核心的党中央坚强领导下，各有关部门、各省区市团结协作、攻坚克难，北京携手张家口作为主办城市尽锐出战、全力投入，共创出一场无愧于祖国、无愧于人民、无愧于时代的盛会，让各国人民看到了一个可信、可爱、可敬的中国。习近平总书记在北京冬奥会、冬残奥会总结表彰大会上指出：“北京冬奥会、冬残奥会广大参与者珍惜伟大时代赋予的机遇，在冬奥申办、筹办、举办的过程中，共同创造了胸怀大局、自信开放、迎难而上、追求卓越、共创未来的北京冬奥精神。”北京冬奥精神是中华民族精神的时代彰显，是激励全党全国各族人民在新时代更好坚持和发展中国特色社会主义、实现中华民族伟大复兴的强大精神动力。</p>
    <p>时代是思想之母，任何一种催人奋进、引人向上的伟大精神，都是顺应时代需求而产生的。北京冬奥精神是在中国特色社会主义进入新时代的大背景下形成的，离不开党领导人民在新时代开展的伟大实践，具有鲜明的时代特征。中华文化源远流长，积淀着中华民族最深层的精神追求，代表着中华民族独特的精神标识，为中华民族生生不息、发展壮大提供了丰厚滋养。北京冬奥精神根植于中华优秀传统文化的深厚土壤，是由流淌在中华民族血脉中的优秀传统文化基因与新时代的时代特征相结合，在冬奥申办、筹办、举办的过程中展现的精神气象。</p>
    <div class="pic">
      <img src="~assets/img/spirit/pic1.jpg" alt="" v-scroll-reveal>
      <img src="~assets/img/spirit/pic2.jpg" alt="" v-scroll-reveal>
    </div>
    <p>北京冬奥精神凝聚起社会主义中国奋发前行的强大意志，彰显坚定走中国特色社会主义道路的信心和决心，为实现民族复兴注入新活力、激发新动能。在今年全国两会上，习近平总书记提出“五个必由之路”的重大论断，指明了新时代中国发展的根本方向。北京冬奥会、冬残奥会的圆满成功，鲜明印证了习近平总书记的科学论断，诠释了坚持党的集中统一领导、坚持集中力量办大事的社会主义制度优越性。制度优势是一个政党、一个国家的最大优势。北京冬奥会、冬残奥会的成功举办，让世界看到了我国社会主义制度非凡的组织动员能力、统筹协调能力、贯彻执行能力，激励全国人民坚定不移沿着中国特色社会主义道路实现中华民族伟大复兴。</p>
    <el-button type="danger"><a href="https://politics.gmw.cn/2022-04/28/content_35698297.htm" target="_blank">阅读文章</a></el-button>
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
#spirit {
  margin-top: 68px;
  padding-top: 62px;
  padding-left:100px;
  padding-right:100px;
  padding-bottom: 100px;
  background-color: #FAFAFA;
  text-align: center;
}

#spirit h1 {
  font-size: 34px;
  display: inline;
  padding: 10px 8px;
  border-bottom: 5px solid #000;
}

#spirit h3 {
  margin-top: 60px;
  font-size: 24px;
}

#spirit p {
  font-size: 24px;
  font-weight: 600;
  color: #8b8b8b;
  margin-bottom: 40px;
  text-align: left;
}

#spirit #first {
  margin-top: 70px;
}

.pic {
  margin: 80px 0;
}

.pic img {
  width: 1000px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.el-button a {
  font-size: 16px;
  color: #fff;
}
</style>