import React, { memo } from 'react'
import { ActiveUserListItemWrapper } from './style'
import userAvatar from '@/assets/userAvatar.png'

const ActiveUserListItem = memo(({ activeUser, index }) => {
  const handleListItemPressed = () => {
    if (index === 0) return
    // 点击直接呼叫
    console.log('handleListItemPressed')
  }
  return (
    <ActiveUserListItemWrapper>
      <div className="active_user_list_item" onClick={handleListItemPressed}>
        <div className="active_user_list_image_container">
          <img className="active_user_list_image" src={userAvatar} alt="" />
        </div>
        <span className="active_user_list_text">{activeUser.username}</span>
        {index === 0 && <span className="active_user_list_me">我</span>}
      </div>
    </ActiveUserListItemWrapper>
  )
})

export default ActiveUserListItem
