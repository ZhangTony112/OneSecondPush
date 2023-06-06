/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Login from '@/views/Authority/Login'
import Layout from '@/views/Authority/Layout'
// 用户管理
import Agent from '@/views/User/Agent'
import Admins from '@/views/User/Admins'
import Users from '@/views/User/Users'
// 订单管理
import Orders from '@/views/Order/Orders'
import Capitaltrend from '@/views/Order/Capitaltrend'
import Cancelset from '@/views/Order/Cancelset'
import Feeset from '@/views/Order/Feeset'
// 骑手管理
import Riders from '@/views/Rider/Riders'
import Registers from '@/views/Rider/Registers'
// 城市管理
import Citys from '@/views/City/Citys'
// 运营管理
import Valuations from '@/views/City/Valuation/Valuations'
import Weight from '@/views/City/Weight/Weight'
import Tag from '@/views/City/Tag/Tag'
// 优惠券管理
import Coupons from '@/views/Coupon/Coupons'
import Setting from '@/views/Coupon/Setting'
// 提现管理
import CashList from '@/views/Cash/CashList'
import CashConfig from '@/views/Cash/CashConfig'
// 系统设置
import Apps from '@/views/System/App'
import Share from '@/views/System/Share'
import Integral from '@/views/System/Integral'
import Wxsubscribe from '@/views/System/Wxsubscribe'
import UserGuide from '@/views/System/UserGuide'
import RiderGuide from '@/views/System/RiderGuide'
import AgreementRider from '@/views/System/AgreementRider'

function App() {
  // 获取浏览器url
  const location = useLocation()
  const { path } = location
  console.log(path)
  return (
    <Routes>
      {/* 重定向到主页 */}
      <Route path="*" element={<Navigate to="/layout" />} />
      {/* 登录页 */}
      <Route path="/login" element={<Login />} />
      {/* 主页及其子路由 */}
      <Route path="/" element={<Layout />}>
        {/* url为/home时主动触发二级路由 */}
        <Route path="/user/agent" element={<Agent />} />
        <Route path="/user/admins" element={<Admins />} />
        <Route path="/user/users" element={<Users />} />
        <Route path="/order/orders" element={<Orders />} />
        <Route path="/order/capitaltrend" element={<Capitaltrend />} />
        <Route path="/order/cancelset" element={<Cancelset />} />
        <Route path="/order/feeset" element={<Feeset />} />
        <Route path="/rider/riders" element={<Riders />} />
        <Route path="/rider/registers" element={<Registers />} />
        <Route path="/city/citys" element={<Citys />} />
        <Route path="/city/valuations/valuations" element={<Valuations />} />
        <Route path="/city/weight/wight" element={<Weight />} />
        <Route path="/city/tag/tag" element={<Tag />} />
        <Route path="/coupon/Coupons" element={<Coupons />} />
        <Route path="/coupon/setting" element={<Setting />} />
        <Route path="/cash/cashList" element={<CashList />} />
        <Route path="/cash/cashconfig" element={<CashConfig />} />
        <Route path="/system/apps" element={<Apps />} />
        <Route path="/system/Share" element={<Share />} />
        <Route path="/system/Integral" element={<Integral />} />
        <Route path="/system/Wxsubscribe" element={<Wxsubscribe />} />
        <Route path="/system/UserGuide" element={<UserGuide />} />
        <Route path="/system/RiderGuide" element={<RiderGuide />} />
        <Route path="/system/AgreementRider" element={<AgreementRider />} />
      </Route>
    </Routes>
  )
}

export default App
