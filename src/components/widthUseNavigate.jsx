/* eslint-disable no-use-before-define */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-param-reassign */
import { useNavigate } from 'react-router-dom'
// 包装useNavigate()功能
function widthUseNavigate(WrapCompontent) {
  // 设置别名
  WrapCompontent.displayName = `widthUseNavigate${getDisplayName(WrapCompontent)}`
  return function NavigateCompont() {
    const navigate = useNavigate()
    return <WrapCompontent to={navigate}></WrapCompontent>
  }
}

// 别名
function getDisplayName(WrapCompontent) {
  return WrapCompontent.displayname || WrapCompontent.name || 'Component'
}

export default widthUseNavigate
