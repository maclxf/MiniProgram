// page/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    name:'',
    ft_play:'r7',
    point:20,
    isActive:false,
    moives: [
      '黑客帝国',
      '盗梦空间',
      '魔兽争霸'
    ]
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onError(err) {
    console.log('出错啦')
    console.log(err)
  },
  onImgReady(json) {
    console.log('好了')
    console.log(json)
  },
  chooseImage() {
    wx.chooseImage({
      success: function(res) {
        console.log(res)
      },
    })
  },
  addPoint() {
    this.setData({
      point: this.data.point + 6
    })
    console.log(this.data.point)
  },
  changeColor() {
    this.setData({
      isActive: !this.data.isActive ? 'red' : ''
    })
    console.log(this.data.isActive)
  },
  addMoive() {
    let temp = this.data.moives
    temp.push('指环王')
    this.setData({
      moives: temp
    })
  }
})