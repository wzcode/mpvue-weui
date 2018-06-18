import ajax from '@/vue/plugins/axiosNew';

import  * as loadUri from './uri/WorkOrderLoadUri';



class  WorkOrderShopLoadApi{

  /**
   *
   * @returns {*}
   */
  loadCreatedApi(){
    return ajax.reqPost(loadUri.shopOfOrdersCommit);
  }

  shopOfOrdersAuditedApi(){
    return ajax.reqPost(loadUri.ShopOfOrdersAudited);
  }

  shopOfOrdersRepairingApi(){
    return ajax.reqPost(loadUri.ShopOfOrdersRepairing);
  }

  shopOfOrdersRepairsOverApi(){
    return ajax.reqPost(loadUri.ShopOfOrdersRepairsOver);
  }
}

let load = new WorkOrderShopLoadApi();
export  default  load;
