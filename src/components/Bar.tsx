/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
// import React from 'react'

// 定义组件类型
// 组件势函数 关注点：参数与返回值
// 组件函数的参数 props 组件函数的返回值jsx元素

// interface IProps<T extends Number[]> {
//   a: Number
//   b?: String[]
//   c: React.CSSProperties
//   d: T
//   children: React.ReactNode
// }

// React内置类型
// JSX.Element
// React.ReactChild
// React.ReactNode

// React.ReactNode === React.ReactChild | React.ReactChild[] | null
// React.ReactNode === JSX.Element | JSX.Element[] | string

// export default function Bar(props: IProps): JSX.Element {
//   return <div style={props.c} />
// }

// 行内样式类型 ： React.CSSProperties

// 光放提供的函数组件的类型： React.FC<T>(React.FunctionalComponet)

// const Bar: React.FC<IProps<[1, 2, 3]>> = (
//   props = {
//     a: 1,
//     b: [''],
//     c: {},
//     d: [1, 2, 3],
//     children: <div />
//   }
// ) => {
//   console.log(props.a)
//   const fn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     console.log(e)
//   }
//   return <button onClick={fn}>123</button>
// }

// export default Bar

export {}
