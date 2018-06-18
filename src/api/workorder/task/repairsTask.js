import ajax from '@/vue/plugins/axiosNew';

export const  enterShopUrl = 'api/workorder/flow/entershop';

export const  laveShopUrl = 'api/workorder/flow/leaveshop';

/**
 * 维修人员类
 */
class RepairsTask{
  constructor(){
  }
  myTasks = 'api/workorder/repairs/task/mylist';
  /**
   * 我的维修任务
   * @param {boolean} isAuditing
   * @constructor
   */
  MyTask(){
    return ajax.reqPost(this.myTasks,{},{});
  }

  /**
   * 进入店铺
   * @param order
   * @returns {*}
   * @constructor
   */
  enterShop(order){
    return ajax.reqPost(enterShopUrl,{OrderKey:order.Id,OrderIdNumStr:order.OrderId});
  }

  /**
   * 任务离店操作
   * @param order
   * @returns {*}
   */
  leaveShop(order){
    return ajax.reqPost(laveShopUrl,{OrderKey:order.Id,OrderIdNumStr:order.OrderId});
  }
}

let workOrderListObj = new RepairsTask( );
export default workOrderListObj;
