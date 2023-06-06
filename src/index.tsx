import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StyleProvider hashPriority="high">
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#955ce6',
          colorSuccess: '#955ce6',
          colorWarning: '#F5222D',
          colorError: '#F5222D'
        }
      }}
    >
      <App />
    </ConfigProvider>
  </StyleProvider>
)

reportWebVitals()
