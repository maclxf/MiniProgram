// components/w-tarbar/w-tarbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    types: {
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(event) {
      this.setData({
        current: event.currentTarget.dataset.index
      })

      this.triggerEvent('send', { index: this.data.current, title: this.properties.types[this.data.current]}, {})
    }
  }
})
