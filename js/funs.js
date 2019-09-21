// 封装所有函数
var funs = {
  // 1.获取头部
  getHeader: function(callback){
    return new Promise(function(resolve,reject){
      $.ajax({
        url:"header.html",
        type:"get",
        success: function(result){
          // 请求发送成功后调用传递过的参数
          resolve(result);
        }
      });
    });
  },
  // 2.获取脚部
  getFooter: function(callback){
    return new Promise(function(resolve,reject){
      $.ajax({
        url:"footer.html",
        type:"get",
        success: function(result){
          // 要做的事
          resolve(result);
        }
      });
    });
  },
  // 3.获取特色页
  getFeatures: function(callback){
    return new Promise(function(resolve,reject){
      $.ajax({
        url:"features.html",
        type:"get",
        success: function(result){
          resolve(result);
        }
      })
    })
  }
}