/* eslint-disable import/no-extraneous-dependencies */
import axios, { AxiosPromise } from 'axios'
import request from './http'

export const getCode = async () => {
  const res = await axios.get('/admin/verifycode')
  return res?.data
}

// 提现列表的请求数据类型
interface IGetcashListParams {
  bankName?: string
  cardNo?: string
  cashNo?: string
  current: string
  pageSize: string
  realname?: string
  status?: string
}

// 提现列表的响应数据类型
type CashlistResponse = {
  code: number
  msg: string
  data: {
    pageSize: number
    current: number
    count: number
    totalPages: number
    data: never[]
  }
}

// 改变提现设置数据的参数类型
interface ICouponResponse {
  shareOpen: boolean
  newUserOpen: boolean
  newUserRules: { couponNo: string; probability: number }[]
  shareUserRules: undefined[]
}
// 设置改变后的响应数据
type changeCouponResponse = { code: number; msg: string }

// 请求提现设置数据
export const Coupon = () => request.get('admin/config/coupon')
// 改变提现设置状态
export const changeCoupon = async (params?: ICouponResponse) => {
  const res = request.post('admin/config/coupon', params) as AxiosPromise<changeCouponResponse>
  return (await res).data
}
// 获取提现列表
export const getCashlist = async (params?: IGetcashListParams) => {
  const res = request.get('admin/cash/list', {
    params
  }) as AxiosPromise<CashlistResponse>
  return (await res).data
}

export default {}
