// page/about/about.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: app.globalData.name,
    province: app.globalData.province,
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* this.setData({
      name: app.data.name,
      province: app.data.province
    }) */
    console.log('ononLoad');

    wx.request({
      url: 'http://adi-v3.top/test/getGoods',
      success:(res) => {
        //console.log(res.data.goods)
        this.setData({
          goods:res.data.goods
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide');

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉出来了')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到底了')
  },

  onPageScroll:function(event) {
    console.log(event)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})