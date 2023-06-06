/* eslint-disable import/no-unresolved */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Auth from '@/auth/Auth'
import RouterConfig from '@/router/index'

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
