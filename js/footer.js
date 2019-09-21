// 引入头部，发送ajax请求
//使用Jquery封装的Ajax发送请求
// 1.用$符号包裹所有代码，意思是等页面DOM元素加载完成时发送AJAx请求
$(function(){
    // 创建函数
   function callback(result){
    // 将result放到footer
    $(result).replaceAll("#footer");
    // 添加样式
    $("head").append(`<link rel="stylesheet" href="../css/footer.css">`);
  }
  // 调用封装的函数
  funs.getFooter().then(callback);
  });
  