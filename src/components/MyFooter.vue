<template>
<div>
  <div id="footer">
  <div class="social">
    <span class="social-wx icon-posi"></span>
    <span class="social-sina icon-posi"></span>
  </div>
  <ul class="link">
    <li class="link-item">
      <div class="hot-rent">热门短租:</div>
      <div class="link-list">
        <a href="javascript:;">北京短租房</a>
        <a href="javascript:;">上海短租</a>
        <a href="javascript:;">重庆短租房</a>
        <a href="javascript:;">天津短租房</a>
        <a href="javascript:;">青岛短租房</a>
        <a href="javascript:;">秦皇岛短租房</a>
        <a href="javascript:;">三亚短租房</a>
        <a href="javascript:;">大连短租房</a>
        <a href="javascript:;">威海短租房</a>
        <a href="javascript:;">日照短租房</a>
        <a href="javascript:;">烟台短租房</a>
        <a href="javascript:;">厦门短租房承</a>
        <a href="javascript:;">德短租房</a>
        <a href="javascript:;">大理短租房</a>
      </div>
      <div class="extend">+展开</div>
    </li>
    <li class="link-item">
      <div class="hot-rent">短租公寓推荐：</div>
      <div class="link-list">
        <a href="javascript:;">珠海短租房公寓</a>
        <a href="javascript:;">中山短租房公寓</a>
        <a href="javascript:;">郑州短租房公寓</a>
        <a href="javascript:;">张家界短租房公寓</a>
        <a href="javascript:;">西双版纳短租房公寓</a>
        <a href="javascript:;">西宁短租房公寓</a>
        <a href="javascript:;">香港短租房公寓</a>
        <a href="javascript:;">西安短租房公寓</a>
        <a href="javascript:;">厦门短租房公寓</a>
        <a href="javascript:;">无锡短租房公寓</a>
      </div>
      <div class="extend">+展开</div>
    </li>
    <li class="link-item">
      <div class="hot-rent">友情链接</div>
      <div class="link-list">
        <a href="javascript:;">火车票资讯</a>
        <a href="javascript:;">成都租房</a>
        <a href="javascript:;">找房子</a>
        <a href="javascript:;">汽车时刻表查询</a>
        <a href="javascript:;">酒店预订网</a>
        <a href="javascript:;">装修网</a>
        <a href="javascript:;">旅游攻略</a>
        <a href="javascript:;">景点门票 </a>
        <a href="javascript:;">台湾旅游</a>
        <a href="javascript:;">装修</a>
        <a href="javascript:;">海外房产</a>
        <a href="javascript:;">广州房产网</a>
        <a href="javascript:;">装修网</a>
        <a href="javascript:;">租房网 </a>
        <a href="javascript:;">深圳房产</a>
      </div>
      <div class="extend">+展开</div>
    </li>
  </ul>
  <div class="footer-nav">
    <div class="footer-nav-div1">
      <a href="javascript:void(0)">免责声明</a>
      <a href="javascript:void(0)">平台服务协议</a>
      <a href="javascript:void(0)">交易规则</a>
      <a href="javascript:void(0)">关于我们</a>
      <a href="javascript:void(0)">联系我们</a>
      <a href="javascript:void(0)">法律声明</a>
      <a href="javascript:void(0)">新手指南</a>
      <a href="javascript:void(0)">帮助中心</a>
      <a href="javascript:void(0)">短租房</a>
      <a href="javascript:void(0)">新闻资讯</a>
      <a href="javascript:void(0)">媒体报道</a>
    </div>
    <div class="footer-nav-div2">
      客服电话：400-056-0055 或 010-89180879
      <span class="m10">客户服务：service@muniao.com</span>
      <span class="m10">意见反馈：feedback@muniao.com</span>
    </div>
    <div class="footer-nav-div3">
      网站备案/许可证号：京ICP备12043553号-3
      <a href="javascript:void(0);">京公网安备11010502037765号</a>
      <a href="javascript:(0);">营业执照编号 104555056</a>
      北京爱游易科技有限公司
    </div>
    <div class="footer-nav-div4">
      <ul class="footer-nav-div4-ul">
        <li>
          <a href="javascript:void(0);">
            <img src="http://127.0.0.1:5050/footer/pic1.jpg" alt="">
          </a>
        </li>
        <li>
          <img src="http://127.0.0.1:5050/footer/pic2.jpg" alt="">
        </li>
        <img src="http://127.0.0.1:5050/footer/pic3.jpg" alt="">
        <li>
          <img src="http://127.0.0.1:5050/footer/pic4.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  /* 简单reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

ul {
  list-style: none; }

a {
  text-decoration: none; }
  /* 脚部 */
  #footer{
    width:100%;
    background:#333;
    height:auto;
  }
  /* 微信微博部分 */
  .social{
    margin:0 auto;
    width: 198px;
    height: 109px;
    padding-top:20px;
  }
  /* 背景图片基础样式 */
  .icon-posi{
    display: inline-block;
    width:89px;
    height:89px;
    cursor: pointer;
  }
  /* 微信背景图片 */
  .social-wx{
    background:url(http://127.0.0.1:5050/footer/footer_weibo.png) no-repeat;
  }
  /* 微博背景图片 */
  .social-sina{
    background:url(http://127.0.0.1:5050/footer/weixin.png) no-repeat;
    margin-left:15px;
  }

  /* 第二部分 链接列表 */
  .link-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 140px;
  }
  /* 设置字体 */
  .hot-rent{
    color:#555;
    font-size:14px;
    font-weight: 500;
  }
  /* ul样式 */
  .link{
    border-bottom: 1px solid #444;
    padding:35px 0;
  }
  /* 链接列表 */
  .link-list>a{
    font-size:12px; 
    color:#555;
  }
  .link-list{
    text-align: left;
    line-height: 24px;
  }
  /* 扩展 */
  .extend{
    color:#555;
    font-size:14px;
  }
  /* 第三部分 导航 */
  .footer-nav{
    width:1200px;
    margin:0 auto;
    padding:30px 0;
  }
  .footer-nav-div1{
    text-align: center;
  }
  .footer-nav-div1>a{
    color:#888;
    font:12px "Microsoft YaHei";
  }
  .footer-nav-div1>a~a::before{
    display: inline-block;
    content:"|";
    padding:0 10px;
  }
  /* 第二行样式 */
  .footer-nav-div2{
    text-align:center;
    color:#888;
    font:12px "Microsoft YaHei";
    line-height: 24px;
  }
  .m10{
    margin:0 10px;
  }
  /* 第三行样式 */
  .footer-nav-div3{
    text-align: center;
    color:#888;
    font:12px "Microsoft YaHei";
    line-height: 24px;
  }
  .footer-nav-div3>a{
    color:#888;
    font:12px "Microsoft YaHei";
  }
  .footer-nav-div3>a:hover{
    color:#fff;
  }
  /* 第四行样式 */
  .footer-nav-div4{
    width:580px;
    margin:20px auto;
  }
  /* ul样式 */
  .footer-nav-div4-ul{
    width:100%;
  }
  .footer-nav-div4-ul>li{
    float:left;
    width:150px;
  }
</style>