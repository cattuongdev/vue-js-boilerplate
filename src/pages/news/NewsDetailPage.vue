<template>
  <div class="news page">
    <div class="news-detail">
      <h2 class="news-title">{{newsDetail.title}}</h2>
      <div class="my-3"><img :src="newsDetail.urlToImage"></div>
      <p>{{newsDetail.content}}</p>
      <p><a target="_blank" :href="newsDetail.url">{{ newsDetail.url }}</a></p>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'NewsDetailPage',
  components: {
  },

  watch: {
    
  },

  data () {
    return {
      newsText: 'News detail Page Component'
    }
  },

  methods: {
    getNewsDetail () {
      this.$store.commit('news/GET_NEWS_DETAIL', this.$route.params.newsID)
    }
  },

  computed: {
    ...mapState('news', {
      news: 'items',
      newsDetail: 'newsDetail',
      error: 'error',
      loading: 'loading'
    }),
    ...mapGetters('news', [
      'isEmpty'
    ])
   
  },

  created () {
    this.getNewsDetail()
  }
}
</script>
