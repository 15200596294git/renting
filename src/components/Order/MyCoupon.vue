<template>
  <div class="userR">
    <!-- 上 -->
    <div class="upasswordT">
      <ul class="user-list">
        <li class="active">
          <a href="javascript:void(0);">可用优惠券▼</a>
        </li>
        <li>
          <a href="javascript:void(0);">已用优惠券</a>
        </li>
        <li>
          <a href="javascript:void(0);">过期优惠券</a>
        </li>
        <li>
          <a href="javascript:void(0);">变动明细</a>
        </li>
        <li>
          <a href="javascript:void(0);">兑换优惠券</a>
        </li>
      </ul>
    </div>
    <!-- 下 -->
    <div style="background-color:#ffffff; position:relative;margin-bottom:30px;padding-top:30px; min-height:582px;"></div>
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
  .userR{
    float:right;
    width: 769px;
    height: auto;
  }
  .upasswordT{
    height:32px;
    border-bottom: 2px solid #f4650a;
  }
  /* 优惠券列表 */
  .user-list li{
    float: left;
    width: 120px;
    height: 31px;
    line-height: 32px;
    background-color: #fff;
    border-radius: 10px 10px 0 0 ;
    border-top: 1px solid #dadde4;
    border-left: 1px solid #dadde4;
    text-align: center;
  }
  .user-list li a{
    font-size: 14px;
    font-weight: bold;
    color:rgb(68, 68, 68);
  }
  /* 访问状态下的样式 */
  .user-list .active a{
    color: rgb(244, 101, 10);
  }
</style>