// @ts-ignore
import request from '@/utils/request'
import qs from "qs";

export function login(data) {
  return request({
    url: '/login/login/login.do',
    method: 'post',
    data: qs.stringify(data)
  })
}