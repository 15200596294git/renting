<template>
  <div class="myorder">
    <!-- 上 -->
    <div class="userR">
      <!-- 订单 -->
      <div class="myordercon">
        <ul>
          <li>
            <a href="javascript:void(0);">全部订单</a>
          </li>
          <li>
            <a href="javascript:void(0);">已付款</a>
          </li>
          <li>
            <a href="javascript:void(0);">待入住</a>
          </li>
          <li>
            <a href="javascript:void(0);">未付款</a>
          </li>
          <li>
            <a href="javascript:void(0);">退款</a>
          </li>
          <li>
            <a href="javascript:void(0);">等待确认</a>
          </li>
          <li>
            <a href="javascript:void(0);">取消订单</a>
          </li>
        </ul>
        <table style="border-left: 1px solid #ddd;" width="756" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="202" height="30" align="center" valign="middle" class="myordertd1">房间</td>
              <td width="202" height="30" align="center" valign="middle" class="myordertd1">订单编号</td>
              <td width="202" height="30" align="center" valign="middle" class="myordertd1">房款</td>
              <td width="202" height="30" align="center" valign="middle" class="myordertd1">时间</td>
              <td width="202" height="30" align="center" valign="middle" class="myordertd1">状态</td>
              <td width="202" height="30" align="center" valign="middle" class="myordertd1">房东/房客电话</td>
              <td width="202" height="30" align="center" valign="middle" class="myordertd1">操作</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 分页条 -->
      <pg-buttons></pg-buttons>
    </div>
    <!-- 下 -->
    <div class="uhint">
      <h4>
        <img src="http://127.0.0.1:5050/order_admin/bghint.jpg" alt="">
        温馨提示
      </h4>
      <div class="clear"></div>
      <!-- 清除浮动 -->
      <p>
        当房客与房东确认有房，并且在线支付订金后，房东不得单方面无理由取消订单，否则给予房间下线的处理。特殊情况必须退房的，请给房客安排合适房间居住。
      </p>
    </div>
  </div>
</template>
<script>
// 引入分页按钮
import PgButtons from './PgButtons'
export default {
  data() {
   return{}
  },
methods: {
  
  },
watch: {
  
  },
components:{
  "pg-buttons":PgButtons
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
  ul{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  /* 设置该组件浮动 */
  .myorder{
    width:769px;
    height: auto;
    float: right;
  }
  /* 订单详情 */
  .userR{
    float: right;
    width: 769px;
    height: auto;
  }
  /* 订单详情 */
  .myordercon{
    border-bottom: 1px dashed #dad3d4;
    padding-bottom: 20px;
    width: 100%;
    margin: 10px auto;
  }
  /* 订单详情的li的样式 */
  .myordercon li{
    border: 1px solid #dad3d4;
    border-bottom: none;
    background: #f9f9f9;
    width:100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    font-size: 14px;
    float: left;
    margin-right: 3px;  
  }
  .myordercon li a{
    color:#666;
  }
  /* table表格 */
  .myordertd1{
    border-top:2px solid #f4650a;
    border-bottom: 1px solid #f4d0a5;
    background: #fff8ec;
  }
  /* 结束时的有边框 */
  .myordertd2{
    border-top:2px solid #f4650a;
    border-bottom: 1px solid #f4d0a5;
    background: #fff8ec;
    border-right: 1px solid #f0f0f0;
  }
  /* 分页条 */
  .uhint{
    float:right;
    border: 1px solid #f4d0a5;
    background: #fff8ec;
    width: 749px;
    height: auto;
    padding: 5px 10px 10px 10px;
    margin: 10px auto;
  }
  /* 标题左浮 */
  .uhint h4{
    float: left;
    font-size: 14px;
    font-weight: bold;
  }
  /* 清除浮动 */
  .clear{
    clear:both;
    overflow: hidden;
  }
  .uhint p{
    margin-left: 40px;
    line-height: 24px;
    text-align: left;
  }
</style>