<template>
  <div class="container-fluid">
    <div class="profile-page">
      <h2 class="page-title">Hello {{ getUser.name }} wellcome to profile page</h2>
      <div class="profle-info">
        <p>Name: {{ getUser.name }}</p>
        <p>Address: {{ getUser.address }}</p>
        <p>Email: {{ getUser.email }}</p>
      </div>
    </div>
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
  computed: {
    getUser () {
      const userStorage = localStorage.getItem('user')
      if (userStorage) {
        const user = JSON.parse(userStorage)
        return user
      } else {
        return false
      }
    }
  },
  mounted () {
  }
 
}
</script>

<style lang="scss" scoped>
.profile-page {
  .page-title {
    font-size: 25px;
  }
  .profle-info {
    margin-top: 30px;
    p {
      font-size: 20px;
       margin: 8px 0;
      }
  }
  
}
</style>
