<template>
  <div class="news page">
    <div class="news-list">
      <DataBox :loading="loading" :isEmpty="isEmpty" :error="error">
        <div class="item" v-for="item in news" :key="item.id">
          <h2>
          <router-link :to="`/news/${item.articleID}`">{{item.title}}</router-link>
          </h2>
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
