import { Navigate } from 'react-router-dom'
import React from 'react'

const Login = React.lazy(() => import('../pages/login/login'))
const DashBoard = React.lazy(() => import('../pages/dashboard/dashboard'))

const routes = [
  {
    path: '/',
    element: <Navigate to={'/login'} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
]

export default routes
