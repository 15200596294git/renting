<template>
<div>
  <!-- 头部 -->
  <header id="header"></header>
  <!-- 租房故事，整体两个部分，轮播图和故事列表 -->
  <!-- 第一部分，轮播图部分 -->
  <div class="w_storybanner">
    <ul id="ul_imgs">
      <li style="display: block;">
        <a src="javascript:;"></a>
      </li>
      <li style="display: none;">
        <a src="javascript:;"></a>
      </li>
      <li style="display: none;">
        <a src="javascript:;"></a>
      </li>
      <li style="display: none;">
        <a src="javascript:;"></a>
      </li>
      <li style="display: none;">
        <a src="javascript:;"></a>
      </li>
    </ul>
    <!-- 按钮部分 -->
    <div class="tabbtn">
      <a href="javascript:void(0);" class="active" data-target="0"></a>
      <a href="javascript:void(0);" data-target="1"></a>
      <a href="javascript:void(0);" data-target="2"></a>
      <a href="javascript:void(0);" data-target="3"></a>
      <a href="javascript:void(0);" data-target="4"></a>
    </div>
  </div>
  <!-- 第二部分，故事列表部分 -->
  <div class="s_mn_center">
    <!-- 1.故事标题 -->
    <div class="w_sub_title">
      <!-- 1.1左浮 左边部分 -->
      <div class="w_sub_title_left">
        <h2></h2>
        <ul>
          <li>
            <a href="javascript:void(0);">全部</a>
          </li>
          <li>
            <a href="javascript:void(0);">房东故事</a>
          </li>
          <li>
            <a href="javascript:void(0);">房客故事</a>
          </li>
          <li>
            <a href="javascript:void(0);">发现旅行</a>
          </li>
        </ul>
      </div>
      <!-- 1.2左浮 右边部分 -->
      <div class="w_sub_title_right f14">
        您的位置：
        <a href="javascript:void(0);">木鸟短租网</a>
        &nbsp;&nbsp;>&nbsp;&nbsp;发现
      </div>
    </div>
    <!-- 2.故事主列表 -->
    <div class="story_main">
      <ul class="storylist">
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story1.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">重庆攻略！嗨爆你的小宇宙!</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（68957）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">琴子</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
              比起成都，重庆更有西南的特色，很少有太阳出来也不晒，雾都嘛，二十七八度很适合出游。偶尔会下小雨，有点湿，我第一天来的时候，觉得裤子都湿了，北方人感觉会大一点。重庆山城很有特色，成都比较…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story2.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">重庆冷门小众景点推荐</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（36504）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">朱钱钱</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
              
山城重庆，是一座火辣辣的城市，它是曾经的陪都，现在的直辖市。它有可以媲美香港的夜景，也有老巴渝传统的那一份宁静。最适合旅游的季节是三四月份，夏季的火炉可不是开玩笑，出去游玩一天指不定会…
                            
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story3.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">去成都吃火锅住民宿</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（1221）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">白菜</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
             
