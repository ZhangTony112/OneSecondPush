import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'

const Cancel: React.FC = function () {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values)
  }

  return (
    <Form name="dynamic_form_item" onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.List name="names">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field) => (
              <Form.Item key={field.key}>
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
                type="default"
                onClick={() => {
                  add()
                }}
                icon={<PlusOutlined className="align-[0.15rem]" />}
                className="!w-[101px ] !h-[40px]"
              >
                添加一项
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  )
}

export default Cancel
