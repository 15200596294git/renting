<template>
<div style="overflow:hidden">
  <my-header></my-header>
  <!-- 主页部分7个部分 -->
  <div id="body">
    <!-- 1.轮播图 -->
    <div style="text-align: center;position:relative;">
      <a href="javascript:void(0);" class="banner"></a>
      <!-- 1.1 -->
    <div class="s_mn_search_index">
      <ul class="s_mn_search_list">
        <li class="city_w">
          <div class="s_mn_search_ipt">
            <div class="s_mn_ipt_index">
              <input type="text" placeholder="请选择目的地" name="" class="s_mn_city_ipt s_orange s_f20 s_yh w_index_position city_ipt_w">
            </div>
          </div>
        </li>
        <li class="s_mn_search_list_w date_start">
          <div class="in-live">
            <i class="in-live-icon"></i>
            <span class="in-live-text">入住时间</span>
          </div>
        </li>
        <li class="s_mn_search_list_w">
          <div class="line"></div>
        </li>
        <li class="s_mn_search_list_w date_end">
          <div class="leave-time">
            离开时间
          </div>
        </li>
        <li class="s_mn_search_list_w w_rz_person">
          <div class="in-live-person">
            <i class="in-live-person-icon"></i>
            <span class="in-live-person-text">入住人数</span>
          </div>
        </li>
        <li>
          <input type="button" value="开始预订" class="start-reserve">
        </li>
      </ul>
    </div>
    </div>
    <!-- 2.意外保险 -->
    <div class="good">
      <ul class="good-ul">
        <li>
          <img src="http://127.0.0.1:5050/index/pc_safe.png" alt="">
          <p>10万出行意外险/身份证信息互联网核查</p>
        </li>
        <li>
          <img src="http://127.0.0.1:5050/index/pc_server.png" alt="">
          <p>2623位试睡体验师/90万房源实拍验真</p>
        </li>
        <li>
          <img src="http://127.0.0.1:5050/index/pc_clear.png" alt="">
          <p>被单每客一换（高品质洗漱用品）/酒店级保洁</p>
        </li>
      </ul>
    </div>
    <!-- 3.寻找你未曾遇到的风景 -->
    <div class="hotcity">
      <div class="hotcity-con">
        <h1 class="con-tit">寻找你未曾相遇的风景</h1>
        <small class="con-f1">热门城市</small>

        <div class="hotcity-main">
          <!-- 3.1图片 -->
          <div class="hotcity-blo">
            <router-link to="/Search" class="hot-link">
              <img src="http://127.0.0.1:5050/index/beijing.webp" alt="">
              <div class="text-box">
                <div>
                  <span class="text-f1">北京</span>
                  <span class="text-f2">京戏胡同豆汁酸</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="hotcity-blo">
            <a href="javascript:void(0)" class="hot-link">
              <img src="http://127.0.0.1:5050/index/shanghai.webp" alt="">
              <div class="text-box">
                <div>
                  <span class="text-f1">上海</span>
                  <span class="text-f2">吴语 弄堂 城隍庙</span>
                </div>
              </div>
            </a>
          </div>
          <div class="hotcity-blo">
            <a href="javascript:void(0)" class="hot-link">
              <img src="http://127.0.0.1:5050/index/sanya.webp" alt="">
              <div class="text-box">
                <div>
                  <span class="text-f1">三亚</span>
                  <span class="text-f2">天涯海角椰风海韵</span>
                </div>
              </div>
            </a>
          </div>
          <div class="hotcity-blo">
            <a href="javascript:void(0)" class="hot-link">
              <img src="http://127.0.0.1:5050/index/guangzhou.webp" alt="">
              <div class="text-box">
                <div>
                  <span class="text-f1">广州</span>
                  <span class="text-f2">骑楼老屋潮汕人家</span>
                </div>
              </div>
            </a>
          </div>
          <div class="hotcity-blo">
            <a href="javascript:void(0)" class="hot-link">
              <img src="http://127.0.0.1:5050/index/haerbin.webp" alt="">
              <div class="text-box">
                <div>
                  <span class="text-f1">哈尔滨</span>
                  <span class="text-f2">北国风光冰雪之城</span>
                </div>
              </div>
            </a>
          </div>
          <div class="hotcity-blo">
            <a href="javascript:void(0)" class="hot-link">
              <img src="http://127.0.0.1:5050/index/chengdu.webp" alt="">
              <div class="text-box">
                <div>
                  <span class="text-f1">成都</span>
                  <span class="text-f2">宽窄巷子慢生活</span>
                </div>
              </div>
            </a>
          </div>
          <div class="hotcity-blo">
            <a href="javascript:void(0)" class="hot-link">
              <img src="http://127.0.0.1:5050/index/hangzhou.webp" alt="">
              <div class="text-box">
                <div>
                  <span class="text-f1">杭州</span>
                  <span class="text-f2">断桥边的千年之恋</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 4.为什么在木鸟订房 -->
  <div class="ad-box">
    <div class="adbox-con">
      <!-- 标题 -->
      <div class="adbox-con-tit">
        <h2>为什么在木鸟订房?</h2>
      </div>
      <div class="adbox-con-box">
        <!-- 四个图标 -->
        <div class="ad-con-div">
          <span class="ad-con-icon icon-posi"></span>
          <b class="icon-bottom">房源100%实地验证</b>
        </div>
        <div class="ad-con-div">
          <span class="ad-con-icon icon-posi"></span>
          <b class="icon-bottom">付款到木鸟 资金有保障</b>
        </div>
        <div class="ad-con-div">
          <span class="ad-con-icon icon-posi"></span>
          <b class="icon-bottom">保障入住人身安全</b>
        </div>
        <div class="ad-con-div">
          <span class="ad-con-icon icon-posi"></span>
          <b class="icon-bottom">地主之谊出行无忧</b>
        </div>
      </div>
    </div>
  </div>
  <!-- 5.一种居所，一种情怀 -->
  <div class="features-box">
    <div class="features-con">
      <div class="features-tit">
        <h2 class="features-h2">一种居所，一种情怀</h2>
        <span class="features-span1">木鸟特色</span>
        <span class="features-span2">
          <a href="javascript:void(0)">探索更多></a>
        </span>
      </div>
      <!-- 图片部分 -->
      <div class="features-pic">
        <div class="pic-container">
          <a href="">
            <img src="http://127.0.0.1:5050/index/features1.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">窑洞</h3>
              <span class="pic-font-span">西北黄土高原上的别样风情</span>
            </div>
          </a>
        </div>
        <div class="pic-container">

          <a href="">
            <img src="http://127.0.0.1:5050/index/features2.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">别墅</h3>
              <span class="pic-font-span">公司年会，开Party，租豪华大别墅</span>
            </div>
          </a>
        </div>
        <div class="pic-container">
          <a href="">
            <img src="http://127.0.0.1:5050/index/features3.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">海景房</h3>
              <span class="pic-font-span">听海的声音，就在窗外</span>
            </div>
          </a>
        </div>
        <div class="pic-container">
          <a href="javascript:void(0)">
            <img src="http://127.0.0.1:5050/index/features4.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">主题特色</h3>
              <span class="pic-font-span">爱TA将TA的梦变成现实</span>
            </div>
          </a>
        </div>
        <div class="pic-container">
          <a href="javascript:void(0)">
            <img src="http://127.0.0.1:5050/index/features5.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">情侣房</h3>
              <span class="pic-font-span">蜜月、情侣不一样的浪漫</span>
            </div>
          </a>

        </div>
        <div class="pic-container">

          <a href="javascript:void(0)">
            <img src="http://127.0.0.1:5050/index/features6.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">复式</h3>
              <span class="pic-font-span">小资情调的感同身受</span>
            </div>
          </a>

        </div>
        <div class="pic-container">

          <a href="javascript:void(0)">
            <img src="http://127.0.0.1:5050/index/features7.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">四合院</h3>
              <span class="pic-font-span">感受老北京的深闺大院，品街头巷尾的家长里短</span>
            </div>
          </a>

        </div>
        <div class="pic-container">
          <a href="javascript:void(0)">
            <img src="http://127.0.0.1:5050/index/features8.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">木屋</h3>
              <span class="pic-font-span">感受最真实大自然，从住木屋开始</span>
            </div>
          </a>

        </div>
        <div class="pic-container">

          <a href="javascript:void(0)">
            <img src="http://127.0.0.1:5050/index/features9.webp" alt="">
            <div class="pic-font">
              <h3 class="pic-font-h3">古镇客栈</h3>
              <span class="pic-font-span">住千年古镇，看岁月更迭，听年代流转</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- 6.出门在外的一千零一夜 -->
  <div class="story-box">
    <div class="story-con">
      <div class="story-tit">
        <h2 class="features-h2">出门在外的一千零一夜</h2>
        <span class="features-span1">木鸟故事</span>
        <span class="features-span2">
          <a href="javascript:void(0)">探索更多></a>
        </span>
      </div>
      <div class="story-main">
        <ul id="story-list">
          <li>
            <div class="story-module">
              <div class="story-img">
                <a href="javascript:void(0);">
                  <img src="http://127.0.0.1:5050/index/room1.jpg" alt="">
                </a>
              </div>
              <div class="story-introduce">
                <h3 class="story-introduce-h3">
                  <a href="javascript:void(0);">看小红书上点赞收藏10w+的民宿，想立马去杭州！</a>
                </h3>
                <span class="story-introduce-span">
                  作为一个年轻有为、时常走在时代前沿的小编，木木也是混迹于各大网络社交圈的，小红书自然也不例外。于是某一天，木木在小红书搜索杭州民宿时，意外发现我们平台的有些房子特别火，点赞收藏特别高，还有好多人都在下面评论要去住。也有的人甚至想把自己的家装修成这个样子！小红书爆款杭州LOFT小红书爆款杭州LOFT经过木木火眼金睛的观察，才发现这些房源都是一家名为【茶香留年】的民宿。其中有一套“奶茶民宿”更是火爆，…
                  <a href="javascript:void(0);">[查看详情]</a>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div id="story-nav">
          <a href="javascript:void(0)" class="active"></a>
          <a href="javascript:void(0)"></a>
          <a href="javascript:void(0)"></a>
          <a href="javascript:void(0)"></a>
          <a href="javascript:void(0)"></a>
        </div>
      </div>
    </div>
  </div>
  <!-- 7.更多资讯 -->
  <div class="s-mn-column">
    <div class="s-mn-column-center">
      <div class="information-box">
        <!-- 标题 -->
        <div class="s-mn-tit">
          <!-- 左链接 -->
          <div class="sm-n-t1">旅游咨询</div>
          <!-- 右链接 -->
          <div class="sm-n-more">
            <a href="javascript:void(0);">更多旅游资讯>>
            </a>
          </div>
        </div>
        <div class="s-mn-information">
          <div class="s_mn_information_img">
            <img src="http://127.0.0.1:5050/index/muniao_logo.jpg" alt="">
          </div>
          <ul class="s_mn_information_list">
            <li><a href="javascript:void(0);" class="s_mn_inf_list_a">神笔山旅游</a></li>
            <li><a href="javascript:void(0);" class="s_mn_inf_list_a">阳江海陵岛旅游攻略</a></li>
            <li><a href="javascript:void(0);" class="s_mn_inf_list_a">苏州周庄古镇旅游</a></li>
            <li><a href="javascript:void(0);" class="s_mn_inf_list_a">深圳杨梅坑旅游攻略</a></li>
            <li><a href="javascript:void(0);" class="s_mn_inf_list_a">金佛山旅游</a></li>
          </ul>
        </div>
      </div>
      <!-- 右边 -->
      <div class="last-box">
        <!-- 上面标题 -->
        <div class="s-mn-tit">
            <div class="sm-n-t1">最新房源</div>
            <ul class="s_mn_li_nav">
              <li>
                <a href="javascript:void(0)" class="s_mn_li_nav_a">1</a>
              </li>
              <li>
                  <a href="javascript:void(0)" class="s_mn_li_nav_a">2</a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="s_mn_li_nav_a">3</a>
                  </li>
            </ul>
        </div>
        <!-- 下面tup -->
        <ul class="s_mn_lates_houselist">
          <li>
            <div class="s_mn_lates_house1">
              <a href="javascri:;">
                <div class="s_mn_lates_houseimg">
                  <img src="http://127.0.0.1:5050/index/imglist2.webp" alt="">
                </div>
                <div class="s_mn_lates_housetext">
                  <div class="s_mn_lates_housetitle">入住带浴缸和投影仪的公寓来体验青岛...</div>
                  <div class="s_mn_lates_houseintroduce">
                      <span class="s_mn_house_area">青岛-市北区</span>
                      <span class="s_mn_house_price">￥300/晚</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="s_mn_lates_house2">
                <a href="javascri:;">
                    <div class="s_mn_lates_houseimg">
                      <img src="http://127.0.0.1:5050/index/imglist1.webp" alt="">
                    </div>
                    <div class="s_mn_lates_housetext">
                      <div class="s_mn_lates_housetitle">绿野仙踪N2.一诚家》小清新夫子庙...</div>
                      <div class="s_mn_lates_houseintroduce">
                          <span class="s_mn_house_area">南京-秦淮区</span>
                          <span class="s_mn_house_price">￥490/晚</span>
                      </div>
                    </div>
                  </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 8.侧边栏 -->
  <div class="sidebar">
    <ul>
      <li class="silder_hide" @mouseenter="showI(0)" @mouseleave="hide(0)">
        <a href="javascript:void(0);" target="_self">
            <img style="margin-top: 5px;" src="http://127.0.0.1:5050/index/mumu.png" title="咨询客服">
        </a>
        <div class="link-tips" v-show="sideShow[0]">
            <p>在线客服</p>
            <!--<p>客服电话</p>
            <span>400-056-0055</span>-->
        </div>
    </li>
    <li class="side_order" @mouseenter="showI(1)" @mouseleave="hide(1)">
        <a class="side_click" href="javascript:void(0)" target="_blank"></a>
        <div class="tenant_tip" v-show="sideShow[1]" @mouseenter="showI(1)">
            <h3>我的订单</h3>
            <p>查看您的近期订单</p>
            <a href="javascript:void(0);" target="_blank">点击查看</a>
        </div>
    </li>
    <li class="tenant_f" @mouseenter="showI(2)" @mouseleave="hide(2)">
        <div class="tenant_tip qq-area" v-show="sideShow[2]">
            <img src="http://127.0.0.1:5050/index/index_linkma.png">
        </div>
    </li>
    <li class="opinion_f" @mouseenter="showI(3)" @mouseleave="hide(3)">
        <a class="side_click" href="javascript:void(0)" target="_blank"></a>
        <div class="tenant_tip" v-show="sideShow[3]">
            <h3>问题反馈</h3>
            <p>请将您的问题告诉我们，<br>我们将更好的为您服务。</p>
            <a href="javascript:void(0)" target="_blank">点击反馈</a>
        </div>
    </li>
    </ul>
  </div>
  <!-- 9.下面和左边广告栏 -->
  <div class="downapp-layer" v-show="isShow">
    <!-- 左边 -->
    <div class="left_down" :style="posi_left" @click="close_left">
      <img src="http://127.0.0.1:5050/index/left_down_bot.png" alt="" style="left:0">
    </div>
    <!-- 下面 -->
    <div class="down_app" :style="posi_bottom">
      <div class="down_app_bg"></div>
      <div class="down_app_c">
        <div class="down_app_left">
          <img src="http://127.0.0.1:5050/index/newdownappone.png" alt="">
        </div>
        <div class="down_app_right">
          <h4>扫描二维码</h4>
          <div class="appewm">
            <img src="http://127.0.0.1:5050/index/wechatone.jpg" alt="">
          </div>
        </div>
        <a href="javascript:void(0);" class="close_down" @click="close_bottom">
          <img src="http://127.0.0.1:5050/index/close_down.png" alt="">
        </a>
      </div>
    </div>
  </div>
  <my-footer></my-footer>
