import * as uri from './uri/serviceLoad';
import ajax from '@/vue/plugins/axiosNew';

import  {ServiceLoadBaseApi} from './ServiceLoadBaseApi';

class  ServiceLoadApi extends  ServiceLoadBaseApi{
  detialOfWorkOrderApi(order){
    return ajax.reqPost(uri.detialOfworkOrder,{OrderId:order.Id,OrderNum:order.ServiceNum,AccKey:order.AccKey});
  }
}
let obj = new ServiceLoadApi();
export  default  obj;
