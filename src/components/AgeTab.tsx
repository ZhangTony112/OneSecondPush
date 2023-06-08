/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button, Table, Tooltip, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { UserOutlined, ReloadOutlined } from '@ant-design/icons'
// import { getUserList, ResponseData } from '@/service/api'
import { getUserList, ResponseData } from '@/service/OrederLiat'
import moment from 'moment'
import AgentUserSet from '@/static/svgImg/agentUserSet.svg'
import AgentLittle from '@/static/svgImg/agentLittle.svg'

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
const AgeTabCompon: React.FC = function () {
  // 请求的数据
  const [tableData, setTableData] = useState<ResponseData['data']['data']>([])

  useEffect(() => {
    getUserList().then((res) => {
      setTableData(res.data.data)
    })
  }, [])
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

  for (let i = 0; i < tableData.length; i += 1) {
    data.push({
      key: i,
      agentNo: tableData[i].agentAccount,
      agentAccount: tableData[i].agentAccount,
      mobileNumber: tableData[i].mobileNumber,
      realName: tableData[i].realName,
      status: tableData[i].status,
      createTime: tableData[i].createTime,
      updateTime: tableData[i].updateTime,
      defaultPwd: tableData[i].defaultPwd,
      updatedBy: tableData[i].updatedBy,
      operationButton: '...',
      operationIcon: <UserOutlined color="#955ce6" />
    })
  }
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

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
        <div>
          <div style={{ marginBottom: 30, borderTop: '1px solid #cccc' }}>
            <div className="flex justify-between text-center mt-8">
              <Link to="/user/agent/edit/add">
                <Button type="primary" className="w-24 !h-10" onClick={start} loading={loading}>
                  添加代理
                </Button>
              </Link>
              <Button className="w-14 !h-10 ">
                <ReloadOutlined />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Table bordered rowSelection={rowSelection} columns={columns} dataSource={data} />
            <span style={{ position: 'absolute', bottom: 17, right: 280 }}>
              {hasSelected ? `共 ${selectedRowKeys.length} 条数据` : ''}
            </span>
          </div>
        </div>
      </div>
    </Ager>
  )
}

export default AgeTabCompon
