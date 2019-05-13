// carousel/index.js
Page({
 
 data: {
 currentIndex: 0
 },
 
 onLoad: function (options) {
  
 },
 /* 这里实现控制中间凸显图片的样式 */
 handleChange: function(e) {
 this.setData({
 currentIndex: e.detail.current
 })
 },
})
