import React, { memo, useState } from 'react'
import { ActiveUserListItemWrapper } from './style'
import Avatar from '@mui/material/Avatar'
import { stringAvatar } from '@/utils/avatar'
import { useAtom } from 'jotai'
import { callingAtom, callRejectAtom, comingCallAtom } from '@/store'
import CallingSnackbar from '@/components/CallingSnackbar'
import CallRejectSnackbar from '@/components/CallRejectSnackbar'
import ComingCallSnackbar from '@/components/ComingCallSnackbar'
import useWebRtc from '@/hooks/useWebRtc'

const ActiveUserListItem = memo(({ activeUser, index }) => {
  const { callToOtherUser } = useWebRtc()
  const [calling] = useAtom(callingAtom)
  const [callReject, setCallReject] = useAtom(callRejectAtom)
  const [comingCall] = useAtom(comingCallAtom)
  const [username, setUsername] = useState('')
  const handleListItemPressed = () => {
    if (index === 0) return
    setUsername(activeUser.username)
    callToOtherUser(activeUser)
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
      <div className="active_user_list_container">
        <div className="active_user_list_item" onClick={handleListItemPressed}>
          <div className="active_user_list_image_container">
            <Avatar {...stringAvatar(activeUser.username)} />
          </div>
          <span className="active_user_list_text">{activeUser.username}</span>
        </div>
        {index === 0 && <span className="active_user_list_me">我</span>}
      </div>
    </ActiveUserListItemWrapper>
  )
})

export default ActiveUserListItem
