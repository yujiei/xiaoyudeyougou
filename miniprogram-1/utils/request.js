



 const request = (config = {}) =>{
    if(config.url.search(/^http/) === -1){
      config.url = request.defaults.baseURL + config.url;
    }
   return new Promise((resolve, reject) => {
     // 发起请求
     wx.request({
       ...config,
       success(res) {
         resolve(res);
       },
       fail(res) {
         reject(res);
       },
       // 不管成功失败都会执行
       complete(res) {
         // 执行错误的拦截器
         request.errors(res);
       }
     })
   })
 }
 
 //request的默认属性
request.defaults = {
  // 基准路径
  baseURL: ""
}
//存储错误的回调函数.默认是一个空的函数
request.errors = () => { }

//  request的错误拦截
request.onError = (callback) => {
  // 判断callback必须是一个函数
  if (typeof callback === "function") {
    // 如果是函数，保存到errors
    request.errors = callback
  }
}

export default request;