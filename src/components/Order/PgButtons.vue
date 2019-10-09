<template>
  <div class="upage666">
        <div style="text-align:center;">
          <ul id="demo1" class="pagination">
            <li class="first disabled">
              <a href="javascript:void(0);">第一页</a>
            </li>
            <li class="prev disabled">
              <a href="javascript:void(0);">
                <i class="arrow arrow2"></i>
                上一页
              </a>
            </li>
            <li class="page active">
              <a href="javascript:void(0);">1</a>
            </li>
            <li class="next disabled">
              <a href="javascript:void(0);">
                下一页
                <i class="arrow arrow3"></i>
              </a>
            </li>
            <li class="last disabled">
              <a href="javascript:void(0);">末页</a>
            </li>
          </ul>
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
*{
  margin:0;padding:0;
}
a{
  text-decoration: none;
}
  .upage666{
    margin: 10px auto;
    height: auto;
  }
  /* 分页条ul列表 */
  .pagination{
    display: inline-block;
  }
  .pagination li{
    display: inline;
  }
  /* 所有的a样式 */
  .pagination>li>a{
    position: relative;
    float: left;
    padding:6px 12px;
    line-height: 1.42857143;
    border: 1px solid #ddd;
    color: #666;
  }
  /* 禁用时a的样式 */
  .pagination>.disabled>a{
    color: #999;
    background-color: #fff;
    border-color: #ddd;
    cursor: not-allowed;
  }
  /* 分页条第一个按钮的a标签样式(第一页) */
  .pagination>li:first-child>a{
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-color: #ddd;
  }
  /* 分页箭头 上一页 */
  .arrow2{
    border-left: 5px dashed transparent;
    border-bottom: 5px dashed transparent;
    border-top: 5px dashed transparent;
    border-right: 5px solid #ccc;
    margin: -1px 8px 0px 0;
  }
  .arrow{
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  /* 选中时的a */
  .pagination>.active>a{
    z-index: 0;
    color:#fff;
    background-color:#f4650a;
    border-color:#f4650a;
    cursor:default;
  }
  /* 分页箭头 下一页 */
  .arrow3{
    border-left: 5px dashed #ccc;
    border-bottom: 5px dashed transparent;
    border-top: 5px dashed transparent;
    border-right: 5px solid transparent;
    margin: -1px 0 0px 8px;
  }
  /*  温馨提示 */
  .uhint{
    border: 1px solid #f4d0a5;
    background:#fff8ec;
    float: right;
    width: 749px;
    height: auto;
    padding: 5px 10px 10px 10px;
    margin: 10px auto;
  }
</style>