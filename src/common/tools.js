import Cookies from 'js-cookie'
// cookie 有效期 4小时
let expires = new Date(new Date().getTime() + 4 * 60 * 60 * 1000)
export default{
  getToken: function() {
    let token = Cookies.get('token')
    if (typeof (token) !== 'undefined' && token !== '') {
      this.setToken(token)
    }
    return token
  },
  setToken: function(val) {
    Cookies.set('token', val, {expires: expires})
  },
  removeToken: function() {
    Cookies.remove('token')
  },
  // token 过期操作
  tokenTimeOut: function() {
    this.removeToken()
    location.reload()
  },
  //处理金额 3个0一个,
  format_number:function (n){
    var b=parseInt(n).toString();
    var len=b.length;
    if(len<=3){return b;}
    var r=len%3;
    return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
 }
}
