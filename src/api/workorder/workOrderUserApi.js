
export class workOrderUserApi{
    vue ;
    baseUrl;

    uriRepaires = 'api/businessUser/shoprepairers';

  /**
   * 获取店铺的维修人员
   * @param {Number} shopId
   * @returns {any}
   * @constructor
   */
  ShopRepairers(shopId){
    console.log(shopId);
    return this.vue.$reqPost(this.uriRepaires,{shopKey:shopId})
  }

  /**
   * 初始化ajax请求
   * @param vueAjax
   * @constructor
   */
  InitVue(vue){
    this.vue = vue;
    this.baseUrl = this.vue.ServerUrl();
  }
}
var workOrderUserObj = new  workOrderUserApi();
export default workOrderUserObj;
