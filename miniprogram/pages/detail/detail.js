
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like: 0, //喜欢
    collect: 0, //收藏
    tabAct: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  /**
   * 切换喜欢
   */
  signLike() {
    let like = this.data.like;
    let newlike = like == 0 ? 1 : 0;
    this.setData({
      like: newlike
    })
  },
  /**
   * 切换收藏
   */
  signCollect() {
    let collect = this.data.collect;
    let newCollect = collect == 0 ? 1 : 0;
    this.setData({
      collect: newCollect
    })
  },
  /**
   * tab切换
   */
  clickTab(e) {
    let tab = e.currentTarget.dataset.tab;
    if (tab == 0) {
      this.setData({
        tabAct: 0
      })
    } else if (tab == 1) {
      this.setData({
        tabAct: 1
      })
    }
  },
  /**
   * 跳转至音频页面
   */
  linkTo(){
    wx.switchTab({
      url: '/pages/music/music'
    })
  },
  /**
   * 跳转至视频页面
   */
  linkTovideo(){
    wx.navigateTo({
      url: '/pages/video/video'
    })
  }
})