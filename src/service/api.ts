/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'
// import request from './http'

// export const getCode = async () => {
//   const res = await request.get('/admin/verifycode')
//   return res?.data
// }

export const getCode = async () => {
  const res = await axios.get('/admin/verifycode')
  return res?.data
}

export const getUserInfo = async () => {
  const res = await axios.get('/admin/info')
  return res
}
export default {}
