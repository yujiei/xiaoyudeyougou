// pages/category/index.js

import request from "../../utils/request.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
        current:0,
        list:[]
  },

// 生命周期函数--监听页面加载
  onLoad:function(options){
    // 请求分类页的数据
    requset({
      url:"/categories"
    }).then(res =>{
      const {message} = res.data;
      this.setData({
        list:message
      })
    })
  },
  // 点击切换左边菜单栏时候触发
  handleClick(e) {
    // index参数
    const { index } = e.currentTarget.dataset;

    // 保存当前点击的索引到data
    this.setData({
      current: index
    })
  }

})