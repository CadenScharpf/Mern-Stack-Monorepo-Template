import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'


function User() {
    const location = useLocation()
  return location.pathname === '/user' ? (
    <div>user dashboard</div>
  ) : (
    <Outlet />
  )
}

export default User