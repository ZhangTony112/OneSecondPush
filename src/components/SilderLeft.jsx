/* eslint-disable no-console */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Menu } from 'antd'
import React from 'react'
import {
  DashboardOutlined,
  IdcardOutlined,
  InboxOutlined,
  CarOutlined,
  PieChartOutlined,
  InsertRowLeftOutlined,
  MoneyCollectOutlined,
  RedEnvelopeOutlined,
  SettingOutlined
} from '@ant-design/icons'
// 包裹useNavigate()功能
import WidthUseNavigate from '@/components/widthUseNavigate'

class SiderLeft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          key: '/',
          icon: React.createElement(DashboardOutlined),
          label: '数据总览'
        },
        {
          icon: React.createElement(IdcardOutlined),
          label: '用户管理',
          children: [
            {
              key: '/user/agent',
              label: '代理列表'
            },
            {
              key: '/user/admins',
              label: '管理员列表'
            },
            {
              key: '/user/users',
              label: '用户列表'
            }
          ]
        },
        {
          icon: React.createElement(InboxOutlined),
          label: '订单管理',
          children: [
            {
              key: '/order/orders',
              label: '订单列表'
            },
            {
              key: '/order/capitaltrend',
              label: '资金走向列表'
            },
            {
              key: '/order/cancelset',
              label: '取消订单配置'
            },
            {
              key: '/order/feeset',
              label: '小费选项配置'
            }
          ]
        },
        {
          icon: React.createElement(CarOutlined),
          label: '骑手管理',
          children: [
            {
              key: '/rider/riders',
              label: '骑手列表'
            },
            {
              key: '/rider/registers',
              label: '骑手审核列表'
            }
          ]
        },
        {
          icon: React.createElement(PieChartOutlined),
          label: '城市管理',
          children: [
            {
              key: '/city/citys',
              label: '运营城市列表'
            }
          ]
        },
        {
          icon: React.createElement(InsertRowLeftOutlined),
          label: '运营管理',
          children: [
            {
              key: '/city/valuations/valuations',
              label: '计划规则'
            },
            {
              key: '/city/weight/wight',
              label: '重量标签'
            },
            {
              key: '/city/tag/tag',
              label: '物品标签组'
            }
          ]
        },
        {
          icon: React.createElement(MoneyCollectOutlined),
          label: '优惠券管理',
          children: [
            {
              key: '/coupon/Coupons',
              label: '优惠券列表'
            },
            {
              key: '/coupon/setting',
              label: '优惠券设置'
            }
          ]
        },
        {
          icon: React.createElement(RedEnvelopeOutlined),
          label: '提现管理',
          children: [
            {
              key: '/cash/cashList',
              label: '提现列表'
            },
            {
              key: '/cash/cashconfig',
              label: '提现设置'
            }
          ]
        },
        {
          icon: React.createElement(SettingOutlined),
          label: '系统设置',
          children: [
            {
              key: '/system/apps',
              label: '小程序设置'
            },
            {
              key: '/system/Share',
              label: '分享设置'
            },
            {
              key: '/system/Integral',
              label: '积分设置'
            },
            {
              key: '/system/Wxsubscribe',
              label: '订阅消息设置'
            },
            {
              key: '/system/UserGuide',
              label: '用户指南'
            },
            {
              key: '/system/RiderGuide',
              label: '骑手指南'
            },
            {
              key: '/system/AgreementRider',
              label: '骑手协议'
            }
          ]
        }
      ]
    }
  }

  click = (e) => {
    console.log(e)
    console.log(e.key)
    this.props.to(e.key)
  }

  openChange() {
    console.log('OpenChange')
  }
  render() {
    return (
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/home']}
        defaultOpenKeys={['/home/user']}
        style={{
          height: '100%',
          borderRight: 0
        }}
        items={this.state.items}
        onOpenChange={() => this.openChange()}
        onClick={this.click}
      />
    )
  }
}
// 使用高阶组件包裹当前类组件
const NavigateCompont = WidthUseNavigate(SiderLeft)
// 导出包裹后的类组件
export default NavigateCompont
