import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Auth(props: Element) {
  // 编程方式导航
  const navigate = useNavigate()
  // 获取当前的url地址数据
  const location = useLocation()
  const token = localStorage.getItem('token')
  // && !props.value.includes(location.pathname)
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [location.pathname])

  return props.children
}
