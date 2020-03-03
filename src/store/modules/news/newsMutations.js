export default {
  SET_ITEMS (state, data) {
    state.items = data
  },

  SET_ERROR (state, data) {
    state.error = data
  },

  SET_LOADING (state, data) {
    state.loading = data
  },
  GET_NEWS_DETAIL (state, data) {
    debugger
    const newsDetail = state.items.filter(item => {
      return item.articleID === Number(data)
    })
    state.newsDetail = newsDetail[0]
  }
}
