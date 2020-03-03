<template>
  <div class="header wrapper">

    <div class="menu-wrapper">
      <ul class="menu">
        <li>
          <router-link :to="{ name: 'index' }" exact>Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'news' }">News</router-link>
        </li>
        
      </ul>
      <ul class="menu side">
        <li v-if="!getUser">
          <router-link :to="{ name: 'signup' }">Sign up</router-link>
        </li>
        <li v-if="getUser">
          <router-link :to="{ name: 'profile' }">Profile</router-link>
        </li>
        <li v-if="getUser"><span class="logout-button" @click="logout()">Logout</span></li>
       
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  methods: {
    logout () {
      localStorage.removeItem('user')
      window.location.href = '/signup'
    }
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
  }
}
</script>

<style lang="scss" scoped>
.header {
  z-index: 1;
  padding: 20px 0;
  position: relative;

  .is-active {
    color: #e01b3c;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  .menu-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu {
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 15px;

    }

    &.side {
      font-size: 15px;

      .logout-button {
        cursor: pointer;
      }
    }
  }
}
</style>
