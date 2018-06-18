<template>
  <div class="page">
    <headWorkOrder></headWorkOrder>
    <div class="weui-tab">
      <div class="weui-navbar">
        <block v-for="(item,index) in tabs" :key="index">
          <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
            <div class="weui-navbar__title">{{item}}</div>
          </div>
        </block>
        <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
      </div>
      <div class="weui-tab__panel">
        <div class="weui-tab__content" :hidden="activeIndex != 0">选项一的内容</div>
        <div class="weui-tab__content" :hidden="activeIndex != 1">选项二的内容</div>
        <div class="weui-tab__content" :hidden="activeIndex != 2">选项三的内容</div>
      </div>
    </div>
  </div>
</template>
<script>
  import headWorkOrder from './components/head';
  export default {
    data() {
      return {
        tabs: ["选项一", "选项二", "选项三"],
        activeIndex: 0,
        fontSize: 30
      }
    },
    computed: {
      navbarSliderClass() {
        if (this.activeIndex == 0) {
          return 'weui-navbar__slider_0'
        }
        if (this.activeIndex == 1) {
          return 'weui-navbar__slider_1'
        }
        if (this.activeIndex == 2) {
          return 'weui-navbar__slider_2'
        }
      }
    },
    methods: {
      tabClick(e) {
        console.log(e);
        this.activeIndex = e.currentTarget.id;
      }
    },
    components: {
      headWorkOrder
    }
  }
</script>

<style scoped>

</style>
