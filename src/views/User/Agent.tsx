import React, { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import { Input, Button, Select } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { getUserList, ResponseData } from '@/service/OrederLiat'
import AgeTabCompon from '@/components/AgeTab'

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
const Agents: React.FC = function () {
  interface InputItem {
    placeholder: string
  }

  const inputs: InputItem[] = [
    { placeholder: '代理编号' },
    { placeholder: '账户' },
    { placeholder: '手机号' },
    { placeholder: '昵称' }
  ]
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

  const handleChange = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(`selected ${value}`)
  }
  return (
    <Ager className=" h-full">
      <div className="h-full overflow-y-scroll gdScroll p-5">
        <div className=" text-[24px] text-[#33333] font-[500] mb-4">代理列表</div>
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
        <div>
          <AgeTabCompon />
        </div>
      </div>
    </Ager>
  )
}

export default Agents
