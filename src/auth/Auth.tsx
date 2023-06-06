import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Auth(props: any) {
  // 编程方式导航
  const navigate = useNavigate()
  // 获取当前的url地址数据
  const location = useLocation()
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [location.pathname])

  return props.children
}
