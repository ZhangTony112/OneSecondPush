import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import type { FormInstance, RadioChangeEvent } from 'antd'
import { Button, Form, Input, Space, Radio } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

function SubmitButton({ form }: { form: FormInstance }) {
  const [submittable, setSubmittable] = React.useState(false)

  const values = Form.useWatch([], form)

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true)
      },
      () => {
        setSubmittable(false)
      }
    )
  }, [values])

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      提交保存
    </Button>
  )
}

export default function Edit() {
  // 输入框
  const [form] = Form.useForm()
  // 单选框
  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  return (
    <div>
      <div className="flex">
        <Link to="/user/agent" className=" text-[24px] !text-black">
          <ArrowLeftOutlined />
        </Link>
        <div className="text-[24px] ml-4">新增代理</div>
      </div>
      <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
        <Form.Item
          className="w-[500px] mt-4"
          name="name"
          label="账户名称"
          rules={[{ required: true }]}
        >
          <Input className="h-10" />
        </Form.Item>
        <Form.Item
          className="w-[500px] h-40px"
          name="age"
          label="真实姓名"
          rules={[{ required: true }]}
        >
          <Input className="h-10" />
        </Form.Item>
        <Form.Item
          className="w-[500px] h-40px"
          name="iphone"
          label="手机号"
          rules={[{ required: true }]}
        >
          <Input className="h-10" />
        </Form.Item>
        <Form.Item>
          <div>是否启用</div>
          <div className="mt-8">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>启用</Radio>
              <Radio value={2}>禁用</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form} />
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
