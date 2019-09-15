// 当页面DOM元素加载成功是时，操作DOM元素
$(function(){
  // 一、鼠标在li移入和移出
  // 1.创建全局定时器变量 
  var tiemr;
  // 2.为触发事件的li绑定鼠标移入移出事件
  $("#list_tab>ul>li").hover(
    // 鼠标移入
    function () {
      // 鼠标移入时，关闭其他显示的div
      console.log($("#w_listect>div[style!=none]"));
      $("#w_listect>div[style!=displaynone]").hide();
      // 获取当前触发事件元素
      var $this = $(this);
      // 获取该元素所在的父元素下的下标
      var $index = $this.index();
      // 将对应的div显示
      $(`#w_listect>div:eq(${$index - 1})`).show();
    },
    // 鼠标移出
    function(){
      // 获取当前触发事件元素
      var $this = $(this);
      // 获取当前元素所在父元素下的下标
      var $index = $this.index();
      // 创建定时器，400毫秒后隐藏div
      timer = setTimeout(function(){
        $(`#w_listect>div:eq(${$index - 1})`).hide();
      },400)
    }
  );
  // 3.为显示的div绑定鼠标移入移出事件
  // 查找元素并绑定事件
  $("#w_listect>div").hover(
    // 绑定鼠标移入事件
    function(){
      // 鼠标移入div清除定时器，不隐藏
    clearTimeout(timer);
    timer = null;
  },
  // 鼠标移出事件
    function () {
      // 鼠标移出隐藏
      $(this).hide();
    }
  );
  // 二、点击小箭头，选择人数
  //  1.查找触发事件元素，绑定事件处理函数
  $(".s_mn_search_number>.s_mn_number_select>span").click(function(){
    // 2.查找触发事件元素
    $(this).parent().next().toggle();
  });
  // 为人数绑定单机事件，选中多少人就将人数显示
  //  1.找到触发事件元素并且绑定单机事件
  $(".s_mn_search_number>.s_mn_number_selectlist").click(function(e){
    // 2.如果当前元素为 a ，触发事件
    var $tag = $(e.target);
    if($tag.is("a")){
      // 3.获取当前元素内容
      var $html = $tag.html();
      var $this = $(this);
      // 4.查找修改元素  绑定事件元素的上一个兄弟元素的子元素集合的第一个子元素的 内容 改为  当前点击元素
      $this.prev().children().first().html($html);
      // 5.隐藏当前元素
      $this.hide();
    }
  });
  // 三、鼠标悬浮样式
  // 1.芝麻信用
  // 1.1获取触发事件元素并且绑定事件处理函数
  $(".list_zhitip>:not([style$=none])").hover(
    function(){
    // 1.2查找修改元素
    // 当前元素的父元素的最后一个子元素
    $(this).parent().children().last().toggle();
    // $(this).parent().last().show();
  });
  $(".list_zhitip>.list_zhimatip").hover(function(){
    // 显示
    $(this).toggle();
  })
  // 2.地主之谊
  // 3.微信扫码
  // 3.1获取触发事件元素并且绑定事件处理函数
  $(".house_details_r>.weblt").hover(function(){
    // 查找修改元素
    $(this).prev().toggle();
  })
  // 为二维码绑定鼠标移入事件
  .prev().hover(function(){
    $(this).toggle();
  })
});