</div>
</template>
<script>
export default {
  data(){
    return{
      // 1.侧边栏悬浮显示
      sideShow:[false,false,false,false],
      i:0,
      timer:null,
      px:0,
      // 控制广告的显/隐藏
      isShow:false,
      // 保存左边广告的位置
      posi_left:{
        left:"-120px",
      },
      posi_bottom:{
        left:"0"
      }
    }
  },
  methods:{
    // 侧标栏的显示
    showI(i){
      this.timer!=null&&(clearTimeout(this.timer)&&(this.timer = null));
      for(var c=0;c<this.sideShow.length;c++){
        if(c==i){
          this.$set(this.sideShow,c,true)
        }else{
          this.$set(this.sideShow,c,false);
        } 
      }
    },
    // 侧边栏的隐藏
    hide(i){
      var timer;
      // 其它的马上隐藏 
      this.timer = setTimeout(()=>{
        this.$set(this.sideShow,i,false);
      },500)
      
      console.log(this.sideShow);
    },
    handleScroll(){
      var scrollTop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
      var scroll = scrollTop - this.px;
      this.px = scrollTop;
      console.log(scrollTop)
      if(scrollTop>=500){
        this.isShow = true;
        console.log("显示");
      }else{
        this.isShow = false;
        console.log("隐藏")
      }
    },
    // 关闭下面广告栏
    close_bottom(){
      
      this.posi_bottom = {left:"-1423px"};
      setTimeout(()=>{
        this.posi_left = {left:"0"};
      },300)
      
    },
    close_left(){
      
      this.posi_left = {left:"-120px"};
      setTimeout(()=>{
        this.posi_bottom = {left:"0"};  
      },300)
      
    }
  },
  mounted(){
    window.addEventListener("scroll",this.handleScroll,true);
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

ul {
  list-style: none; }

a {
  text-decoration: none; }

body {
  background: #f0f0f0; }

.good {
  background: #ffffff; }

.good-ul {
  padding: 30px 0;
  display: flex;
  justify-content: space-around; }

.good-ul > li {
  text-align: center;
  padding: 0 90px; }

.good-ul > li > p {
  color: #999;
  font-size: 15px; }

.good-ul > li:not(:last-child) {
  border-right: 1px solid #eee; }

.hotcity {
  background: #f0f0f0;
  margin: 25px 0 50px 0;
  text-align: center; }

.hotcity-con {
  width: 1200px;
  margin: 0 auto;
  padding: 15px 0 0 0; }

.con-tit {
  margin: 15px 0 15px 0;
  font-weight: 500;
  color: #353535;
  font-size: 29px; }

.con-f1 {
  display: inline-block;
  font-size: 17px;
  padding: 0px 0 57px 0;
  color: #888; }

.hotcity-blo {
  float: left; }

.hotcity-main::after {
  display: block;
  content: "";
  clear: both; }

.hotcity-blo:first-child {
  width: 800px; }

.hotcity-blo:nth-child(2) {
  width: 400px; }

.hotcity-blo:nth-child(3) {
  width: 400px; }

.hotcity-blo:nth-child(4) {
  width: 800px; }

.hotcity-blo:nth-child(5) {
  width: 400px; }

.hotcity-blo:nth-child(6) {
  width: 400px; }

.hotcity-blo:last-child {
  width: 400px; }

.hotcity-main {
  width: 100%;
  margin: 0 auto; }

.hotcity-main::after {
  display: block;
  content: "";
  clear: both; }

.hot-link {
  display: block;
  position: relative;
  padding: 10px; }

.hot-link:hover {
  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3); }

.hot-link > img {
  height: 280px; }

.text-box {
  width: 100%;
  position: absolute;
  top: 38%;
  left: 0;
  color: #ffffff; }

.text-box > div {
  width: 100%;
  display: flex;
  flex-direction: column; }

.text-f1 {
  font-size: 26px;
  margin-bottom: 5px; }

.ad-box {
  width: 100%;
  background: url(http://127.0.0.1:5050/index/s_mn_ad_bg.jpg);
  text-align: center; }

.adbox-con {
  width: 1200px;
  margin: 0 auto; }

.adbox-con-tit {
  padding: 15px 0;
  font-weight: 500; }

.adbox-con-tit > h2 {
  color: #fff;
  font-size: 28px; }

.adbox-con-box {
  width: 100%;
  height: 180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around; }

.icon-posi {
  display: inline-block;
  width: 105px;
  height: 104px; }

.ad-con-icon {
  background: url(http://127.0.0.1:5050/index/index_bz1.png) no-repeat;
  background-size: 100%; }

.ad-con-div {
  width: 290px;
  height: 173px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 35px 0 35px;
  cursor: pointer; }

.ad-con-div:hover {
  box-shadow: 0 0 5px #1877a6; }

.icon-bottom {
  font-weight: 500;
  color: #fff;
  font-size: 17px;
  margin: 20px 0; }

.features-box {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  background: #f0f0f0; }

.features-con {
  width: 1200px;
  margin: 0 auto; }

.features-tit {
  margin: 0 auto;
  padding: 30px 0;
  width: 100%;
  text-align: center; }

.features-h2 {
  color: #353535;
  font-size: 28px;
  font-weight: 500; }

.features-span1, .features-span2 {
  display: block;
  width: 100%; }

.features-span1 {
  color: #888;
  font-size: 16px;
  line-height: 45px; }

.features-span2 > a {
  color: #888;
  background: #ddd;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  padding: 8px 11px; }

.features-span2 > a:hover {
  background: #f30;
  color: #fff; }

.features-pic {
  width: 100%;
  height: 900px;
  margin: 0 auto; }

.pic-container {
  float: left;
  width: 400px;
  height: 300px; }

.pic-container > a {
  display: block;
  position: relative; }

.pic-container > a > img {
  padding: 10px; }

.pic-container > a > img:hover {
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }

.pic-font {
  position: absolute;
  top: 214px;
  left: 20px; }

.pic-font-h3 {
  color: #fff;
  font-weight: 500;
  font-size: 21px; }

.pic-font-span {
  color: #fff;
  font-size: 14px;
  font-weight: 500; }

.story-box {
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  background: #f0f0f0; }

.story-con {
  width: 1200px;
  margin: 0 auto; }

.story-tit {
  text-align: center;
  margin: 0 auto 38px auto; }

.story-main {
  width: 100%;
  height: 380px;
  position: relative; }

#story-list {
  width: 100%;
  height: 380px; }

.story-module {
  width: 1200px;
  padding: 0 10px; }

.story-img {
  float: left;
  width: 790px;
  height: 380px; }

.story-introduce {
  float: left;
  padding: 20px;
  width: 390px;
  height: 380px;
  background: #fff; }

.story-introduce-h3 {
  color: #f30;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  padding: 0 50px; }

.story-introduce-h3 > a {
  color: #f30;
  font-size: 19px;
  font-weight: 500;
  line-height: 50px; }

.story-introduce-span {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 310px;
  color: #888;
  font-size: 14px;
  text-indent: 28px;
  line-height: 22px; }

.story-introduce-span > a {
  float: right;
  color: #09f; }

#story-nav {
  position: absolute;
  width: 100px;
  height: 20px;
  top: 92%;
  left: 79%; }

#story-nav > a {
  width: 10px;
  height: 10px;
  background: #ddd;
  float: left;
  margin: 5px; }

#story-nav .active {
  background: #f30; }

.s-mn-column {
  width: 100%;
  margin: 20px auto;
  height: 276px;
  background: #f0f0f0; }

.s-mn-column-center {
  width: 1180px;
  margin: 0 auto; }

.s-mn-tit {
  width: 580px;
  line-height: 40px; }

.s-mn-tit::after {
  display: block;
  content: "";
  clear: both; }

.s-mn-information {
  position: relative;
  float: left;
  overflow: hidden;
  width: 580px;
  height: 230px;
  margin-top: 8px; }

.sm-n-t1 {
  float: left;
  padding-left: 15px;
  width: 180px;
  height: 40px;
  background: url(http://127.0.0.1:5050/index/title_icon.png) center left no-repeat;
  background-size: 10px;
  color: #555;
  font-size: 16px; }

.sm-n-more {
  float: right;
  width: 120px;
  height: 40px;
  text-align: right;
  font-size: 14px; }

.sm-n-more > a {
  color: #555;
  font-size: 13px;
  font-family: "宋体"; }
  .sm-n-more > a:hover {
    color: #f30; }

.information-box {
  float: left;
  width: 580px; }

.information-box::after {
  display: block;
  content: "";
  clear: both; }

.s_mn_information_img {
  float: left;
  width: 290px;
  height: 230px; }

.s_mn_information_img > img {
  width: 290px;
  height: 230px; }

.s_mn_information_list {
  position: absolute;
  top: 0;
  left: 281px;
  width: 300px; }

.s_mn_information_list {
  position: absolute;
  top: 0;
  left: 281px;
  width: 300px; }

.s_mn_inf_list_a {
  display: block;
  width: 300px;
  height: 46px;
  background: url(http://127.0.0.1:5050/index/s_mn_inf_list_abg.png) 0 -46px no-repeat;
  color: #555;
  text-indent: 20px;
  font-size: 14px;
  line-height: 46px; }

.s_mn_information_list > li:first-child > a {
  background: url(http://127.0.0.1:5050/index/s_mn_inf_list_abg.png) 0 0 no-repeat;
  color: #fff; }

.s_mn_inf_list_a:hover {
  background: url(http://127.0.0.1:5050/index/s_mn_inf_list_abg.png) 0 0 no-repeat;
  color: #fff; }

.last-box {
  position: relative;
  float: left;
  overflow: hidden;
  margin-left: 20px;
  width: 580px;
  height: 276px; }

.s_mn_li_nav {
  float: right;
  width: 90px;
  height: 40px; }

.s_mn_li_nav li {
  float: left;
  line-height: 40px; }

.s_mn_li_nav li a {
  display: block;
  margin: 10px 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 15px;
  font-family: "宋体"; }

.s_mn_li_nav_a {
  background: url(http://127.0.0.1:5050/index/s_mn_li_nav.png) -23px 0 no-repeat; }

.s_mn_li_nav > li:first-child > a {
  background: url(http://127.0.0.1:5050/index/s_mn_li_nav.png) #f30 0 0 no-repeat; }

.s_mn_li_nav_a:hover {
  background: url(http://127.0.0.1:5050/index/s_mn_li_nav.png) #f30 0 0 no-repeat; }

.s_mn_lates_houselist {
  position: absolute;
  margin-top: 6px;
  width: 1740px;
  height: 230px; }

.s_mn_lates_house2 {
  margin-left: 22px; }

.s_mn_lates_house1, .s_mn_lates_house2 {
  float: left;
  width: 280px;
  height: 230px;
  background: #fff; }

.s_mn_lates_houseimg > img {
  width: 280px;
  height: 176px; }

.s_mn_lates_housetitle {
  height: 30px;
  color: #555;
  font-size: 14px;
  padding: 0 15px; }

.s_mn_lates_houseintroduce {
  display: flex;
  justify-content: space-between;
  padding: 0  15px; }

.s_mn_house_area {
  float: left;
  color: #888;
  font: 12px/20px "宋体"; }

.s_mn_house_price {
  color: #f30;
  font: 14px/20px "microsoft yahei"; }

.sidebar {
  position: fixed;
  right: 30px;
  bottom: 104px;
  z-index: 3; }
  .sidebar ul {
    width: 40px;
    height: 160px;
    background: #DDDDDD;
    opacity: .96; }
    .sidebar ul li {
      width: 40px;
      height: 40px;
      text-align: center;
      position: relative;
      cursor: pointer; }
      .sidebar ul li:hover {
        background-color: #f17463; }

.silder_hide {
  background: #ff9180;
  padding: 5px 6px 0; }

.link-tips {
  position: absolute;
  top: 0;
  left: -138px;
  background: #444;
  color: #fff;
  font-size: 12px;
  width: 130px;
  height: 78px;
  border-radius: 2px;
  padding-top: 16px;
  opacity: .9; }
  .link-tips p {
    line-height: 28px; }

.side_order {
  background: url(http://127.0.0.1:5050/index/side.png) no-repeat center 11px; }

.tenant_tip {
  position: absolute;
  top: 0;
  left: -176px;
  background: #444444;
  border-radius: 3px;
  padding: 0 10px 14px;
  opacity: .9;
  width: 160px;
  text-align: left; }
  .tenant_tip h3 {
    color: #19B5FE;
    font-size: 16px;
    padding: 10px 0;
    font-weight: normal; }
  .tenant_tip p {
    color: #888888;
    font-size: 12px;
    margin: 0;
    padding: 0; }
  .tenant_tip a {
    display: inline-block;
    padding: 5px 10px;
    color: #FFFFFF;
    background: #19b5fe;
    font-size: 12px;
    margin-top: 12px; }

.tenant_f {
  background: url(http://127.0.0.1:5050/index/side.png) no-repeat center -35px; }

.qq-area {
  width: auto;
  height: auto;
  padding: 10px 20px;
  left: -140px; }

.opinion_f {
  background: url(http://127.0.0.1:5050/index/side.png) no-repeat center -76px; }
/* 左边广告 */
.left_down{
  position: fixed;
  bottom:240px;
  z-index: 100;
  width: 120px;
  height: 74px;
  cursor: pointer;
  transition: all 200ms linear;
}
/* 下面广告栏 */
.down_app{
  position: fixed;
  bottom:0;
  z-index: 999;
  width:100%;
  height: 140px;
  background:transparent;
  opacity: 1;
  transition: all 300ms linear;
}
.down_app_bg{
  position: absolute;
  top:0;
  left:0;
  right: 0;
  bottom:0;
  background: #000;
  opacity: .7;  
}
/* 图片 */
.down_app_c{
  width:1018px;
  margin: 0 auto;
  height:140px;
  top:0;
  position: relative;
}
.down_app_left{
  position: absolute;
  top:-34px;
  left:96px;
}
.down_app_right{
  position: absolute;
  right:132px;
  top:0;
  width:204px;
  height:140px;
  background:#11172e;
  z-index:1;
}
.down_app_right h4{
  height: 34px;
    padding: 6px 0 0;
    margin: 0;
    line-height: 34px;
    text-align: center;
    font-size: 16px;
    color: #fefefe;
}
.appewm{
  width:92px;
  height:92px;
  margin: 5px auto 0;
}
.close_down{
  position:absolute;
  top:8px;
  right:90px;
}
/* banner大图片 */
.banner{
  width:100%;
  height:550px;
  display: block;
  background:url(http://127.0.0.1:5050/index/banner1.jpg) 50% 50% no-repeat;
}
/* 你想去的城市 */
.s_mn_search_list::after{
  display: block;
  content:"";
  clear:both;

}
.s_mn_search_list li{
  float: left;
}
.city_w{
  width:308px;
  border-right: 1px solid #ddd;
}
.s_mn_search_ipt{
  width: 108px;
    height: 56px;
    background: #fff;
    position: relative;
}

.s_mn_ipt_index{
  width: 100%;
    height: 56px;
    border: 0;
}
.s_mn_city_ipt {
    height: 56px;
    line-height: 54px;
    text-align: left;
    border: 0 none;
    text-decoration: none;
    font-size: 16px;
    
}
.s_mn_city_ipt::placeholder{
  color:#F86D56;
}
.w_index_position {
    background: #FFF url(//assets.muniao.com/assets/2015/images/index_selectbg.png) 10px 0 no-repeat;
    padding-left: 40px;
}
.city_ipt_w {
    width: 307px;
}
.in-live{
  display: flex;
  width:152px;
  
  height:56px;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}
/* 小图片 */
.in-live-icon{
  display: inline-block;
  width:56px;
  height:56px;
  background: url(http://127.0.0.1:5050/index/index_selectbg.png) 10px -44px no-repeat;
}
/* 文字样式 */
.in-live-text{
  display: inline-block;
  width:112px;
  height: 56px;
  color:#F86D56;
  font-size:16px;
  text-align: center;
  line-height: 56px;
}
/* 设置横线 */
.line{
  width:20px;
  height:2px;
  background:#ccc;
  transform: translateY(28px);
  margin: 0 18px;
}
/* 离开时间 */
.leave-time{
  width: 111px;
  line-height: 56px;
  text-align: center;
  color:#F86D56;
}
.in-live-person{
  display: flex;
  width:133px;
  height:56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
}
/* 小图片 */
.in-live-person-icon{
  display: inline-block;
  width:35px;
  height:56px;
  background: url(http://127.0.0.1:5050/index/index_selectbg.png) 10px -99px no-repeat;
}
.in-live-person-text{
  color:#F86D56;
  padding-right: 10px;
}
.date_end{
  border-right: 1px solid #ddd;
}
.start-reserve{
  color:#fff;
  width:160px;
  height:56px;
  background: #f86d56;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
}
/* 位置 */
.s_mn_search_index{
  position: absolute;
  top:88%;
  left:222px;
}
.s_mn_search_list_w{
  height: 56px;
  background: #fff;
}
</style>