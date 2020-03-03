<template>
  <div class="news page">
    <div class="container">
      <DataBox :loading="loading" :isEmpty="isEmpty" :error="error">
          <div class="item mb-3" v-for="item in news" :key="item.id">
            <div class="row">
              <div class="col-12">
                <h2 class="news-title">
                  <router-link :to="`/news/${item.articleID}`">{{item.title}}</router-link>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <img :src="item.urlToImage">
              </div>
              <div class="col-10">
                <p class="description">{{ item.description }}</p>
              </div>
            </div>
          </div>
      </DataBox>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import prepareQueryParamsMixin from '../../mixins/prepareQueryParamsMixin'
import prepareFetchParamsMixin from '../../mixins/prepareFetchParamsMixin'

import DataBox from '../../components/DataBox'

export default {
  name: 'NewsPage',
  mixins: [prepareQueryParamsMixin, prepareFetchParamsMixin],
  components: {
    DataBox
  },

  watch: {
    
  },

  data () {
    return {
      newsText: 'NewsPage Component'
    }
  },

  methods: {
    fetchData () {
      this.$store.dispatch('news/getTopHeadlinesNews')
    }
  },

  computed: {
    ...mapState('news', {
      news: 'items',
      pagination: 'pagination',
      error: 'error',
      loading: 'loading'
    }),
    ...mapGetters('news', [
      'isEmpty',
      'newsDetail'
    ]),
    useInUrlQueryPropList () {
      return this.prepareQueryParamsMixin({
        limit: this.pagination.limit,
        page: this.pagination.page
      })
    },
    fetchParams () {
      const pagination = this.prepareFetchParamsMixin({
        limit: this.pagination.limit,
        page: this.pagination.page
      })

      return { ...pagination }
    }
  },

  created () {
    this.fetchData()
  }
}
</script>
