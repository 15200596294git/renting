// 引入头部，发送ajax请求
//使用Jquery封装的Ajax发送请求
// 1.用$符号包裹所有代码，意思是等页面DOM元素加载完成时发送AJAx请求
$(function(){
    // 2.用Jquery分装的AJAX
    $.ajax({
      // 3.请求的url,html页面的相对路径
      url:"footer.html",
      // 4.请求方式,get,获取数据
      type:"get",
      // 5.当ajax请求发送成功时，执行这个函数
      // 6.接收到返回数据，用形参result接收，(信任)
      success:function(result){
        // 7.用Jquery函数replaceAll,将请求回的数据放到id为 header 的元素里
        $(result).replaceAll("#footer");
        // 8.测试：打印接收到的数据，(看数据是否接收到)
        
        }
    })
  });
  