
/**
 * Created by xupuxin on 2018/4/19.
 */
/**
 * 封装联网方式
 * @param type
 * @param url
 * @param params
 * @param callback
 * @returns {*}
 */
const baseUrl=''
const GET = 'GET';
const POST = 'POST';
$.xhrPool = [];
$.abortAll = function() {
  $(this).each(function(idx, jqXHR) {
    jqXHR.abort();
  });
  $.xhrPool = [];
};
function httpConnect(type, url, params, callback,error) {
  return $.ajax({
    type: type ? type : 'GET',
    url: baseUrl+url,
    data: params,
    contentType:type=="POST" || type=="post"?"application/json;charset=UTF-8":"application/x-www-form-urlencoded;charset=UTF-8",
    //返回数据格式为json
    dataType: "json",
    scriptCharset: 'utf-8',
    success: function (data) {
      if (typeof callback == 'function') {
        callback(data);
      }

    }, error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest)
      console.log(textStatus)
      console.log(errorThrown)
      error(XMLHttpRequest);
    }
  });

}
export  default
{
  GET,
  POST,
  httpConnect,
}
