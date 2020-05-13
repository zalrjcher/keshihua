/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  系统通用fetch数据请求
 */
import fetch from 'dva/fetch';
import axios from 'axios'
import { message, notification } from 'antd';
import router from 'umi/router';
const logout = () => {
  // @HACK
  /* eslint-disable no-underscore-dangle */
  window.g_app._store.dispatch({
    type: 'global/logout',
  });
};
const apiPrefix='http://zhsf:zhsf6666@es-cn-v0h1m6day000d4yic.public.elasticsearch.aliyuncs.com:9200';
const checkIsLogin = (url) => {
  const isLogin = sessionStorage.getItem('isLogin');
  const href = window.location.href;
  if (isLogin !== 'true' && url.indexOf('/login') === -1 && href.indexOf('/login') === -1) {
    message.warning('请在登录后操作!');
    router.push('/login');
    return;
  }
};
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
const checkStatus = response => {
  const { status } = response;
  console.log("statusstatusstatusstatusstatus")
  console.log(status)
  if (status >= 200 && status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};
export const _request = async (url, options) => {
  console.log(url);
  console.log(options);
  const { method, headers, body } = options;
  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
    if (!(body instanceof FormData)) {
      options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...headers,
      };
    } else {
      // newOptions.body is FormData
      options.headers = {
        Accept: 'application/json',
        ...headers,
      };
    }
  }
  console.log(apiPrefix);
console.log(options)
  const response = axios.post("/api"+url,{query:options.body,size:options.size,aggs:options.aggs},{
    headers:options.headers,
  }).then(resp=>{
    if(resp.status===200){
      console.log('请求的结果')
      console.log(resp)
      return resp.data;
    }else {
      console.log("31431432")
    }
  }).catch(error=>{
    const { name: status } = error;
    if (status === 401) {
      logout();
      return;
    }
    // environment should not be used
    if (status === 403) {
      router.push('/403');
      return;
    }
    if (status <= 504 && status >= 500) {
      router.push('/500');
      return;
    }
    if (status >= 404 && status < 422) {
      router.push('/404');
      return;
    }
    if (status === 'SyntaxError') {
      message.error(`SyntaxError:${error.message}`);
      setTimeout(() => {
        logout();
      }, 1500);
    }
  });
  return response;
};
export default async (url, options) => {
  checkIsLogin(url);
  const defaultOptions = {
    //发送cookies
    credentials: 'include',
    //cors跨域
    mode: "cors",//no-cors
  };
  const newOptions = { ...defaultOptions, ...options };
  const response = await _request(url, newOptions).then(response => {
    const { data: { alertDesc }, status } = response;
    if (status !== 0) {
      message.error(alertDesc || "无权限！");
      const { hash } = window.location;
      if (hash !== '#/login') {
        setTimeout(() => {
          logout();
          // window.location.href= window.location.origin;
        }, 1500);
      }
    }
    return response;
  });
  return response;
}
