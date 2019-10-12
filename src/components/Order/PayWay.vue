<template>
  <div class="userR">
    <div class="unifoT">
      <h4>收款方式</h4>
    </div>
    <form action="" style="background-color:#ffffff;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tbody>
          <tr>
            <td width="100" height="40" align="right" valign="middle" bgcolor="#f5f5f5" class="uinfotd">
              <span class="aRed">*</span>
              房东名称：
            </td>
            <td width="655" height="40" align="left" valign="middle" class="uinfotd">
              <input type="text" value="Capon-MN146" class="uinfoinput">
            </td>
          </tr>
          <tr>
            <td width="100" height="40" align="right" valign="middle" bgcolor="#f5f5f5" class="uinfotd">
              <span class="aRed">*</span>
              收款方式：
            </td>
            <td width="655" height="40" align="left" valign="middle" class="uinfotd">
              <select name="" id="">
                <option value="" style="color:#aaa">请选择</option>
                <option value="1">支付宝</option>
                <option value="3">微信</option>
              </select>
            </td>
          </tr>
           <tr>
            <td width="100" height="40" align="right" valign="middle" bgcolor="#f5f5f5" class="uinfotd">
              手机号码：
            </td>
            <td width="655" height="40" align="left" valign="middle" class="uinfotd">
              <input type="text" value="15575446613" disabled class="uinfoinput" >
              <input type="text" class="teltext mT15" style="width:68px; margin-top:0;margin-left:5px;">
              <a href="javasript:void(0);" class="aGray">获取验证码</a>
              
            </td>
          </tr>
          
        </tbody>
      </table>
    </form>
    <div style="text-align:center">
        <a href="javascript:void" class="userinfo_tijiao">保存设置</a>
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
.userR{
  float: right;
  width: 769px;
  height: auto;
}
/* 标题 */
  .unifoT{
    height:32px;
    border-bottom: 2px solid #f4650a;
  }
  /* 设置h4样式 */
.unifoT h4{
  width: 110px;
  height:31px;
  line-height: 31px;
  border-top: 1px solid #dadde4;
  border-left: 1px solid #dadde4;
  border-right: 1px solid #dadde4;
  background: #f9f9f9;
  border-radius: 10px 10px 0 0 ;
  font-size: 14px;
  font-weight: bold;
}
/* 设置边框 */
.uinfotd{
  border-right: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  line-height: 40px;
}
/* 房东昵称 */
.uinfoinput{
  border: 1px solid #dcdcdc;
  width: 150px;
  height: 24px;
  margin-left: 5px;
}
/* 收款方式 select */
select{
  margin-left: 5px;
  height: 26px;
  border-color: #dcdcdc;
  color: #444444;
  border: solid 1px #dcdcdc;
}
/* 验证码输入框 */
.teltext {  
  border: 1px solid #ddd;
  height: 24px;
  width: 230px;
  text-indent: 5px;
  color: #666;
}
/* 获取验证码按钮 */
.aGray{
  
  background:#eee;
  width:71px;
  height:26px;
  padding:5px;
  color:#666;
  border: 1px solid #ddd;
}
/* 保存设置 */
.userinfo_tijiao{
  display: inline-block;
  width: 133px;
  height: 36px;
  text-align: center;
  background-color: #FF5C2E;
  line-height: 36px;
  border-radius:2px;
  color:#fff;
  font-size: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  margin-top: 30px;
  margin-bottom: 30px;
}
.aRed{
  color: #f00;
  text-decoration: none;
}
</style>