import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { usernameAtom } from '../../store'
import logo from '../../assets/logo.png'
import { LoginWrapper } from './style'
import useSocket from '@/hooks/useSocket'
import UsernameInput from './components/UsernameInput'
import SubmitButton from './components/SubmitButton'

const login = memo(() => {
  const navigate = useNavigate()
  const { registerNewUser } = useSocket()
  const [username, setUsername] = useAtom(usernameAtom)
  const handleSubmitButtonPressed = () => {
    // 注册新用户
    registerNewUser(username)
    // 跳转到dashboard页面
    navigate('/dashboard')
  }

  return (
    <LoginWrapper>
      <div className="login-page_container background_main_color">
        <div className="login-page_login_box background_secondary_color">
          <div className="login-page_logo_container">
            <img className="login-page_logo_image" src={logo} alt="VideoChat" />
          </div>
          <div className="login-page_title_container">
            <h2>欢迎来到登录页面</h2>
          </div>
          <UsernameInput username={username} setUsername={setUsername} />
          <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
        </div>
      </div>
    </LoginWrapper>
  )
})

export default login
