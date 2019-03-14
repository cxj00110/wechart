Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotate:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  update(){
    let rotate=this.data.rotate;
    rotate+=360;
    this.setData({
      rotate:rotate
    });
  },
  toDetail(){
    wx.navigateTo({
      url: "/pages/detail/detail"
    })
  }
})