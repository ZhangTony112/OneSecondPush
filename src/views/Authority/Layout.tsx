/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable no-else-return */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Layout, Popover } from 'antd'
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
// import Icon, {
//   DashboardOutlined,
//   IdcardOutlined,
//   InboxOutlined,
//   CarOutlined,
//   PieChartOutlined,
//   InsertRowLeftOutlined,
//   MoneyCollectOutlined,
//   RedEnvelopeOutlined,
//   SettingOutlined
// } from '@ant-design/icons'
import Icon from '@ant-design/icons'
import SilderLeft from '@/components/SilderLeft'

// const navigate = useNavigate()

// 弹出框
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

// Layout侧边栏定义
// type MenuItem = Required<MenuProps>['items'][number]
// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label
//   } as MenuItem
// }

// Layout侧边栏渲染
// const items: MenuItem[] = data.map((item, index) =>
//   getItem(
//     item.name,
//     index + 1,
//     item.icon,
//     item.children?.map((i, tag) => getItem(i.name, (index + 1) * 10 + tag + 1))
//   )
// )

// 事件触发

// 熊猫头像
const PandaSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
    />
  </svg>
)

const PandaIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={PandaSvg} {...props} />
)

export default function layout() {
  return (
    <div className="w-full h-[100vh] bg-gray-200">
      <Layout style={{ height: '100vh' }}>
        <Layout.Header
          className="flex items-center justify-between"
          style={{ alignItems: 'center', backgroundColor: '#fff' }}
        >
          <div className="demo-logo flex justify-center items-center">
            <div className="w-[45px] h-[30px] ">
              <svg
                data-v-70fcfd09=""
                viewBox="0 0 45 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="nuxt-logo w-full h-full"
              >
                <path
                  d="M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z"
                  fill="#955ce6"
                />
              </svg>
            </div>
            <h1 className="ml-2 text-xl font-semibold">一秒快送后台管理系统</h1>
          </div>
          <Popover content={content} title="Title">
            <PandaIcon style={{ fontSize: '32px' }} />
          </Popover>
        </Layout.Header>
        <Layout.Content style={{ height: '100%', padding: '0 50px' }}>
          <Layout style={{ height: '95%', margin: '25px 0', backgroundColor: '#fff' }}>
            <Layout.Sider
              width={200}
              style={{
                backgroundColor: '#fff',
                overflow: 'auto',
                height: '89vh',
                position: 'fixed',
                left: 50,
                top: 90,
                bottom: 0
              }}
            >
              <SilderLeft />
            </Layout.Sider>
            <Layout.Content style={{ padding: '20px', minHeight: 280, margin: '0 0 0 200px' }}>
              <Outlet />
            </Layout.Content>
          </Layout>
        </Layout.Content>
      </Layout>
    </div>
  )
}
