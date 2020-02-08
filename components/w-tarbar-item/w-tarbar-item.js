// components/w-tarbar-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type:String,
      value: ''
    },
    index: {
      type: String,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem() {
      let index = this.properties.index;
      this.triggerEvent('doAcrtive', index, {})
    }
  }
})
