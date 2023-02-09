import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { usernameAtom } from '../../store'
import logo from '../../assets/logo.png'
import { LoginWrapper } from './style'
import useSocket from '@/hooks/useSocket'
import UsernameInput from './components/UsernameInput'
import SubmitButton from './components/SubmitButton'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const login = memo(() => {
  const navigate = useNavigate()
  const { registerNewUser } = useSocket()
  const [username, setUsername] = useAtom(usernameAtom)
  const [loading, setLoading] = useState(false)
  const [snackbar, setSnackbar] = useState(false)
  const handleSubmitButtonPressed = () => {
    setLoading(true)
    // 注册新用户
    const registerRes = registerNewUser(username)
    if (registerRes) {
      setLoading(false)
      // 跳转到dashboard页面
      navigate('/dashboard')
    } else {
      // 提示用户
      setLoading(false)
      setSnackbar(true)
    }
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackbar(false)
  }

  return (
    <LoginWrapper>
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={'error'} sx={{ width: '100%' }} onClose={handleClose}>
          服务错误，请重试!
        </Alert>
      </Snackbar>
      <div className="login-page_container background_main_color">
        <div className="login-page_login_box background_secondary_color">
          <div className="login-page_logo_container">
            <img className="login-page_logo_image" src={logo} alt="VideoChat" />
          </div>
          <div className="login-page_title_container">
            <h2>欢迎来到登录页面</h2>
          </div>
          <UsernameInput username={username} setUsername={setUsername} />
          <SubmitButton
            loading={loading}
            handleSubmitButtonPressed={handleSubmitButtonPressed}
          />
        </div>
      </div>
    </LoginWrapper>
  )
})

export default login
