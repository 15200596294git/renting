<template>
  <div class="my-memberBoxBox">
    <ul class="user-centerTab">
      <li>我的会员</li>
    </ul>
    <div class="user-centerContent">
      <div class="member-grade">
        <img src="http://127.0.0.1:5050/Order_admin/grade_1.jpg" alt="">
        <div class="member-gradeDes">
          <p class="grade-title">您的会员等级</p>
          <p class="grade-name grade-1">普通会员</p>
        </div>
      </div>
      <div class="member-gradeGood">
        <h5>您的等级权益</h5>
        <ul class="grade-goodList">
          <li>可享受签到积分每月1次5倍积分奖励</li>
        </ul>
        <a href="javascript:void(0);" class="gradeRule-btn">查看登记规则</a>
      </div>
      <img src="http://127.0.0.1:5050/Order_admin/muniao_member.jpg" alt="" class="member-banner">
    </div>
  </div>
</template>
<script>
export default {
  data() {
   return{}
  },
methods: {
  
  },
watch: {
  
  },
computed: {
  
  },
created() {
  
  },
mouted() {
  
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}
a{
  text-decoration: none;
}
ul{
  list-style-type: none;
}
  /* 最外层div */
  .my-memberBoxBox{
    float: right;
    width: 769px;
    height: auto;
    margin: 20px auto 0;
  }
  /* ul样式 */
  .user-centerTab{
    width: 100%;
    height: 32px;
    border-bottom : 2px solid #ff9180;
  }
  .user-centerTab li{
    float: left;
    display: inline;
    padding: 0 30px;
    line-height: 31px;
    border: 1px solid #dadde4;
    border-bottom: none;
    background: #ffffff;
    font-size: 14px;
    color: #000000;
    border-radius: 10px 10px 0 0 ;
  }
  /* 主体部分 */
  .user-centerContent{
    padding: 18px 20px 40px;
    background: #ffffff;
    color: #4e4e4e;
    font-size: 14px;
    font-family: "微软雅黑",X-LocaleSpecific,Ubuntu,Droid Sans,sans-serif;
  }
  /* 会员登录 */
  .member-grade{
    padding: 10px 10px 16px;
    border-bottom: 1px solid #d5d5d5;
    height: 44px;
  }
  /* 清除浮动 */
  .member-grade::after{
    content: "";
    display: block;
    clear: both;
  }
  /* 设置图片 */
  .member-grade img{
    float: left;
    display: inline;
    width: 37px;
    height: 37px;
    margin-top: 4px;
  }
  .member-gradeDes{
    float:left;
    display: inline;
    margin-left: 16px;
  }
  /* 设置p的样式 */
  .member-grade p{
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    color: #555555;
  }
  .member-grade p.grade-name {
    font-size: 14px;
    color: #b7b7b7;
    text-align: left;
}
/* 登记权益 */
.member-gradeGood{
  padding: 16px 10px 0;
  text-align: left;
}
/* h5的样式 */
.member-gradeGood h5{
  height: 26px;
  line-height: 26px;
  font-size: 16px;
  color: #555555;
  font-weight: inherit;
}
.grade-goodList{
  margin-top: 6px;
}
.grade-goodList li{
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #888888;
}
/* 查看登记规则 */
.gradeRule-btn{
  display: block;
  width: 146px;
  height: 40px;
  margin-top:36px;
  line-height: 40px;
  text-align: center;
  background: #ff9180;
  border-radius: 6px;
  font-size:16px;
  color: #fff;
}
/* img的样式 */
.member-banner{
  display: block;
  width: 710px;
  margin: 40px 10px 0;

}
</style>