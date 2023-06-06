/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { AxiosResponse } from 'axios'
import type { RadioChangeEvent } from 'antd'
import { useRequest } from 'ahooks'
import { Button, Form, Space, Radio, message } from 'antd'
import { Coupon, changeCoupon } from '@/service/api'

export default function CashConfig() {
  // 全局提示
  const [messageApi, contextHolder] = message.useMessage()
  const [form] = Form.useForm()

  // 单选组的默认布尔值
  const True: boolean = true
  const False: boolean = false

  /// 接受请求的值
  const [newUserOpen, setnewUserOpen] = useState<boolean>(true)
  const [shareOpen, setshareOpen] = useState<boolean>(true)

  // 提现设置的响应数据类型
  type CouponResponse = {
    code: number
    msg: string
    data: {
      shareOpen: boolean
      newUserOpen: boolean
      newUserRules: { couponNo: string; probability: number }[]
      shareUserRules: undefined[]
    }
  }

  // 获取请求
  useEffect(() => {
    // 设置加载
    Coupon()
      .then((res: AxiosResponse<CouponResponse>) => {
        // 根据请求返回值确认默认值
        form.setFieldsValue({
          'shareradio-group': res.data.data.shareOpen,
          'Userradio-group': res.data.data.newUserOpen
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // 请求 手动触发
  const { run } = useRequest(
    () =>
      changeCoupon({
        newUserOpen,
        shareOpen,
        newUserRules: [],
        shareUserRules: []
      }),
    {
      manual: true,
      onSuccess: () => {
        messageApi.open({
          type: 'success',
          content: '更新配置成功'
        })
      }
    }
  )

  // 改变单选按钮组的值
  const onnewUserOpenChange = (e: RadioChangeEvent): void => {
    setnewUserOpen(e.target.value)
  }

  const onshareOpenChange = (e: RadioChangeEvent): void => {
    setshareOpen(e.target.value)
  }

  return (
    <div className="p-[20px]">
      {contextHolder}
      <div className="text-[20px] font-semibold">提现设置</div>
      <div className="w-[600px] px-[50px] mt-[40px]">
        <Form name="validateOnly" form={form} layout="vertical" autoComplete="off">
          <Form.Item name="shareradio-group" label="是否开启此项功能">
            <Radio.Group onChange={onshareOpenChange} value={shareOpen}>
              <Radio value={True}>开始</Radio>
              <Radio value={False}>关闭</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="Userradio-group" label="是否开启此项功能">
            <Radio.Group onChange={onnewUserOpenChange} value={newUserOpen}>
              <Radio value={True}>开始</Radio>
              <Radio value={False}>关闭</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" size="large" onClick={run}>
                提交保存
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
