import ajax from '../../../vue/plugins/axiosNew';
import  {workOrderFlag }  from '../WorkOrderFlags';

class WorkOrderLog{
  constructor(){
  }
  /**
   * 店长装换flag 未字符
   * @param flag
   */
  shopChangeFlagToStr(flag) {
    var resStr = "未知";
    switch (flag) {
      case workOrderFlag.Create:
        resStr = "创建";
        break;
      case workOrderFlag.Auditing:
        resStr = "待审核";
        break;
      case workOrderFlag.Audited:
        resStr = "待派单";
        break;
      case workOrderFlag.SendOrder:
        resStr = "派单";
        break;
      case workOrderFlag.Pause:
        resStr = "暂停";
        break;
      case workOrderFlag.Stop:
        resStr = "停止";
        break;
      case workOrderFlag.Start:
        resStr = "开始";
        break;
      case workOrderFlag.View:
        resStr = "查看";
        break;
      case workOrderFlag.SendOrder:
        resStr = "已派单";
        break;
      case workOrderFlag.Repairing:
        resStr = "维修中";
        break;
      case workOrderFlag.EnterShop:
        resStr = "进入店铺";
        break;
      case workOrderFlag.LeaveShop:
        resStr = "离开店铺";
        break;
      case workOrderFlag.RepairerOver:
        resStr = "维修完工";
        break;
      case workOrderFlag.RepairCheck:
        resStr = "内部验收完成";
        break;
      case workOrderFlag.EngineerCheck:
        resStr = "工程师验收完成";
        break;
      case workOrderFlag.Over:
        resStr = "工单完工";
        break;
      case workOrderFlag.ShopOver:
        resStr = "店长完成";
        break;
      case workOrderFlag.ShopOver:
        resStr = "停止结束工单";
        break;
      default:
        alert(flag);
        break;
    }
    return resStr;
  }

    /* 店长加载工单操作日志*/
    LoadOfShop(order){
      return ajax.reqPost('api/workOrder/logs/shop',{OrderKey:order.Id,OrderIdNumStr:order.OrderId});
    }
}

let workOrderLog = new WorkOrderLog();
export default workOrderLog;
