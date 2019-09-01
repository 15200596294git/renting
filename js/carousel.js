// 轮播图js
// 第一：自动轮播
// 1.当页面加载完成时(当能够获取DOM时)
window.onload = function(){
  //  一：轮播图
  // 1.创建下标0
  var i = 0;
  // 2.定时器的时间参数
  var duration = 500;
  // 3.轮播图图片数量
  var liCount = 4;
  // 4.获取轮播图项目列表
  var ulImgs = document.getElementById("ul_imgs");
  // 4.1获取单个lis项目
  var lis = ulImgs.children;
  // 5.获取轮播指示器
  var list = document.getElementsByClassName("tabbtn")[0];
  // 6.获取；轮播指示器元素数组
  var as = list.children;
  // 6.1获取li指示器
  var chi = list.children;
  // 7.创建一个函数(控制图片轮播)
  function moveTo(to){
    // 7.1如果未传入参数(自动播放)
    console.log(to);
    if(to==undefined){
      // 7.2马上显示下一个，隐藏前一个
      // 7.21当i ++后是4时
      if(i==4){
        lis[0].style.display = "block";
        chi[0].className = "active";
        lis[4].style.display = "none";
        chi[4].className = "";
        i = -1;
      }else{
        lis[i+1].style.display = "block";
        chi[i+1].className = "active";
        lis[i].style.display = "none";
        chi[i].className = "";
      }
      i++; 
    }else{
      // 7.3否则传入参数(点击指示器时触发事件，将下标传入，立即切换到当前图片，修改i的值)
      for(var c=0;c<lis.length;c++){
        
        if(to==c){
          lis[c].style.display = "block";
          chi[c].className = "active";
          console.log(lis[c]);
        }else{
          console.log(c);
          lis[c].style.display = "none";
          chi[c].className = "";
        }
      }

    }
  }
  // 二、自动轮
  var timer = setInterval(function(){
    moveTo();
  },3000);
  // 三、点击指示器
  // 1.获取触发事件元素
  list.addEventListener("click",function(e){
    // 1.1如果为a，触发事件
    var a = e.target;
    if(a.tagName=="A"){
      // 1.2调用函数 
      var num = a.getAttribute("data-target");
      // 1.3将当前元素添加active
      moveTo(num); 
    }
  });
  // 四、鼠标移入移出事件
  // 1.获取外层div
  var div = document.getElementsByClassName("w_storybanner")[0];
  // 1.绑定事件处理函数(鼠标移出)
  div.onmouseout = function(){
    // 1.1开始定时器
    timer = setInterval(function(){
      moveTo();
    },3000)
  }
  // 2.绑定事件处理函数(鼠标移入)
  div.onmouseover = function(){
    // 清除定时器
    console.log(1);
    clearInterval(timer);
  }
}