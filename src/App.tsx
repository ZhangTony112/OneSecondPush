/* eslint-disable import/no-unresolved */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Auth from '@/auth/Auth'
import RouterConfig from '@/router/index'

// import Bar from '@/components/Bar'

// 如何提取其他组件的props类型
// React.ComponentProps<T>
// 对于自定义组件 或者第三方组件 我们使用typeof 计算组件类型后提取 如Bar
// React.ComponentProps<typeof Bar> = { a: 1, c: {} }
// 对于内置的JSX元素的类型 我们直接使用标签名 字符串来计算 如div
// const b: React.ComponentProps<'div'>

function App() {
  return (
    <BrowserRouter>
      <Auth>
        <RouterConfig />
      </Auth>
    </BrowserRouter>
  )
}

export default App