刘程是我的发小，读完高中死活不想上学了，于是便给自家的小厂做起了苦工，但毕竟是自己家的厂子，苦活哪轮得到他干，无非是开车送送货见见客户而已，搁北京这就是一顽主。上周抽空去他家找他玩，还…
                            
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story4.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">万宁，冬季旅游好去处</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（841）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">麟儿</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                麟儿    
                时光荏苒如白驹过隙，转眼到了二十多岁，旅行的计划拖了又拖，今年底，结束了一年忙碌的工作，终于决定出去走一走。我还没有过独自旅行的经历，这次出行也下了很大的决心，出行前我问自己，旅行的意…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story5.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">少女如何与房东成闺蜜</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（799）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">陈雯佳</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                “女儿啊，大姑打电话过来告诉我说，她又给你物色了一个不错的人选，事业单位，30多岁，有一套房，没有不良嗜好。晚上8点你们一起吃个饭啊。”老妈进门来对着还躺在床上玩手机的我喋喋不休道。这…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story6.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">忘了三亚这才是吃货天堂 </a>
              <div class="story_hudong">
                <span class="story_hot16">热度（508）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">Rock</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                民宿老板接到我们之后一上来就问：“你们是来海口玩吗？但是我们海口没什么好玩的，就主要是吃东西啦！”那一瞬间，我觉得我选对了旅行地，选对了民宿，看好老板！老板说，作为海口人，我建议你们海…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story7.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">欣赏春晚三亚分会场</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（604）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">逍遥轩</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                央视春晚作为春节的标配，成为现在为数不多有“年味”的节目。从前几年开始，央视春晚也花样百出，除了主会场，每年都会设立分会场，这也让全国不同地区的人们能更近距离感受春晚的温度。而2018…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story8.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">现身说法三亚旅游之“坑”</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（958）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">小岛住墅</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                错开高峰，每年选择出去游玩的时间安排我和绝大多数人都不同，踩着九月的阳光，我们一大家子去了三亚，与现在众多游客滞留不同，那个时候其实去三亚的人并不多，反而显得有些冷清。三亚在我看来是国…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story9.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">成都和重庆，谁更略胜一筹</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（24320）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">bestsweethome</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                “和我在成都的街头走一走......”赵雷的一首《成都》，轻飘飘的民谣唱进了很多人的心中，正值春暖花开之际，到蓉城漫步赏花被我提上日程。说起川渝地区的旅行，去年初秋的重庆之旅的点点滴滴…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story10.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">出差遇见不一样的厦门</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（15560）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">晓娟</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                如果说出差是很多人的“噩梦”，那其实对我而言，反倒不如说一场好梦，接着工作的机会，在工作之余多走走多看看，多么惬意。近来经常听到这样的说法“三亚是中国最好的海滨旅游城市！”倒不是觉得三…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story11.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">乌镇游玩攻略:去乌镇旅游怎么玩,我来告诉你!</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（25874）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">余兮</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
              一直很想去乌镇，因为黄磊和刘若英的《似水年华》，向往粉墙黛瓦青石板，小桥流水乌篷船，还有咿咿呀呀的吴侬软语，最近终于一家四口实现了这次期待已久的度假，因为之前做了很多攻略，所以旅行非常…
            </div>
          </div>
        </li>
        <li class="storylist_left">
          <!-- 2.1上部分图片 -->
          <div class="pic">
            <a href="javascript:void(0);">
              <img src="http://127.0.0.1:5050/story/story12.webp" alt="">
            </a>
          </div>
          <!-- 2.2下部分文字 -->
          <div class="storylist_nr">
            <!-- 2.21文字标题 -->
            <div class="storylist_title">
              <a href="javascript:void(0);" class="storylist_tt16">在凤凰，找到属于我的缘分</a>
              <div class="story_hudong">
                <span class="story_hot16">热度（10103）</span>
              </div>
            </div>
            <!-- 2.22房东名字 -->
            <div class="story_time">
              木鸟房东
              <a href="javascript:void(0);">凤凰随缘居客栈</a>
            </div>
            <!-- 2.23故事内容 -->
            <div class="story_wz">
                相遇：去年11月，直属上司升职，所有人都以为他的位置该由我接替，甚至我自己也这么认为。可是，老天总是喜欢看人笑话，三天后空降来一位新主管。可能是关于我的传言太多钻进了新主管的耳朵里，我…
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 3.分页按钮 -->
    <div class="w_page">
      <div class="page">
        <div class="yeshu">
          <a href="javascript:void(0);" class="currient">1</a>
          <a href="javascript:void(0);">2</a>
          <a href="javascript:void(0);">3</a>
          <a href="javascript:void(0);">4</a>
          <a href="javascript:void(0);">5</a>
        </div>
        <div class="prev">
          <a href="javascript:void(0);">下一页&nbsp;&nbsp;></a>
        </div>
        <div class="prev">
          <a href="javascript:void(0);">最后一页&nbsp;&nbsp;></a>
        </div>
      </div>
    </div>
  </div>
  <!-- 脚部 -->
  <footer id="footer"></footer>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  @charset "UTF-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

ul {
  list-style: none; }

a {
  text-decoration: none; }

body {
  background: #f0f0f0;
  font-family: microsoft yahei,Gotham,Helvetica Neue,Helvetica,Arial,sans-serif; }

