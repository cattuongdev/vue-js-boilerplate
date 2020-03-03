import { NewsService } from '@/services/news.service'

export default {
  getTopHeadlinesNews ({ state, commit }) {
    commit('SET_LOADING', true)
    return NewsService.getTopHeadlinesNews()
      .then(response => {
        var newsData = response.data.map((item, i) => {
          item.articleID = i + 1
          return item
        })
        commit('SET_ITEMS', newsData)
      })
      .catch(error => commit('SET_ERROR', error.message))
      .finally(() => commit('SET_LOADING', false))
  },

  getCustomNews ({ state, commit }, payload) {
    commit('SET_LOADING', true)
    return NewsService.getCustomNews(payload)
      .then(response => {
        var newsData = response.data.map((item, i) => {
          item.articleID = i + 1
          return item
        })
        commit('SET_ITEMS', newsData)
      })
      .catch(error => commit('SET_ERROR', error.message))
      .finally(() => commit('SET_LOADING', false))
  },
  getNewsByID ({ state, commit }, payload) {
    commit('GET_NEWS_DETAIL', payload)
  }
  
}
