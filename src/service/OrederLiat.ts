import { AxiosPromise } from 'axios'

import request from './http'

// 用户管理
// 参数
export type IListQueryParams = {
  current?: number
  pageSize?: number
}
// 类型
export type ResponseData = {
  code: number
  msg: string
  data: {
    pageSize: number
    current: number
    count: number
    totalPages: number
    data: {
      agentNo: string
      agentAccount: string
      mobileNumber: string
      realName: string
      status: number
      createTime: string
      updateTime: string
      defaultPwd: string
      updatedBy: string
    }[]
  }
}

// 代理列表
export const getUserList = async (params?: IListQueryParams) => {
  const res = request.get('/admin/agent/list', {
    params
  }) as AxiosPromise<ResponseData>
  return (await res).data
}

type IAdminListData = {
  code: number
  msg: string
  data: {
    pageSize: number
    current: number
    count: number
    totalPages: number
    data: {
      adminNo: string
      adminName: string
      mobileNumber: string
      realName: string
      status: number
      createTime: string
      updateTime: string
      defaultPwd: string
      updatedBy: string
    }[]
  }
}
export const getAdminData = async (data: IListQueryParams = { current: 1, pageSize: 20 }) => {
  const res = request.get('/admin/list', { params: data }) as AxiosPromise<IAdminListData>
  return (await res).data
}

export default {}
