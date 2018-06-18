/**
 *
 * @type {{Create: number, None: number, Auditing: number, Audited: number, Pause: number, Stop: number, Start: number, View: number, SendOrder: number, Repairing: number, EnterShop: number, LeaveShop: number, RepairerOver: number, RepairCheck: number, EngineerCheck: number, Over: number, SendOver: number, UnRepaireOver: number, AuditedUnRepair: number, ShopOver: number, StopOver: number}}
 */
export  const workOrderFlag = {



  /// <summary>
  /// 创建
  /// </summary>
  Create : 0,

  /// <summary>
  /// 无
  /// </summary>
  None : -1,
  /// <summary>
  /// 工程师待审核
  /// </summary>
  Auditing : 1,


  /// <summary>
  /// 审核完成
  /// </summary>
  Audited : 2,

  /// <summary>
  /// 暂停、暂缓
  /// </summary>
  Pause : 7,


  /// <summary>
  /// 停止工单
  /// </summary>
  Stop : 9,

  /// <summary>
  /// 开始工单
  /// </summary>
  Start : 10,

  /// <summary>
  /// 浏览工单
  /// </summary>
  View : 3 ,

  /// <summary>
  /// 派单完毕
  /// </summary>
  SendOrder : 30,

  /// <summary>
  /// 维修中（维修人员进入现场维修中）
  /// </summary>
  Repairing : 31,


  /// <summary>
  /// 进入店铺
  /// </summary>
  EnterShop : 32,

  /// <summary>
  /// 离开店铺
  /// </summary>
  LeaveShop : 33,


  /// <summary>
  /// 维修完成
  /// </summary>
  RepairerOver : 66,

  /// <summary>
  /// 内部验收通过
  /// </summary>
  RepairCheck : 70,

  /// <summary>
  /// 工程师验收
  /// </summary>
  EngineerCheck : 80,


  /// <summary>
  /// 工单完成
  /// </summary>
  Over : 100,


  /// <summary>
  /// 派单直接完成工单
  /// </summary>
  SendOver : 116,

  /// <summary>
  /// 工人不需要维修
  /// </summary>
  UnRepaireOver : 120,

  /// <summary>
  /// 审核不需要维修
  /// </summary>
  AuditedUnRepair : 121,


  /// <summary>
  /// 店长完成
  /// </summary>
  ShopOver : 130,


  /// <summary>
  /// 停止结束工单
  /// </summary>
  StopOver : 150,
}


