
import  {reqirerEnterShop,requerLeaveShop} from './WorkOrderFlowApi';

export const uriLoadLog = '';


/**
 * 工单流程加载接口
 */
export class WorkOrderFlowLoadApis{

  constructor(){

  }
  /**
   *
   */
  load(){
    let str = reqirerEnterShop;
    let ss = requerLeaveShop;
    var aa = new  WorkOrderFlowLoadApi();
    aa.load();
  }
}
