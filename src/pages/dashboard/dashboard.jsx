import React, { memo } from 'react'
import logo from '../../assets/logo.png'
import { useAtom } from 'jotai'
import { usernameAtom } from '../../store'
import { DashBoardWrapper } from './style'
import ActiveUserList from './components/ActiveUserList'

const dashboard = memo(() => {
  const [username] = useAtom(usernameAtom)
  return (
    <DashBoardWrapper>
      <div className="dashboard_container background_main_color">
        <div className="dashboard_left_section">
          <div className="dashboard_content_container">内容</div>
          <div className="dashboard_rooms_container background_secondary_color ">
            房间
          </div>
        </div>
        <div className="dashboard_right_section background_secondary_color">
          <div className="dashboard_active_users_list">
            <div className="active_users_title">在线用户</div>
            <ActiveUserList />
          </div>
          <div className="dashboard_logo_container">
            <img className="dashboard_logo_image" src={logo} alt="" />
          </div>
        </div>
      </div>
    </DashBoardWrapper>
  )
})

export default dashboard
