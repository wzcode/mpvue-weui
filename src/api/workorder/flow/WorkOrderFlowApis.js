
import {uriLoadLog}  from './WorkOrderFlowLoadApi';

import ajax from '@/vue/plugins/axiosNew';

export const CreateNew = "/api/workOrder/CreateNew";
export const MyOrders = "/api/workOrder/MyOrders";

export const ajaxObj = ajax;


/**
 *工单流程处理接口
 */
class WorkOrderFlowApis {

  constructor(){
    this.vue = null;
    this.CreateNewURl = CreateNew;
    this.MyOrdersURl = MyOrders;
  }




  uriAuditing = 'api/workorder/flow/Audinting';
  /**
   * 审核工单
   * @param orderObj
   * @param auditionOrder
   * @constructor
   */
  Auditing(orderObj,auditingObj){
    console.log(auditingObj);
    return this.vue.$reqPost(this.uriAuditing,{orderKey:orderObj.Id, OrderIdNumStr:orderObj.OrderId, AuditingFlag:auditingObj.AuditingFlag,Memo:auditingObj.Memo})
  }


  uriSendOrder = "api/workorder/flow/Send";

  /**
   * 分派工单
   * @param chooseOrders
   * @param sendOrder
   * @param ownerUser
   * @returns {*|{value}}
   * @constructor
   */
  SendOrder(chooseOrders,sendOrder,ownerUser){
    console.log('提交服务器 分派工单');

    //将人员对象转化为 Id提交
    let userIds = [];
    sendOrder.RepairerIds.forEach(res=>{
      if(res.Id == ownerUser.Id) {
        userIds.push({Id: res.Id, Mobile: res.Mobile, IsOwner:true});
      }
      else{
        userIds.push({Id: res.Id, Mobile: res.Mobile, IsOwner:false});
      }
    });
    let orders = [];
    chooseOrders.forEach(res=>{
      var order = {WorkOrderId:res.Id,WorkOrderNum:res.OrderId};
      orders.push(order);
    });

    let  serverPara = {
        "WorkOrders": orders,
        "Repairers":userIds  ,
        "SendFlag": 0,
        "Memo":sendOrder.Memo,
        "PlanTime":sendOrder.PlanTime
      }
      console.log(serverPara);
    return this.vue.$reqPost(this.uriSendOrder,serverPara);
  }



  InitVue(vuePara){
    this.vue = vuePara;
  }

}
let workOrder = new WorkOrderFlowApis(null);
export default workOrder;
