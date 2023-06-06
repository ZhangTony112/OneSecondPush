/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react'
import { Input, Select, Button, Divider, Table } from 'antd'
import { getCashlist } from '@/service/api'
import { ReloadOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'

export default function CashList() {
  // 表格边框
  const border: boolean = true
  // 请求数据
  const [songCashList, setsongCashList] = useState<
    Awaited<ReturnType<typeof getCashlist>>['data']['data']
  >([])

  // 定义请求参数
  const [current, setcurrent] = useState<string>('1')
  const [bankName, setbankName] = useState<string>()
  const [cardNo, setcardNo] = useState<string>()
  const [cashNo, setcashNo] = useState<string>()
  const [pageSize, setpageSize] = useState<string>('20')
  const [realname, setrealname] = useState<string>()
  const [status, setstatus] = useState<string>()
  // 是否加载
  const [loading, setLoading] = useState<boolean>(false)

  // 表格数据类型
  interface DataType {
    key: React.Key
    name: string
    age: number
    address: string
  }
  // 表格标题值
  const columns: ColumnsType<DataType> = [
    {
      title: '编号',
      dataIndex: 'id'
    },
    {
      title: '提现用户',
      dataIndex: 'cashuser'
    },
    {
      title: '用户',
      dataIndex: 'user'
    },
    {
      title: '提现金额',
      dataIndex: 'amount'
    },
    {
      title: '提现账户',
      dataIndex: 'account'
    },
    {
      title: '状态',
      dataIndex: 'state'
    },
    {
      title: '时间',
      dataIndex: 'time'
    },
    {
      title: '操作',
      dataIndex: 'address'
    }
  ]

  // 表格数据
  const data: DataType[] = songCashList

  // 输入改变
  const bankNameCnhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbankName(e.target.value)
  }
  const cardNoCnhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcardNo(e.target.value)
  }

  const cashNoCnhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcashNo(e.target.value)
  }
  const realnameCnhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setrealname(e.target.value)
  }
  const statusCnhange = (e: string) => {
    setstatus(e)
  }

  // 搜索点击
  const [search, setSearch] = useState<boolean>(false)
  // 取消点击
  const [cancel, setcancel] = useState<boolean>(false)

  // 刷新点击
  const [refresh, setrefresh] = useState<boolean>(false)

  // 搜索点击改变事件
  const SearchCnhange = (): void => (search ? setSearch(false) : setSearch(true))

  // 刷新点击改变事件
  const refreshCnhange = (): void => (refresh ? setrefresh(false) : setrefresh(true))

  const oncancel = () => {
    setcardNo(undefined)
    setcashNo(undefined)
    setbankName(undefined)
    setrealname(undefined)
    setstatus(undefined)
    return cancel ? setcancel(false) : setcancel(true)
  }

  // 请求数据
  useEffect(() => {
    // 设置加载
    setLoading(true)
    getCashlist({ current, pageSize, bankName, cardNo, cashNo, realname, status })
      .then((res) => {
        setsongCashList(res.data.data)
      })
      // 请求完成关闭加载
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [search, cancel, refresh])

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    }
  }
  return (
    <div className="p-[20px]">
      <div className="text-[24px] font-medium">提现列表</div>
      <div className="mt-[20px]">
        <div className="flex flex-wrap ">
          <Input
            className="w-[200px] mr-[8px] mb-[8px]"
            size="large"
            placeholder="开户行"
            value={bankName}
            onChange={bankNameCnhange}
          />
          <Input
            className="w-[200px] mr-[8px] mb-[8px]"
            size="large"
            placeholder="银行卡号"
            value={cardNo}
            onChange={cardNoCnhange}
          />
          <Input
            className="w-[200px] mr-[8px] mb-[8px]"
            size="large"
            placeholder="真实姓名"
            value={realname}
            onChange={realnameCnhange}
          />
          <Input
            className="w-[200px] mr-[8px] mb-[8px]"
            size="large"
            placeholder="提现编号"
            value={cashNo}
            onChange={cashNoCnhange}
          />
          <Select
            size="large"
            placeholder="状态"
            style={{ width: 200 }}
            options={[
              { value: '', label: '状态:全部' },
              { value: '1', label: '状态:提现成功' },
              { value: '0', label: '状态:待提现' },
              { value: '-1', label: '状态:提现失败' }
            ]}
            onChange={statusCnhange}
          />
        </div>
        <div className="mt-[12px]">
          <Button size="large" className="w-[120px] mr-[10px]" onClick={oncancel}>
            取消
          </Button>

          <Button type="primary" size="large" className="w-[120px]" onClick={SearchCnhange}>
            搜索
          </Button>
        </div>
        <Divider className=" my-[24px] bg-[#e8e8e8]" />
      </div>
      <div className="flex justify-between items-center">
        <div className="justify-start flex " />
        <div className="justify-end items-center ">
          <Button icon={<ReloadOutlined />} size="large" onClick={refreshCnhange} />
        </div>
      </div>
      <div className="mt-[20px]">
        <Table
          rowSelection={{
            ...rowSelection
          }}
          bordered={border}
          columns={columns}
          dataSource={data}
          loading={loading}
        />
      </div>
    </div>
  )
}
