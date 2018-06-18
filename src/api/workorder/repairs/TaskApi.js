import * as taskUri from './uri/taskUri';

import ajax from '@/vue/plugins/axiosNew';

import orderLoad from './../serviceOrder/ServiceLoadBaseApi';

class  TaskApi{
  /**
   * 我的任务列表
   * @returns {*}
   */
  myListApi(){
    console.log(taskUri.myList);
    return ajax.reqPost(taskUri.myList);
  }

  /**
   * 与我相关的工单
   * @returns {*}
   */
  myOrders(){
    return orderLoad.myList();
  }

  /**
   * 完成的任务
   * @returns {*}
   */
  myfineshed(){
    return ajax.reqPost(taskUri.myfineshed,{});
  }

  /**
   * 任务工单详情
   * @returns {*}
   */
  detialApi(order){
    let para = {OrderId:order.Id,OrderNum:order.ServiceNum,AccKey:order.AccKey};

    return ajax.reqPost(taskUri.detial,para);
  }

  /**
   * 详情下的保修单集合
   * @param order
   * @returns {*}
   */
  detiaOfWorkOrder(order){
    return ajax.reqPost(taskUri.detialOfworkOrders,{OrderId:order.Id,OrderNum:order.ServiceOrderNum,AccKey:order.AccKey});
  }

  /**
   * 进入店铺
   * @param order
   * @returns {*}
   */
  enter(order){
    return ajax.reqPost(taskUri.enter,{OrderId:order.Id,OrderNum:order.ServiceOrderNum,AccKey:order.AccKey});
  }

  /**
   * 离开店铺
   * @param order
   * @returns {*}
   */
  leave(order){
    return ajax.reqPost(taskUri.leave,{OrderId:order.Id,OrderNum:order.ServiceOrderNum,AccKey:order.AccKey});
  }
}
let taskApi = new TaskApi();
export  default  taskApi;
