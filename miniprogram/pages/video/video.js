// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmu: [{
      text: "哈哈哈哈哈",
      color: "#fff",
      time: 1
    }, {
      text: "哇塞，写的真好",
      color: "#c300b8",
      time: 2
    }, {
      text: "牛逼",
      color: "green",
      time: 3
    }, {
      text: "好帅啊",
      color: "pink",
      time: 2
    }, {
      text: "我爱晓军军",
      color: "#0086ea",
      time: 4
    }],
    btnFlag: false,
    videoContext:null,
    nowTime:null,
    duration:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  showbtn() {
    if (!this.btnFlag) {
      this.setData({
        btnFlag: true
      });
      setTimeout(() => {
        this.setData({
          btnFlag: false
        });
      }, 3000)
    }
  },
  updateTime(current){
    this.nowTime=current.detail.currentTime;
    this.duration=current.detail.duration;
  },
  process(e){
    let flag = e.currentTarget.dataset.flag;
    if(flag==0){
      this.videoContext.seek(this.nowTime - 15<0?0:this.nowTime - 15)
    }else{
      this.videoContext.seek(this.nowTime + 15>this.duration?this.duration:this.nowTime + 15)
    }
  }
})