/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button, Select, Table, Tooltip, Tag } from 'antd'
// import { UserOutlined } from '@ant-design/icons'
import AgentUserSet from '@/static/svgImg/agentUserSet.svg'
import AgentLittle from '@/static/svgImg/agentLittle.svg'
import type { ColumnsType } from 'antd/es/table'
import moment from 'moment'

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
    { placeholder: '用户编号' },
    { placeholder: '昵称' },
    { placeholder: '手机号' }
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
  // 点击事件
  const handleClick = (record: DataType) => {
    // eslint-disable-next-line no-console
    console.log('record', record)
  }
  const lightText = <span>操作人</span>

  const columns: ColumnsType<DataType> = [
    {
      title: '编号',
      dataIndex: 'updatedBy'
    },
    {
      title: '账户',
      dataIndex: 'DataType',
      render: (_, record) => (
        <div>
          <div>{record.agentNo}</div>
          <div>初始密码:{record.defaultPwd}</div>
        </div>
      )
    },
    {
      title: '手机号',
      dataIndex: 'mobileNumber'
    },
    {
      title: '姓名',
      dataIndex: 'realName'
    },
    {
      title: '状态',
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
      dataIndex: 'createTime',
      render: (text) => {
        const createTime = moment(text).format('YYYY/MM/DD HH:mm')
        const updateTime = moment(text)
          .add(6, 'days')
          .subtract(2, 'hours')
          .format('YYYY/MM/DD HH:mm')
        return (
          <div>
            <div>创建: {createTime}</div>
            <div>更新: {updateTime}</div>
          </div>
        )
      }
    },
    {
      title: '操作',
      dataIndex: 'operationIcon',
      render: (text, record) => (
        <div className=" flex ">
          <Tooltip title={lightText}>
            <div className="w-12">
              <img className="w-8" src={AgentUserSet} alt="用户" />
            </div>
          </Tooltip>
          <div className="group relative ">
            <Button className="w-12" onClick={() => handleClick(record)}>
              <img className="w-10 " src={AgentLittle} alt="修改" />
            </Button>
            <div className="hidden group-hover:block shadow-black">
              <div className="flex flex-col w-24  z-10  absolute left-1 bg-white shadow-[0_0px_20px_-3px_rgba(0,0,0,0.3)] ">
                <Button type="text">修改</Button>
                <Button type="text" disabled>
                  启用
                </Button>
                <Button type="text">禁用</Button>
                <Button type="text">重置密码</Button>
              </div>
            </div>
          </div>
        </div>
      )
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
