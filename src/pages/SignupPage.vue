<template>
  <div class="container-fluid">
    <form>
      <div class="form-group">
        <label for="inputName">Full name</label>
        <input v-model="user.name" type="text" class="form-control" id="inputName">
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input v-model="user.address" type="text" class="form-control" id="inputAddress">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="user.email" type="email" class="form-control" id="inputEmail">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input v-model="user.password" type="password" class="form-control" id="inputPassword">
      </div>
      <a @click="makeSignup" class="btn btn-sign-up btn-primary">Submit</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      user: {
        name: '',
        address: '',
        email: '',
        password: '',
        error: ''
      }
      
    }
  },

  methods: {
    makeSignup () {
      if (this.user.name === '') {
        return alert('please enter name!')
      } else if (this.user.email === '') {
        return alert('please enter email!')
      } else if (this.user.password === '') {
        return alert('please enter password!')
      } else {
        localStorage.setItem('user', JSON.stringify(this.user))
        window.location.href = '/profile'
      }
    }
  },
  beforeDestroy () {
    this.user = {}
  }
}
</script>

<style lang="scss" scoped>
.btn-sign-up {
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #fff
  }
}
.login {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    padding: 30px 15px;
    background: #fff;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2),
    0 24px 38px 3px rgba(0, 0, 0, .14),
    0 9px 46px 8px rgba(0, 0, 0, .12);

    .header {
      text-align: center;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
    }

    .error {
      background-color: red;
      padding: 10px;
      font-size: 12px;
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>
