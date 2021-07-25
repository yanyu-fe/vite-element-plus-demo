import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { localStorage } from "@/utils/localStroe";
import { STORAGE_TOKEN_KEY } from "@/store/mutation-type";
import { ResponseBody } from "@/api/typing";
// 定义一个Token的设置方案
export const REQUEST_TOKEN_KEY = "AccessToken";

const request = axios.create({
  // 配置默认的请求头
  baseURL: "/",
  // 超时配置
  timeout: 30000,
  // 携带cookie
  withCredentials: true,
});

const errorHandler = (error: AxiosError): Promise<any> => {
  //抛出异常
  return Promise.reject(error);
};

// 请求拦截器
const requestHandler = (
  config: AxiosRequestConfig
): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
  // 获取到token
  const savedToken = localStorage.get(STORAGE_TOKEN_KEY);
  if (savedToken) {
    // 设置token
    config.headers[REQUEST_TOKEN_KEY] = savedToken;
  }
  return config;
};
request.interceptors.request.use(requestHandler, errorHandler);

// 响应拦截器
const responseHandler = (
  response: AxiosResponse
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data;
};
request.interceptors.response.use(responseHandler, errorHandler);

export { AxiosResponse };

export default request;
