import ajax from './../vue/plugins/axiosNew'
class Test{
  logIn (userName,passWord){
    console.log('login')
    console.log(ajax)
    return ajax.reqPost('api/login/byAccount',{UserName: userName, PassWord: passWord});
  }
}
let a = new Test()
export default a;
