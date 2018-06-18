import  {workorderObj} from './workorder'


class  OneWorkOrderApi{
      vue = null;
      //创建工单详情
      uriOneOrderAuditing = 'api/workOrder/info/detial';

  PicBaseUrl(){
    return this.vue.ServerUrl() +'api/user/fileView?';
  }

  /**
   *
   * @returns {{Create: number, Auditing: number, SendOrder: number, RepairIng: number, Repaird: number, Pause: number, Over: number, Stop: number}}
   * @constructor
   */
  WorkOrderFlagCol(){
    return null;
  }
  /**
   * 加载审核的详情根据订单编号Key
   * 包含现场图片的地址
   * @constructor
   */
  LoadOneOrderAuditing(order){
    return this.vue.$reqPost(this.uriOneOrderAuditing,{OrderKey:order.Id,OrderIdNumStr:order.OrderId})
  }


  uriOneOrderAudited = 'api/workOrder/info/audited';

  OneOrderAudited(order){
    return this.vue.$reqPost(this.uriOneOrderAudited,{OrderKey:order.Id,OrderIdNumStr:order.OrderId})
  }

  uriAuditingOrder = 'api/workorder/flow/Auditing';
  /**
   * 审核工单
   * @param orderAuditing
   * @returns {*|{value}}
   * @constructor
   */
  AuditingOrder(orderKey,auditingObj){
    return this.vue.$reqPost(this.uriOneOrderAuditing,{OrderKey:orderKey,})
  }



  InitVue(vue){
    this.vue = vue;
  }
}

var obj  = new OneWorkOrderApi();
export  default  obj;
