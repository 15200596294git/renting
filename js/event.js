// 
$(function () {
  // 1.查找触发事件元素
  $(".middle-ul")
    // 2.绑定事件是、处理函数
    .on("click", "a", function () {
      // 为每个个a绑定
      var i = $(this).index();
      
      
    });
  // // 头部的按钮绑定时间，触发灰色背景框和登录页面
  // 1.查找触发事件元素
  $(".right>[class^=right]")
    // 2.绑定实际处理函数
    .click(function () {
      // 3.查找要修改元素
      // 删除类名
      $(".newa_login_main").removeClass("d-none");
      // 添加过渡
      // 删除
      // setTimeout(function(){},800)
      // 4.修改元素
      $(".bg-all-dark").removeClass("d-none");
    });
  // 绑定登录框中的小叉号
  // 1.查找触发事件元素
  $(".newa_login_main>.newa_close")
    // 2.绑定事件处理函数
    .click(function () {
      // 3.查找修改元素
      // 4.修改元素
      $(".bg-all-dark").addClass("d-none");
      $(this).parent().addClass("d-none");
    });
    $(".newa_login_tab>li").click(function(){
      console.log(this);
      // 将当前添加类名
      $(this).addClass("newa_login_t_active")
      // 另一个兄弟移除类名
      .siblings().removeClass("newa_login_t_active");
      // 找到当前元素的父元素的下面的兄弟元素
      var $divs = $(`.newa_login_con`);
      // 如果隐藏，打开，
      for(var div of $divs){
        if($(div).is(":hidden")){
          // 显示
          $(div).show()
          // 添加样式
        }else{
          // 否则，隐藏
          $(div).hide();
        }
      }
    });
    // 
})
// 等css级img加载完成



