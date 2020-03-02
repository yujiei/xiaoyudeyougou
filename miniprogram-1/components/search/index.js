
Component({
    // 组件的属性列表      属性： property
    properties:{
      // 组件可传递的值
      keyword :{
        type : String,
        value : "搜索"     //这个是默认值
      },
      // 控制文字展示的位置
      align:{
        type : String,
        value : "center"
      }
    },
    // 外部的： external
    // 外部扩展的样式，声明了可以接收background这个样式
     externalClasses:['background',"align"],
     //组件的初始数据
     data:{

     },
     // 组件的方法列表
     methods : {

     }
})
