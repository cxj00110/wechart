const player = wx.getBackgroundAudioManager();
let moveTime = null;
Page({
  data: {
    musicList: [{
      url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000008nl2Y1HlxUm.jpg?max_age=2592000',
      name: '凉城',
      person: '任然',
      src: 'http://dl.stream.qqmusic.qq.com/C400002SKEeh1VzObP.m4a?guid=7499999312&vkey=4DFB60870A8B2AEDDA88744294CE7EFA012719ACA87918F645E47DAA2B20D600BF49962415188DC5EC8F3E21869CBC259C8A29C8F59A124B&uin=0&fromtag=66'
    }, {
      url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002ZTAeN4Z4GU1.jpg?max_age=2592000',
      name: '卡路里',
      person: '火箭少女101',
      src: 'http://isure.stream.qqmusic.qq.com/C4000003JXVx2PhDxM.m4a?guid=7499999312&vkey=AA1843EE1256A8DA0C262D930640525737268837363F1460C9E27CE81BFBD32D0FBCACDEBD2E169BB4BD59DEB74FE5E58F1F06E82F0ECD1A&uin=0&fromtag=66'
    }, {
      url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003cp9dx3XB3ye.jpg?max_age=2592000',
      name: '亲爱的路人',
      person: '刘若英',
      src: 'http://isure.stream.qqmusic.qq.com/C400001lUqtp25ooPM.m4a?guid=7499999312&vkey=7CF01F844D291F6351E50F8435CCF78104764868626E6400EA67A76716F4DBF0CC7F30A66AB52414C0CA252D4CA5D9F62898FDE986E26D4B&uin=0&fromtag=66'
    }, {
      url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000025GtCy14dDpf.jpg?max_age=2592000',
      name: '闹够了没有',
      person: '赖伟峰',
      src: 'http://isure.stream.qqmusic.qq.com/C400003D7eM53quHgj.m4a?guid=7499999312&vkey=138D8A7374B4C4464E1D11559ED3A193FAD0311258C60E930DECF3745B5E188CA52D97056B932BA2DBE6A2CE8415D8CD3EC41E03A3867425&uin=0&fromtag=66'
    }, {
      url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004WeBgR25UB9q.jpg?max_age=2592000',
      name: '奔跑',
      person: '이민호 (李敏镐)/羽泉',
      src: 'http://153.37.232.147/amobile.music.tc.qq.com/C400003M4jl61OmvPv.m4a?guid=7499999312&vkey=854B4A54282CA3140E9997C751A51BB30EB1329AD73C6A29CC2EB91DC0AA423603DA484497210A5EFF36F81D076415B2F62B74485DB0C4CA&uin=0&fromtag=66'
    }],
    rotate: 0,
    rotateImg: false,
    playOrPause: 0,
    process: '0%',
    cache: "0%",
    showList: 0, //是否显示列表
    duration: 0, //总时长
    currentTime: "00:00", //当前秒
    totalTime: "00:00",
    buffered: 0, //缓存时间
    currentIndex: 0, //当前播放音乐下标
    hideTime: 0 //息屏时间
  },

  onLoad: function() {
    let that = this;
    player.onCanplay(() => {

    });
    player.onPlay(() => {
      this.setData({
        playOrPause: 1,
        rotateImg: true
      });
    });
    player.onEnded(() => {
      that.playNext();
    });
    player.onNext(() => {
      that.playNext()
    });
    player.onPrev(() => {
      that.playPrev();
    });
    player.onSeeked(() => {
      player.play();
    });
    player.onPause(() => {
      this.setData({
        playOrPause: 0,
        rotateImg: false
      });
    });
    player.onStop(() => {
      this.setData({
        playOrPause: 0,
        rotateImg: false,
        process: '0%'
      })
    });
    player.onTimeUpdate(() => {
      that.audioPress();
    })
    //获取手机宽度
    wx.getSystemInfo({
      success: res => {
        this.screenWidth = res.screenWidth
      },
    })
  },
  playOrPause() {
    let play = this.data.playOrPause;
    if (play) {
      this.funpause();
    } else {
      this.funplay();
    }
  },
  /**
   * 播放
   */
  funplay() {
    let that = this;
    let current = this.data.musicList[this.data.currentIndex];
    let oldSrc = player.src;
    if (oldSrc != current.src) {
      console.log(1)
      player.title = current.name;
      player.singer = current.person;
      player.coverImgUrl = current.url;
      player.src = current.src;
      player.epname = ''
    } else {
      player.play();
    }
    this.setData({
      playOrPause: 1,
      rotateImg: true
    });
  },
  /**
   * 暂停
   */
  funpause() {
    this.setData({
      playOrPause: 0
    });
    player.pause();
    this.setData({
      rotateImg: false
    })
  },
  /**
   * 拖动进度
   */
  move(e) {
    let that = this;
    player.pause();
    let left = e.touches[0].pageX;
    let processWidth = this.screenWidth * 0.6;
    const leftFlag = (this.screenWidth - processWidth) / 2;
    const rightFlag = this.screenWidth - (this.screenWidth - processWidth) / 2;
    if (left >= leftFlag && left <= rightFlag) {
      this.setData({
        process: ((left - leftFlag) / processWidth) * 100 + '%'
      });
      if (moveTime) {
        clearInterval(moveTime)
      }
      moveTime = setTimeout(() => {
        player.seek(this.data.duration * ((left - leftFlag) / processWidth));
      }, 500);
    }
    if (left < leftFlag) {
      that.setData({
        process: '0%'
      })
    }
    if (left > rightFlag) {
      that.setData({
        process: '100%'
      })
    }
  },
  /**
   * 自动读进度
   */
  audioPress(e) {
    let that = this;
    this.setData({
      currentTime: that.resetTime(player.currentTime),
      totalTime: that.resetTime(player.duration),
      duration: player.duration
    });
    let progress = ((player.currentTime / player.duration) * 100).toFixed(4);
    this.setData({
      process: progress + '%'
    });
  },
  /**
   * 重置样式
   */
  reset() {
    this.setData({
      rotateImg: false
    })
    this.setData({
      playOrPause: 0,
      // process: '0%',
      // cache: "0%",
      duration: 0,
      // currentTime: '00:00',
      // totalTime:'00:00',
      buffered: 0,
      rotate: 0
    });
  },
  /**
   * 展示列表
   */
  openList() {
    this.setData({
      showList: 1
    })
  },
  /**
   * 关闭列表
   */
  closeList() {
    this.setData({
      showList: 0
    })
  },
  /**
   * 播放上一首
   */
  playPrev() {
    let that = this;
    if (that.data.currentIndex > 0) {
      let index = that.data.currentIndex;
      index--;
      that.setData({
        currentIndex: index
      });
      this.reset();
      setTimeout(() => {
        that.funplay();
      }, 500)
    }
  },
  /**
   * 播放下一首
   */
  playNext() {
    this.reset();
    let that = this;
    if (that.data.currentIndex < that.data.musicList.length - 1) {
      let index = that.data.currentIndex;
      index++;
      that.setData({
        currentIndex: index
      });
      setTimeout(() => {
        that.funplay();
      }, 500)
    } else {
      that.setData({
        currentIndex: -1
      });
      that.playNext();
    }
  },
  /**
   * 播放具体某一首
   */
  playCurrent(e) {
    let index = e.currentTarget.dataset.key;
    let that = this;
    this.reset();
    this.setData({
      showList: 0,
      currentIndex: index
    });
    setTimeout(() => {
      that.funplay();
    }, 500);
  },
  onHide() {
    this.setData({
      rotateImg: false
    })
  },
  onShow() {
    if (this.data.playOrPause) {
      this.setData({
        rotateImg: true
      })
    }
  },
  /**
   * 重置时间格式
   */
  resetTime(time) {
    var minutes = parseInt(time / 60) //分
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var second = Math.ceil(time % 60); //秒
    second = second < 10 ? '0' + second : second;
    return minutes + ':' + second;
  }
})