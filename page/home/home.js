// page/home/home.js
Page({
  data: {
    name: "maclxf",
    age: "22",
    students: [
      { name: "git", tool: "version" },
      { name: "php", tool: "backend" },
      { name: "vue", tool: "frontend" },
    ],
    counter: 0
  },
  add() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  sub() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  getUser(event) {
    console.log(event)
  }
})