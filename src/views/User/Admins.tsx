/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react'
import { Select, Input, Button, Divider, Table, Tag, Dropdown, Tooltip } from 'antd'
import { RedoOutlined, UserOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'
import type { MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import { useRequest } from 'ahooks';
import { getAdminData } from '@/service/OrederLiat'

const Wrap = styled.div`
  .ant-select {
    .ant-select-selector {
      height: 40px !important;
      background-color: blue;
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        line-height: 38px;
      }
    }
  }

  .ant-table-thead > tr > th {
    font-weight: 500 !important;
  }

  .ant-table-tbody tr td {
    .ant-btn {
      /* background-color: red !important; */
      padding: 0 7px;
      height: 24px;
      font-weight: 700;
    }
  }

  .ant-tag {
    border-radius: 4px !important;
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

export default function Admins() {
  /** '管理员编号', '账号', '手机号', '昵称' */
  const inpArr = ['管理员编号', '账号', '手机号', '昵称']
  const title: string = '管理员列表'

  const [adminData, setAdminData] = useState<
    Awaited<ReturnType<typeof getAdminData>>['data']['data']
  >([])
  const [totals, setTotals] = useState(0)
  //

  useEffect(() => {
    getAdminData()
      .then((res) => {
        setAdminData(res.data.data)
        setTotals(res.data.count)
      })
      .catch(() => {})
  }, [])

  // 表格数据类型
  interface DataType {
    key: string
    adminNo?: string
    adminName?: string
    mobileNumber?: string
    realName?: string
    status?: number
    createTime?: string
    updateTime?: string
    defaultPwd?: string
    updatedBy?: string
  }
  // 操作下拉菜单
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>修改</span>
    },
    {
      key: '2',
      label: <span>启用</span>,
      disabled: true
    },
    {
      key: '3',
      label: <span>禁用</span>
    },
    {
      key: '4',
      label: <span>重置</span>
    }
  ]
  // 表格行
  const columns: ColumnsType<DataType> = [
    {
      title: '编号',
      dataIndex: 'adminNo',
      render: (text: string) => <p>{text}</p>
    },
    {
      title: '账号',
      dataIndex: 'adminName',
      render: (text, record) => (
        <div>
          {text}
          <p>{record.defaultPwd && `初始密码:${record.defaultPwd}`}</p>
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
      render: (text) => (
        <Tag color={text === 1 ? 'green' : 'red'}>{text === 1 ? '启用' : '禁用'}</Tag>
      )
    },
    {
      title: '时间',
      dataIndex: 'createTime',
      render: (text, record) => (
        <div className="text-[12px]">
          <p>创建:{text.slice(0, 16).replace(/-/g, '/').replace(/T/g, ' ')}</p>
          <p>
            更新:
            {record.updateTime &&
              record.updateTime.slice(0, 16).replace(/-/g, '/').replace(/T/g, ' ')}
          </p>
        </div>
      )
    },
    {
      title: '操作',
      dataIndex: 'updatedBy',
      render: () => (
        <div className="flex">
          <Tooltip placement="top" title="操作人">
            <UserOutlined className="text-[18px] text-[#955ce6]" />
          </Tooltip>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button type="primary" ghost>
              · · ·
            </Button>
          </Dropdown>
        </div>
      )
    }
  ]
  // 表格数据
  const data = adminData.map((item) => ({ ...item, key: item.adminNo }))
  // 表格分页
  // const [paginationProps, setPaginationProps] = useState({})
  const paginationProps = {
    key: '1',
    total: totals,
    pageSize: 20,
    hideOnSinglePage: true,
    showTotal: (total: number) => `共${total}条数据`,
    itemRenderL: () => '123456',
    showQuickJumper: true
  }

  return (
    <Wrap className="h-full">
      <div className=" h-full overflow-y-scroll gdScroll">
        <div>
          <h2 className="text-[24px] font-medium">{title}</h2>
        </div>
        <div>
          <div className="flex flex-wrap mt-[20px]">
            {inpArr.map((item) => (
              <div className="w-[200px] h-[40px] mr-[8px] mb-[8px]" key={item}>
                <Input placeholder={item} className="h-full" />
              </div>
            ))}
            <div className="w-[200px] h-[40px] mr-[8px] mb-[8px]">
              <Select
                placeholder="状态"
                style={{ width: 200 }}
                options={[
                  { value: '状态：全部', label: '状态：全部' },
                  { value: '状态：启用', label: '状态：启用' },
                  { value: '状态：禁用', label: '状态：禁用' }
                ]}
                className="h-full w-full leading-[40px]"
              />
            </div>
          </div>
          <div className="mt-3">
            <Button size="large" className="w-[120px] mr-1">
              取消
            </Button>
            <Button type="primary" size="large" className="w-[120px]">
              搜索
            </Button>
          </div>
          <Divider />
        </div>
        <div className="flex justify-between">
          <NavLink to="/user/edit/add">
            <Button type="primary" size="large" className="">
              添加管理员
            </Button>
          </NavLink>
          <Button size="large" icon={<RedoOutlined />} href="https://www.google.com" />
        </div>
        {/* 表格 */}
        <Table
          rowSelection={{
            type: 'checkbox'
          }}
          bordered
          pagination={paginationProps}
          columns={columns}
          dataSource={data}
          className="mt-5"
        />
      </div>
    </Wrap>
  )
}
