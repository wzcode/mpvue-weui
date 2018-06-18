<template>
  <div>
    <button class="weui-btn" @click="increment" type="primary">登陆</button>
    <button class="weui-btn" @click="get" type="primary" >获取</button>
  </div>
</template>
<script>
// Use Vuex
import login from './../../api/user/userLoginApi'
import user from './../../api/user/userApi'
export default {
  data () {
    return {
      icon: ''
    }
  },
  methods: {
    increment () {
      login.loginByAccountApi('userName','passWord').then(res => {
        console.log(res.Data);
        login.loginAfter(res.Data)
      })
      console.log('asdfasfdsadfasf')
    },
    get () {
      user.userInfoApi().then(res =>{
        console.log(res);
      })
    }
  },
  mounted() {
    this.increment();
  }
}

</script>
<style>

</style>
