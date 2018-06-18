import  * as opt from './uri/service'
import ajax from '@/vue/plugins/axiosNew';

class  ServicerOrderApi{

  enterShopApi(serviceOrder){
    return ajax.reqPost(opt.enter,{});
  }

  leaveShopApi(serviceOrder){
    return ajax.reqPost(opt.leave,{});
  }

  /**
   *
   * @param serviceOrder
   */
  orderConfirm(serviceOrder){
    return ajax.reqPost(opt.confirm,{});
  }

  /**
   *
   * @param runnodeType
   */
  runNodeTypeToCaption(runnodeType){

  }
}

let obj = new ServicerOrderApi();
export default  obj;
