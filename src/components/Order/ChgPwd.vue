<template>
  <div class="userR">
    <!-- 头 -->
    <div class="upasswordT">
      <h4>修改密码</h4>
    </div>
    <!-- 下部分 -->
    <div style="background-color:#fff;padding-top:20px;">
      <table width="100%" cellspacing="0" cellpadding="0" style="padding-top:20px;">
        <tbody>
          <tr>
            <td width="124" height="40" align="right" valign="middle">旧密码：</td>
            <td width="276" height="40" valign="middle" align="left">
              <input type="text" class="upasswordinput passwordEdit1">
              <span class="aRed">*</span>
            </td>
          </tr>
          <tr>
            <td width="124" height="40" align="right" valign="middle">新密码：</td>
            <td width="276" height="40" valign="middle" align="left">
              <input type="text" class="upasswordinput passwordEdit1">
              <span class="aRed">*</span>
            </td>
          </tr>
          <tr>
            <td width="124" height="40" align="right" valign="middle">确认密码：</td>
            <td width="276" height="40" valign="middle" align="left">
              <input type="text" class="upasswordinput passwordEdit1">
              <span class="aRed">*</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="text-align:center">
        <a href="javascript:void" class="userinfo_tijiao">保存设置</a>
      </div>
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
  .upasswordT{
    height:32px;
    border-bottom: 2px solid #f4650a;
  }
  /* 设置h4样式 */
  .upasswordT h4{
    width: 80px;
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
  table{
    border-collapse: collapse;
  }
  /* 设置输入框样式 */
  .passwordEdit1 {
    border-radius: 3px;
  }
  .upasswordinput{
    border: 1px solid #dcdcdc;
    width: 230px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
  /* 红星 */
  .aRed{
    color: #f00;
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
</style>