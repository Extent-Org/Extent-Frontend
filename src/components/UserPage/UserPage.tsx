import React from 'react'
import UserMain from './UserMain/UserMain'
import UserSidebar from './UserSidebar/UserSidebar'
import './UserPage.scss'
import BGEllipse from '../CreatorPage/CreatorPageComponents/BGEllipse'

const UserPage = () => {
  return (
    <div className='UserPage'>
        <BGEllipse/>
        <UserSidebar/>
        <UserMain/>
    </div>
  )
}

export default UserPage
