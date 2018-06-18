
const  AuditStandstillUrl = 'api/workorder/Load/auditStandstill';
const  AuditUnSendUrl = 'api/workorder/Load/auditUnSend';
export class workOrderList{

   constructor(){

   }
    vue;
    baseUrl ;
    uriCraatedUnFineshed = '';
  /**
   * 创建的并且有未结束的工单
   * @constructor
   */
  Create(){
    alert('sdfsdf');
    return ;
    this.vue.$reqPost(this.uriCraatedUnFineshed);
  }


   uriAuditingOrders = 'api/workorder/Load/auditingOrders';
  /**
   * 我审核的工单
   * @param {boolean} isAuditing
   * @constructor
   */
  Auditing(isAuditing){
    return this.vue.$reqPost(this.uriAuditingOrders,{IsAuditing:isAuditing});
  }

   /**
    * 停滞工单
    * @returns {*|{value}}
    * @constructor
    */
  AuditStandstill(){
    return this.vue.$reqPost( AuditStandstillUrl);
  }

   /**
    * 审核未分派工单
    * @returns {*|{value}}
    * @constructor
    */
   AuditUnSend(){
     return this.vue.$reqPost( AuditUnSendUrl);
   }

  uriSendOrders = 'api/workorder/Load/sendOrders';
  /**
   * 加载当前用户分派的工单
   * @constructor
   */
  SendOrder(isSendOver){
    return this.vue.$reqPost(this.uriSendOrders,{IsSended:isSendOver});
  }

   uriSendRepairsOrder = 'api/workorder/Load/sendRepairsOrder';
   /**
    * 分派待维修工单
    * @returns {*|{value}}
    * @constructor
    */
   SendRepairsOrder(){
     return this.vue.$reqPost(this.uriSendRepairsOrder,{});
   }

  uriRepairerOrders = 'api/workOrder/Load/repairerUnConfirm';

   /**
    * 维修工人维修工单
    * @param isRepaired
    * @returns {*|{value}}
    * @constructor
    */
  RepairerOrders(isRepaired){
    return this.vue.$reqPost(this.uriRepairerOrders,{IsRepaired:isRepaired});
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

 let workOrderListObj = new workOrderList( );
 export default workOrderListObj;

