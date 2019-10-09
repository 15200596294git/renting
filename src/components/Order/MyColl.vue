<template>
  <div class="userR">
    <!-- 我的收藏 -->
    <div class="uinfoT">
      <h4 style="color:#444">我的收藏</h4>
    </div>
    <pg-buttons></pg-buttons>
  </div>
</template>
<script>
// 引入按钮组
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
*{margin:0;padding:0}
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
/* 头 */
.uinfoT{
  height: 32px;
  border-bottom: 2px solid #f4650a;
}
/* h4样式 */
.uinfoT h4{
  color: #444;
  border-top: 1px solid #dadde4;
  border-left: 1px solid #dadde4;
  border-right: 1px solid #dadde4;
  width: 110px;
  background: #f9f9f9;
  height: 31px;
  line-height: 31px;
  border-radius: 10px 10px 0 0 ;
}
/* 修改组件样式 */
>>>.upage666{
  margin: 0;
}
</style>