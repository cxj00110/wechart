Page({

  /**
   * 页面的初始数据
   */
  data: {
    userSrc:'',
    userName:'',
    brand:'',
    model:'',
    system:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log(res)
              this.setData({
                userSrc: res.userInfo.avatarUrl,
                userName:res.userInfo.nickName
              });
            }
          })
        }
      }
    });
    wx.getSystemInfo({
      success:res=>{
        this.setData({
          brand:res.brand,
          model:res.model,
          system:res.system
        })
      }
    })
  }
})