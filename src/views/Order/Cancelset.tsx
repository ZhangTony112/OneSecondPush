/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Button } from 'antd'
import Cancellation from '@/components/cancellation'
import Cancel from '@/components/cancel'
import styled from 'styled-components'

const CancelsetStyle = styled.div`
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
const Cancelset: React.FC = function () {
  return (
    <CancelsetStyle className=" h-full p-5">
      <div className="h-full overflow-y-scroll gdScroll p-5">
        <h1 className="text-3xl font-medium ">取消订单配置</h1>
        <div className=" mt-8">
          <div>
            <div>
              <div className="leading-[40px] text-[#333333] w-[128px] h-[40px] text-[14px]">
                用户取消订单规则:
              </div>
              <div className="text-[#999999] leading-[40px] text-[14px] mb-[12px]">
                用户在订单状态为【已接单、配送中】 时取消订单会触发此规则
              </div>
              <div>
                <Cancellation />
              </div>
            </div>
          </div>
          {/* 添加组件 */}
          <div className="leading-[40px] text-[14px]">骑手取消订单规则:</div>
          <div className="leading-[40px] text-[14px] text-[#999999] mb-[12px]">
            骑手在订单状态为【已接单、配送中】时取消订单会触发此规则
          </div>
          <div>
            <Cancellation />
          </div>
          <div>
            <div className="leading-[40px] text-[14px] mb-[12px]">用户取消订单选项配置</div>
            <div>
              <Cancel />
            </div>
          </div>

          <div>
            <div className="leading-[40px] text-[14px] mb-[12px]">骑手取消订单选项配置</div>
            <div>
              <Cancel />
            </div>
          </div>
          <div>
            <div className="leading-[40px] text-[14px] mb-[12px]">管理员取消订单选项配置</div>
            <div>
              <Cancel />
            </div>
          </div>

          <div>
            <div className="leading-[40px] text-[14px] mb-[12px]">代理取消订单选项配置</div>
            <div>
              <Cancel />
            </div>
          </div>
          <div>
            <Button type="primary" className="!w-[110px] !h-[40px]">
              提交保存
            </Button>
          </div>
        </div>
      </div>
    </CancelsetStyle>
  )
}

export default Cancelset
