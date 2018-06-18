
import ajax from '@/vue/plugins/axiosNew'

import * as uri from './uri/userUri'

class UserApi {
  userInfoApi () {
    return ajax.reqPost(uri.userInfo)
  }
}
const obj = new UserApi()
export default obj
