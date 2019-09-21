// 引入头部，发送ajax请求
//使用Jquery封装的Ajax发送请求
// 1.用$符号包裹所有代码，意思是等页面DOM元素加
$(function () {
	// 创建函数
	function callback(result) {
		$(result).replaceAll("#header");
		// 在head中添加样式
		$("head").append(`<link rel="stylesheet" href="../css/header.css"><script src="../js/event.js"><script>`);
	}
	// 调用封装的函数
	funs.getHeader().then(callback);
});