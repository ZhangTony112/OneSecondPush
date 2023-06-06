/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://192.168.121.66:8090/'
})
export default http
