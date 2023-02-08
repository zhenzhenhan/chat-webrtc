import React, { memo, useState } from 'react'
import { ActiveUserListItemWrapper } from './style'
import userAvatar from '@/assets/userAvatar.png'
import CallingSnackbar from '@/components/CallingSnackbar'
import CallRejectSnackbar from '@/components/CallRejectSnackbar'
import ComingCallSnackbar from '@/components/ComingCallSnackbar'

const ActiveUserListItem = memo(({ activeUser, index }) => {
  const [calling, setCalling] = useState(false)
  const [callReject, setCallReject] = useState(false)
  const [comingCall, setComingCall] = useState(true)
  const [username, setUsername] = useState('')
  const handleListItemPressed = () => {
    if (index === 0) return
    setCalling(true)
    setUsername(activeUser.username)
    // 点击直接呼叫
    console.log('handleListItemPressed', activeUser)
    setTimeout(() => {
      setCalling(false)
      setCallReject(true)
    }, 3000)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setCallReject(false)
  }
  return (
    <ActiveUserListItemWrapper>
      <CallingSnackbar snackbar={calling} username={username} />
      <CallRejectSnackbar
        snackbar={callReject}
        username={username}
        handleClose={handleClose}
      />
      <ComingCallSnackbar snackbar={comingCall} />
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
