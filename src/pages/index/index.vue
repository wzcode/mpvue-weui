<template>
  <div class="page">
    <!--<div class="page__hd">-->
      <!--<div class="page__title">欢迎登陆店维宝系统</div>-->
      <!--<div class="page__title">天平洋咖啡店</div>-->
      <!--<div class="page__title">李晓 下午好</div>-->
      <!--<div class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</div>-->
    <!--</div>-->
    <div class="shoppIcon" >
      <p>{{companyName}}<span >{{users}}</span> : <span v-if="morning">早上好</span>
        <span v-if="forenoon">上午好</span>
        <span v-if="afternoon">下午好</span>
        <span v-if="night">晚上好</span>！
      </p>
      <p>{{shoppName}}</p>
      <p>欢迎登陆店维宝系统</p>
      <!--<img src="../../../static/img/icon.png">-->
    </div>

    <button class="weui-btn" @click="loginTemp" type="primary">临时登陆</button>

    <div class="page__bd">
      <div class="weui-grids">
        <block v-for="item in grids" :key="index">
          <navigator :url="item.url" class="weui-grid" hover-class="weui-grid_active">
            <image class="weui-grid__icon" :src="item.src" />
            <div class="weui-grid__label">{{item.name}}</div>
          </navigator>
        </block>
      </div>
    </div>

    <div class="page__bd page__bd_spacing">
      <div class="kind-list">
        <div v-for="(item1,index1) in list" :key="index1">
          <div class="kind-list__item">
            <div :id=item1.id :class="{'kind-list__item-hd_show':item1.open}" class="weui-flex,kind-list__item-hd" @click="kindToggle">
              <div class="weui-flex__item">{{item1.name}} </div>
              <img class="kind-list__img" :src=" '/static/images/icon_nav_'+item1.id+'.png'">
            </div>
            <div :class="{'kind-list__item-bd_show':item1.open}" class="kind-list__item-bd">
              <div :class="{'weui-cells_show':item1.open}" class="weui-cells">
                <div v-for="(item2,index2) in item1.pages" :key="index2">
                  <navigator class="weui-cell weui-cell_access"  :url=" '/pages/'+item2+'/'+item2+ ''">
                    <div class="weui-cell__bd">{{item2}} </div>
                    <div class="weui-cell__ft weui-cell__ft_in-access"></div>
                  </navigator>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import login from './../../api/user/userLoginApi'
  import user from './../../api/user/userApi'
export default {
  data() {
    return {
      users: '李晓',
      forenoon:false,
      afternoon:false,
      night:false,
      morning:true,
      companyName: '小放牛',
      shoppName: '北国店',
      grids: [
        { src: '/static/images/icon_nav_button.png', url: '/pages/setps/setps', name: '步骤条' },
        { src: '/static/images/icon_nav_cell.png',   url: '/pages/workOrder/workOrder', name: '报修' },
        { src: '/static/images/icon_nav_toast.png', name: 'Toast' },
        { src: '/static/images/icon_nav_dialog.png', name: 'Dialog' },
        { src: '/static/images/icon_nav_button.png', name: 'Progress' },
        { src: '/static/images/icon_nav_panel.png', name: 'Msg' },
        { src: '/static/images/icon_nav_article.png', name: 'Article' },
        { src: '/static/images/icon_nav_actionSheet.png', name: 'ActionSheet' },
        { src: '/static/images/icon_nav_icons.png', name: 'Icons' }
      ],
      list: [
        {
          id: 'form',
          name: '表单',
          open: false,
          pages: ['button', 'list', 'input', 'slider', 'uploader']
        },
        {
          id: 'widget',
          name: '基础组件',
          open: false,
          pages: [
            'article',
            'badge',
            'flex',
            'setps',
            'footer',
            'gallery',
            'grid',
            'icons',
            'loadmore',
            'panel',
            'preview',
            'progress',
            'swiper'
          ]
        },
        {
          id: 'feedback',
          name: '操作反馈',
          open: false,
          pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
        },
        {
          id: 'nav',
          name: '导航相关',
          open: false,
          pages: ['navbar', 'tabbar']
        },
        {
          id: 'search',
          name: '搜索相关',
          open: false,
          pages: ['searchbar']
        },
        {
          id: 'issues',
          name: 'issues 需求',
          open: false,
          pages: ['request', 'vuex', 'rate']
        }
      ]
    };
  },

  components: {},

  methods: {
    loginTemp(){
      login.loginByAccountApi('userName','passWord').then(res => {
        console.log(res.Data);
        login.loginAfter(res.Data)
      })
    },
    loadData () {
      console.log('小程序 start')
      user.userInfoApi().then(res =>{
        console.log('jiekoufanhui',res);
          if (res.Data != null ) {
            this.username = res.Data.RealName;
            this.companyName = res.Data.CompanyInfo.TenantName
            this.shoppName = res.Data.DefaultShop.Name
          } else {
            this.username = '游客';
            this.companyName = '店维宝'
            this.shoppName = '店维宝'
          }
      })
      // user.getUserInfo().then ( res=>{

      // })
    },
    kindToggle(e) {
      var id = e.currentTarget.id,
        list = this.list;
      for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
          list[i].open = !list[i].open;
        } else {
          list[i].open = false;
        }
      }
      this.list = list;
    }
  },
  mounted () {
    this.loadData ()
  }

};
</script>

<style scoped>
/*!
 * WeUI v1.1.1 (https://github.com/weui/weui-wxss)
 * Copyright 2017 Tencent, Inc.
 * Licensed under the MIT license
 */

.weui-flex {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.weui-cells {
  margin-top: 0;
  opacity: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.weui-cells:after,
.weui-cells:before {
  display: none;
}

.weui-cells_show {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.weui-cell:before {
  right: 15px;
}

.kind-list__item {
  margin: 10px 0;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
}

.kind-list__item:first-child {
  margin-top: 0;
}

.kind-list__img {
  width: 30px;
  height: 30px;
}

.kind-list__item-hd {
  padding: 20px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}

.kind-list__item-hd_show {
  opacity: 0.4;
}

.kind-list__item-bd {
  height: 0;
  overflow: hidden;
}

.kind-list__item-bd_show {
  height: auto;
}


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
.shoppIcon img{
  width: 1.5rem;

}
</style>
