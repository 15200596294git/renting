// 
$(function () {
  // 1.查找触发事件元素
  $(".middle-ul")
    // 2.绑定事件是、处理函数
    .on("click", "a", function () {
      // 3.查找修改元素
      // 为当前元素添加active属性
      $(this).addClass("active")
        // 为它的其它父元素的第一个子级元素取出active
        // console.log($(this).parent().siblings().find("a"));
        .parent().siblings().find("a").removeClass("active");
      // 4.修改元素
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
    })
})
// 等css级img加载完成



