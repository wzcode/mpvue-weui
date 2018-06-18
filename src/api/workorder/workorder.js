
import  {workOrderFlag} from './WorkOrderFlags';
import ajax from '../../vue/plugins/axiosNew';

export const MyOrders = "api/workOrder/MyOrders";

/**
 * 商铺工单接口服务
 */
class WorkOrderApis {
  constructor(){
    this.vue = null;
    this.uriOrderCreate = 'api/workOrder/Create';
    this.uriOrderCfdCreate = 'api/workOrder/CreateCfd';
    this.uriOrderDeleteMyOrder = 'api/workOrder/Delete';//删除工单
    this.uriMyOrdersURl = MyOrders;
    this.uriEdidtOrder = "api/workOrder/EditOrder";

    this.uriShopInfo = "api/shop/getById?shopId=";
    this.baseUrl = '';

    //工单文件处理
    this.uriFileUpLoad = 'api/user/file';
    this.uriFileDelete = 'api/user/file/delete';


    //工单处理
    this.uriOrderInfo = 'api/workOrder/Info';

    this.uriShopModifyArea = 'api/shop/config/shopModifyArea?shopId=';
    this.uriShopReportItems = 'api/shop/config/shopReportItems?shopId=';

  }


  ShopModifyArea(shopId){
    return this.vue.$reqPost(this.uriShopModifyArea+shopId )
  }

  ShopReportItems(shopId){
    return this.vue.$reqPost(this.uriShopReportItems+shopId )
  }


  /**
   * 根据编号获取商铺信息
   * @param id
   * @constructor
   */
  LoadOrderShopById(id){
    return this.vue.$reqPost(this.uriShopInfo + id,null);
  }


  ImageUrl(fileKey,accKey){
    return this.baseUrl + "api/user/fileView?fileKey=" + fileKey + "&accKey=" + accKey;
  }


  OrderFileDelete(fileInfo){
    return this.vue.$reqPost(this.uriFileDelete,{ FileKey:fileInfo.FileKey,AccKey:fileInfo.AccKey})
  }

  orderDetial(order){
    return this.vue.$reqPost(this.uriOrderInfo,{ Id:order.Id,AccKey:order.AccKey})
  }

  /**
   *  获取工单详情根据工单Id和工单编号
   * @param orderId 工单Id
   * @param orderNum 工单编号
   * @returns {*|{value}}
   */
  orderDetialById(orderId,orderNum){
    return this.vue.$reqPost(this.uriOrderInfo,{ Id:orderId ,AccKey:orderNum});
  }



  /**
   *
   * @param base64Str 文件数据
   * @param fileType 文件类型
   * @returns {*|{value}}
   * @constructor
   */
  OrderFileUpLoad(base64Str,fileType){
    return this.vue.$reqPost(this.uriFileUpLoad,{Data:base64Str,fileType:fileType});
  }

  /**
   *
   * @param data
   * @returns {*}
   * @constructor
   */
  OrderFileUpLoadAfter(data){
     var url = this.ImageUrl(data.FileKey,data.AccKey);
     return url;
  }
  /**
   * 创建新工单
   * @param orderInfo
   * @returns {*|{value}}
   * @constructor
   */
  CreateOrder(orderInfo){
    return this.vue.$reqPost(this.uriOrderCreate,orderInfo);
  }

  CreateCFDOrder(orderInfo){
      return ajax.reqPost(this.uriOrderCfdCreate,orderInfo);
  }

  /**
   * 编辑工单
   * @param orderInfo
   * @returns {*|{value}}
   * @constructor
   */
  EditOrder(orderInfo){
    return this.vue.$reqPost(this.EdidtOrder ,orderInfo);
  }

  LoadOrderInfoById(orderNum){

  }

  /**
   * 我的工单
   * @returns {*|{value}}
   * @constructor
   */
  MyOrders(){
    return ajax.reqPost(this.uriMyOrdersURl);
  }





  /**
   * 工单状态转化为界面状态
   * @param flag
   * @returns {number}
   * @constructor
   */
  flagToViewState(item){
    let n = 0;
    let val = 0;
    if(item.IsNeedAudition){
      n = 1;
    }
    let flag = item.Flag;
    switch (flag){
      case workOrderFlag.Create:
        n = 0;
        val = 1;
        break;
      case workOrderFlag.Auditing:
        n = 0;
        val = 2;
        break;
      case workOrderFlag.SendOrder: //派单
        val = 2 ;
        break;
      case workOrderFlag.Repaird:
      case workOrderFlag.Pause:
      case workOrderFlag.RepairIng:
        val = 3;
        break;
      case workOrderFlag.Over:
        val =  4;
        break;
    }
    return val + n;
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
let workOrderObj = new WorkOrderApis(null);
export default workOrderObj;
