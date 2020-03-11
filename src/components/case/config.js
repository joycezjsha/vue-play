/**
 * author:joyce
 * data:2020/03/11
 */
import httpConnect from './httpUtil'
const config = {
  GET_CASE_DATA:(url,data) => {
    return httpConnect.httpConnect('get',url,data)
  }
}
export {config};