.w_storybanner {
  width: 100%;
  height: 376px;
  position: relative; }
  .w_storybanner ul {
    width: 100%;
    height: 376px;
    position: absolute;
    left: 0;
    top: 0;
    background: url(http://127.0.0.1:5050/story/load.gif) #000 center center no-repeat;
    z-index: 0; }
    .w_storybanner ul li {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 376px; }
      .w_storybanner ul li a {
        display: block;
        width: 100%;
        height: 100%; }
      .w_storybanner ul li:first-child a {
        background: url(http://127.0.0.1:5050/story/story_banner_20151125_1.jpg) center top no-repeat; }
      .w_storybanner ul li:nth-child(2) a {
        background: url(http://127.0.0.1:5050/story/story_banner_20151125_2.jpg) center top no-repeat; }
      .w_storybanner ul li:nth-child(3) a {
        background: url(http://127.0.0.1:5050/story/story_banner_20151125_3.jpg) center top no-repeat; }
      .w_storybanner ul li:nth-child(4) a {
        background: url(http://127.0.0.1:5050/story/story_banner_20151125_4.jpg) center top no-repeat; }
      .w_storybanner ul li:nth-child(5) a {
        background: url(http://127.0.0.1:5050/story/story_banner_20151125_5.jpg) center top no-repeat; }

.tabbtn {
  position: absolute;
  left: 45%;
  top: 346px; }
  .tabbtn a {
    float: left;
    width: 30px;
    height: 10px;
    background: #ccc;
    margin-right: 10px; }
    .tabbtn a:hover {
      background: #f30; }
  .tabbtn .active {
    background: #f30; }

.s_mn_center {
  width: 1200px;
  margin: 0 auto;
  padding: 0 10px; }

.w_sub_title {
  width: 1180px;
  padding: 0 10px; }
  .w_sub_title:after {
    display: block;
    content: "";
    clear: both; }

.w_sub_title_left, .w_sub_title_right f14 {
  float: left;
  width: 50%; }

.w_sub_title_left h2 {
  line-height: 70px;
  height: 70px;
  float: left; }

.w_sub_title_left ul {
  float: left; }
  .w_sub_title_left ul li {
    float: left;
    font-size: 16px;
    line-height: 24px;
    padding: 22px 25px 0 0; }
    .w_sub_title_left ul li a {
      color: #888; }
    .w_sub_title_left ul li:hover a {
      color: #f30; }

.w_sub_title_right, .w_sub_title_right a {
  text-align: right;
  line-height: 70px;
  color: #888;
  font-size: 14px; }
  .w_sub_title_right a:hover {
    color: #f30; }

.storylist {
  margin-bottom: 20px;
  width: 100%; }
  .storylist:after {
    display: block;
    content: "";
    clear: both; }

.storylist_left {
  float: left;
  width: 373px;
  margin: 0 10px 20px 10px;
  background: #fff; }

.pic, .pic a > img {
  width: 100%;
  height: 200px; }

.storylist_nr {
  width: 360px;
  height: 170px;
  padding: 10px;
  margin: 0 auto; }

.storylist_title {
  width: 100%;
  height: 30px; }

.storylist_tt16 {
  float: left;
  font-size: 20px;
  max-width: 225px;
  overflow: hidden;
  color: #09f;
  height: 30px; }
  .storylist_tt16:hover {
    color: #f30; }

.story_hudong {
  float: right; }

.story_hot16 {
  float: right;
  background: url(http://127.0.0.1:5050/story/story_09.jpg) no-repeat;
  margin-left: 10px;
  padding-left: 20px;
  margin-top: 5px;
  font: 12px/16px "Microsoft YaHei";
  color: #888;
  text-align: right; }

.story_time {
  width: 100%;
  height: 30px;
  color: #888;
  font-size: 14px; }
  .story_time a {
    color: #888; }

.story_wz {
  width: 100%;
  height: 80px;
  color: #888;
  text-indent: 30px;
  font: 14px/20px "Microsoft YaHei"; }

.w_page {
  width: 100%;
  height: 70px;
  margin-bottom: 80px;
  padding-top: 30px; }

.page {
  float: right; }

.yeshu, .prev {
  float: left; }

.yeshu a {
  float: left;
  width: 40px;
  height: 40px;
  background: #ccc;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  margin-left: 20px; }
  .yeshu a:hover {
    background: #f30; }

.yeshu .currient {
  background: #f30; }

.prev {
  margin-left: 20px; }
  .prev a {
    display: block;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: #ccc;
    border-radius: 18px;
    padding: 0 15px;
    font-family: 'microsoft yahei','微软雅黑'; }
    .prev a:hover {
      background: #f30; }

</style>