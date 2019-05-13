Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "pages/movie/movie",
        "iconPath": "images/hot.png",
        "selectedIconPath": "images/hot-actived.png"
      },
      {
        "pagePath": "pages/movie/movie",
        "iconPath": "images/film.png",
        "selectedIconPath": "images/film-actived.png"
      },

      {
        "pagePath": "pages/profile/profile",
        "iconPath": "images/profile.png",
        "selectedIconPath": "images/profile-actived.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})