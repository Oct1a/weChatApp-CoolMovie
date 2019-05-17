Page({
  data: {
    imgUrls: [
      'http://hbimg.b0.upaiyun.com/c1dcc5fff80ab10727bb22db7faa17e7375b23f74db26-7hOQMV_fw658',
      'http://img.zcool.cn/community/0159925a2fb89ba80121db8032c48a.png@1280w_1l_2o_100sh.png',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    //是否自动切换  
    autoplay: true,
    //自动切换的间隔
    interval: 2500,
    //滑动动画时长毫秒  
    duration: 100,
    //图片宽度 
    imgwidth: 750,
    //默认  
    current: 0
    
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})