import React from 'react'
import { Outlet } from 'react-router-dom'
import './UserMain.scss'

const UserMain = () => {
  return (
    <div className='UserMain'>
      <Outlet/>
    </div>
  )
}

export default UserMain
