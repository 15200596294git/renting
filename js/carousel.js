// 轮播图js
// 第一：自动轮播
// 1.当页面加载完成时(当能够获取DOM时)
window.onload = function(){
  // 2.获取控制轮播图的li元素s
  var lis = document.querySelectorAll(".w_storybanner>ul>li");
  // 3.定时器，每间隔500ms切换
  // 3.1创建下标0
    // 3.2创建一个函数，切换display
    function toggle(i=0){
      // 如果i为0，先隐藏最后一个li
      setInterval(function(){
      if(i==4){
        lis[0].style.display = "block";
        lis[i].style.display = "none";
        i = -1;
      }else{
      // 3.3将当前li隐藏
      lis[i].style.display = "none";
      // 3.4将下一个li显示
      lis[i+1].style.display = "block";
    }
    i++;
    // 3.5如果i为5，隐藏最后一个元素 i-1
    if(i==5){
      lis[i-1].style.display = "none";
    }
  },3000)
  }
  toggle();
  // 2.指示器轮播
  // 1.获取触发事件元素
  var div = document.querySelectorAll(".tabbtn>a");
  console.log(div);
  // 2.为元素绑定事件
  for(var a of div){
    a.onclick = function(){
      console.log(this.getAttribute("data-target"));
      var i = this.getAttribute("data-target");
      toggle(i)
    }
  }
}
