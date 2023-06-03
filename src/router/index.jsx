/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
// import { LoadingOutlined } from '@ant-design/icons';
import Login from '../views/Authority/Login'

// import Personality from '../views/Personality'
// import Playlist from '../views/Playlist'
// import List from '../views/list'
// import Singger from '../views/singger'

// function AuthRoute(props) {
//   const auth = localStorage.getItem('token')
//   return auth ? props.children : <Navigate to="/login" />
// }

export default function Routerconfig() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/login" />
    },
    {
      path: '/login',
      element: <Login />
    }
    // {
    //   path: '/Personality',
    //   element: (
    //     <AuthRoute>
    //       <Personality />
    //     </AuthRoute>
    //   )
    // }
    // {
    //   path: '/Playlist',
    //   element: <Playlist />
    // },
    // {
    //   path: '/list',
    //   element: <List />
    // },
    // 111111
  ])
}
