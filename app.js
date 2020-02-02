App({
  globalData: {
    name: 'aaa',
    province:'bbb'
  },

  data: {
    name: 'aaa',
    province: 'bbb'
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序onLaunch')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序onShow');

    // scene 进入场景
    console.log(options);
    
    // 获取用户信息
    wx.getUserInfo({
      success: (user) => {
        this.data.name = user.userInfo.nickName;
        this.data.province = user.userInfo.province;
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function () {

  },
})
