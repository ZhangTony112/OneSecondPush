/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable no-tabs */
/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react'
import { LockOutlined, UserOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
// import { useRequest } from 'ahooks'
import { Button, Form, Input, Space } from 'antd'
import { getCode } from '@/service/api'

export default function login() {
  // 编程式导航
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const [code, setCode] = useState(null)
  useEffect(() => {
    getCode()
      .then((res) => {
        setCode(res)
      })
      .catch((err) => console.log(err))
  }, [])

  function refresh() {
    getCode()
      .then((res) => {
        setCode(res)
      })
      .catch((err) => console.log(err))
  }

  const [form] = Form.useForm()
  const ruleRequire = { required: true, message: '此项不能为空' }
  return (
    <div className="text-[#333] text-[14px] leading-[1.5]">
      <div className="box-border">
        <div className="w-[100vw] h-[100vh] min-w-[1200px] flex justify-center items-center">
          <div className="box-border">
            <div className="flex justify-center items-center">
              <svg
                data-v-18804380=""
                viewBox="0 0 45 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[45px] h-[30px]"
              >
                <path
                  d="M24.7203 29.704H41.1008C41.6211 29.7041 42.1322 29.5669 42.5828 29.3061C43.0334 29.0454 43.4075 28.6704 43.6675 28.2188C43.9275 27.7672 44.0643 27.2549 44.0641 26.7335C44.0639 26.2121 43.9266 25.6999 43.6662 25.2485L32.6655 6.15312C32.4055 5.70162 32.0315 5.32667 31.581 5.06598C31.1305 4.8053 30.6195 4.66805 30.0994 4.66805C29.5792 4.66805 29.0682 4.8053 28.6177 5.06598C28.1672 5.32667 27.7932 5.70162 27.5332 6.15312L24.7203 11.039L19.2208 1.48485C18.9606 1.03338 18.5864 0.658493 18.1358 0.397853C17.6852 0.137213 17.1741 0 16.6538 0C16.1336 0 15.6225 0.137213 15.1719 0.397853C14.7213 0.658493 14.3471 1.03338 14.0868 1.48485L0.397874 25.2485C0.137452 25.6999 0.000226653 26.2121 2.8053e-07 26.7335C-0.000226092 27.2549 0.136554 27.7672 0.396584 28.2188C0.656614 28.6704 1.03072 29.0454 1.48129 29.3061C1.93185 29.5669 2.44298 29.7041 2.96326 29.704H13.2456C17.3195 29.704 20.3239 27.9106 22.3912 24.4118L27.4102 15.7008L30.0986 11.039L38.1667 25.0422H27.4102L24.7203 29.704ZM13.0779 25.0374L5.9022 25.0358L16.6586 6.36589L22.0257 15.7008L18.4322 21.9401C17.0593 24.2103 15.4996 25.0374 13.0779 25.0374Z"
                  fill="#955ce6"
                  // eslint-disable-next-line react/jsx-closing-tag-location
                ></path>
              </svg>
              <div className="ml-[20px] text-[26px] font-medium">一秒快送后台管理系统</div>
            </div>
            <div className="w-[800px] h-[500px] mt-[40px] flex justify-between items-start shadow-md">
              <div className="w-[400px] h-[500px] p-[40px] flex justify-center items-center">
                <img
                  src="	http://192.168.121.66:8888/_nuxt/assets/images/login.png"
                  alt=""
                  className="w-[360px]"
                />
              </div>
              <div className="w-[400px] h-[500px] p-[40px] ">
                <div className="box-border">
                  <div className="text-[20px] ml-[8px] text-center box-border mb-[40px]">
                    账号密码登录
                  </div>
                  <Form
                    form={form}
                    name="normal_login"
                    size="large"
                    className="login-form"
                    initialValues={{
                      remember: true
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item name="username" validateTrigger="onBlur" rules={[ruleRequire]}>
                      <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="管理员账号"
                      />
                    </Form.Item>
                    <Form.Item name="password" validateTrigger="onBlur" rules={[ruleRequire]}>
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="管理员密码"
                      />
                    </Form.Item>

                    <Form.Item>
                      <Space.Compact>
                        <Form.Item name="code" validateTrigger="onBlur" rules={[ruleRequire]}>
                          <Input
                            prefix={<SafetyCertificateOutlined className="site-form-item-icon" />}
                            type="text"
                            placeholder="输入验证码"
                          />
                        </Form.Item>
                        <Form.Item>
                          <div>
                            <img
                              onClick={refresh}
                              className="w-full h-full cursor-pointer"
                              src={`data:image/svg+xml;base64,${btoa(code?.data.svg)}`}
                              alt=""
                            />
                          </div>
                        </Form.Item>
                      </Space.Compact>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="w-full mt-[30px]">
                        登录
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
            <div className="mt-12 text-xs text-gray-500 flex justify-center items-center">
              <p>Copyright © 2022 包小盒 All right reserved.</p>
            </div>
            <div className="mt-3 text-sm flex justify-center items-center">
              <p>浙ICP备19025175号-4 aaa浙公网安备 33010602011191号</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
