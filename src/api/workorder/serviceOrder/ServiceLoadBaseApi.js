
import {myList,myOrderAndTaskCount} from './uri/serviceLoad';
import ajax from '@/vue/plugins/axiosNew';

/**
 *
 */
export class ServiceLoadBaseApi{

  constructor(){

  }
  /**
   * 获取我的服务单
   * @returns {*}
   */
  myListApi(){
    return ajax.reqPost(myList,{IsConfirm:false});
  }

  myListUnConfirm(){
    return ajax.reqPost(myList,{IsConfirm:true});
  }



  /**
   * 加载任务数量
   * @returns {*}
   */
  myOrderAndTaskCount(){
    return ajax.reqPost(myOrderAndTaskCount);
  }

}
let load = new ServiceLoadBaseApi();
export default  load;
