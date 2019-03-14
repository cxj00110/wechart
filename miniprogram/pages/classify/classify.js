// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuData:[
      '文学经典', '四大名著', '自然科学','财经商务',"园林艺术"
    ],
    menuIndex:0,
    books:[
      [
        {
          src:"../../images/book.jpg",
          text:"语文书"
        },{
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }, {
          src: "../../images/book.jpg",
          text: "语文书"
        }
      ], [
        {
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }
      ], [
        {
          src: "../../images/book.jpg",
          text: "语文书"
        }, {
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }
      ], [
        {
          src: "../../images/book.jpg",
          text: "语文书"
        }, {
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }, {
          src: "../../images/book.jpg",
          text: "语文书"
        }, {
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }, {
          src: "../../images/book.jpg",
          text: "语文书"
        }, {
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }, {
          src: "../../images/book.jpg",
          text: "语文书"
        }, {
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }, {
          src: "../../images/book.jpg",
          text: "语文书"
        }, {
          src: "../../images/book2.jpg",
          text: "语文书"
        }, {
          src: "../../images/book3.jpg",
          text: "语文书"
        }, {
          src: "../../images/book.jpg",
          text: "语文书"
        }
      ],[

      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tabChange(e){
    let index = e.currentTarget.dataset.key;
    this.setData({
      menuIndex: index
    });
  },
  toDetail() {
    wx.navigateTo({
      url: "/pages/detail/detail"
    })
  }
})