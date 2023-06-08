import React, { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import { Input, Button, Select, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const Ager = styled.div`
  .css-dev-only-do-not-override-aui75v.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector {
    height: 40px;
  }
  /* 设置滚动条宽度和颜色 */
  .gdScroll::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: transparent;
  }
  /* 设置滚动条轨道的颜色 */
  .gdScroll::-webkit-scrollbar-track {
    background: transparent;
  }

  /* 设置滚动条滑块的颜色和样式 */
  .gdScroll::-webkit-scrollbar-thumb {
    background-color: #eeeeee;
    border-radius: 5px;
  }
  .group > button {
    border: 1px solid #955ce6;
  }
`
// 搜索框
const AdminsIndex: React.FC = function () {
  interface InputItem {
    placeholder: string
  }

  const inputs: InputItem[] = [
    { placeholder: '订单编号' },
    { placeholder: '代理编号' },
    { placeholder: '城市编号' },
    { placeholder: '描述' }
  ]
  // Tab表格
  interface DataType {
    key: React.Key
    agentNo: string
    agentAccount: string
    mobileNumber: string
    realName: string
    status: number
    createTime: string
    updateTime: string
    defaultPwd: string
    updatedBy: string
    operationButton: React.ReactNode
    operationIcon: React.ReactNode
  }
  const columns: ColumnsType<DataType> = [
    {
      title: '订单编号',
      dataIndex: 'updatedBy'
    },
    {
      title: '平台收入',
      dataIndex: 'DataType',
      render: (_, record) => (
        <div>
          <div>{record.agentNo}</div>
          <div>初始密码:{record.defaultPwd}</div>
        </div>
      )
    },
    {
      title: '代理收入',
      dataIndex: 'mobileNumber'
    },
    {
      title: '骑手收入',
      dataIndex: 'realName'
    },
    {
      title: '描述',
      dataIndex: 'status',
      render: (status) => {
        if (status === 1) {
          return <Tag color="green">启动</Tag>
        }
        return <Tag color="red">禁用</Tag>
      }
    },
    {
      title: '时间',
      dataIndex: 'createTime'
    }
  ]

  const data: DataType[] = []

  const handleChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(`selected ${value}`)
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    // eslint-disable-next-line no-console
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0

  return (
    <Ager className=" h-full">
      <div className="h-full overflow-y-scroll gdScroll p-5">
        <div className=" text-[24px] text-[#33333] font-[500] mb-4">管理员列表</div>
        <div className=" flex flex-wrap justify-start leading-5">
          {inputs.map((input) => (
            <Input
              key={input.placeholder}
              placeholder={input.placeholder}
              className="!w-[12.5rem] h-10 !mr-2 !mb-2"
            />
          ))}
          <Select
            placeholder="状态"
            style={{ width: 200, height: 40 }}
            onChange={handleChange}
            options={[
              { value: '状态:全部', label: '状态:全部' },
              { value: '状态:启用', label: '状态:启用' },
              { value: '状态:禁止', label: '状态:禁止' }
            ]}
          />
        </div>
        <div className="mt-8 mb-8">
          <Button className="w-32 !h-10 mr-2">取消</Button>
          <Button className="w-32 !h-10" type="primary">
            搜索
          </Button>
        </div>
        <div className="relative">
          <Table bordered rowSelection={rowSelection} columns={columns} dataSource={data} />
          <span style={{ position: 'absolute', bottom: 17, right: 280 }}>
            {hasSelected ? `共 ${selectedRowKeys.length} 条数据` : ''}
          </span>
        </div>
      </div>
    </Ager>
  )
}

export default AdminsIndex
