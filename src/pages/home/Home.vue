<template>
  <div class="container-fluid">
    <div class="menu">
      <div class="col-md-12 top-menu">
        <ul class="nav nav-tabs nav-tabs-custom">
           <router-link exact :to="{path: `/news/top-headline-news`}">Top Headline news</router-link>
           <router-link :to="{path:  `/news/custom-news`}">Custom news</router-link>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      idOrgan: 1,
      userID: 0,
      selected: undefined
    }
  },
  created () {
  },
  methods: {
    
  },
  mounted () {
  }
 
}
</script>

<style lang="scss" scoped>
  .menu {
    margin: 10px 0px 15px;
    padding: 0;
    .top-menu {
      padding: 0px;
      .nav-tabs-custom {
        height: 50px;
        border-bottom: 2px solid #bdbdbd;
        a {
          line-height: 2;
          border-radius: 0;
          color: #bdbdbd;
          border: none;
          font-weight: 600;
          padding-left: 0px;
          padding-right: 0px;
          &:hover {
            text-decoration: none
          }
          &:not(:nth-child(1)) {
              margin-left: 20px;
            }
        }
        .is-active {
          border-bottom: 2px solid #2C7FE1;
          color: #2C7FE1;
          margin-bottom: -1px;
        }
    }
  }
}

</style>
