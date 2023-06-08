import React from 'react'
import type { FormInstance } from 'antd'
import { Button, Form, Input, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

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
  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }
  return (
    <div className="p-5">
      <div className="flex">
        <div className="text-[24px] mb-4">小费配置</div>
      </div>
      <div>
        <div className="text-[16px] mb-4">小程序端展示的小费选项</div>
        <Input value="3" style={{ width: '60%' }} />
        <Form name="dynamic_form_item" onFinish={onFinish} style={{ maxWidth: 600 }}>
          <Form.List
            name="names"
            rules={[
              {
                // eslint-disable-next-line consistent-return
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error('At least 2 passengers'))
                  }
                }
              }
            ]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => (
                  <Form.Item required={false} key={field.key}>
                    <Form.Item
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Please input passenger's name or delete this field."
                        }
                      ]}
                      noStyle
                    >
                      <Input placeholder="passenger name" style={{ width: '60%' }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    className="mt-4"
                    type="default"
                    onClick={() => add()}
                    icon={<PlusOutlined />}
                  >
                    添加一项
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>

      <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
        <Form.Item className="w-[500px] mt-4" name="name" label="平台抽成户">
          <Input className="h-10" />
        </Form.Item>
        <Form.Item className="w-[500px] h-40px" name="age" label="代理抽成">
          <Input className="h-10" />
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
