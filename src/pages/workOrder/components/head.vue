<template>
  <div class="shoppIcon">
    <div class="page__hd">
    <div class="page__title">欢迎登陆店维宝系统</div>
    <div class="page__title">天平洋咖啡店</div>
    <div class="page__title">李晓 下午好</div>
    </div>
  </div>
</template>
<script>
  export default {
    created () {
      console.log('created header')
    }
  }
</script>

<style scoped>
  .shoppIcon{
    background-color: #f08300;
    text-align: center;
    color:#fff;
    font-size: 0.35rem;
    padding: 0.4rem 0.8rem;
  }
  .shoppIcon p{
    margin: 0.1rem 0;
    font-size: 0.27rem;
  }
</style>
