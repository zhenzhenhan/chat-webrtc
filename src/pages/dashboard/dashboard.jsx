import React, { memo, useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { useAtom } from 'jotai'
import { snackbarAtom, alertMessageAtom, alertSeverityAtom } from '@/store'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Slide from '@mui/material/Slide'
import { DashBoardWrapper } from './style'
import ActiveUserList from './components/ActiveUserList'
import useWebRtc from '@/hooks/useWebRtc'
import DirectCall from './components/DirectCall'

function TransitionUp(props) {
  return <Slide {...props} direction="up" />
}

const dashboard = memo(() => {
  const [transition, setTransition] = useState(undefined)
  const { getLocalStream } = useWebRtc()
  const [snackbar, setSnackbar] = useAtom(snackbarAtom)
  const [alertMessage] = useAtom(alertMessageAtom)
  const [alertSeverity] = useAtom(alertSeverityAtom)

  useEffect(() => {
    setTransition(() => TransitionUp)
    // 获取本地流
    getLocalStream()
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbar(false)
  }
  return (
    <DashBoardWrapper>
      <div className="dashboard_container background_main_color">
        <Snackbar
          open={snackbar}
          autoHideDuration={3000}
          onClose={handleClose}
          TransitionComponent={transition}
        >
          <Alert
            onClose={handleClose}
            severity={alertSeverity}
            sx={{ width: '100%' }}
          >
            {alertMessage}
          </Alert>
        </Snackbar>
        <div className="dashboard_left_section">
          <div className="dashboard_content_container">
            <DirectCall />
          </div>
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
