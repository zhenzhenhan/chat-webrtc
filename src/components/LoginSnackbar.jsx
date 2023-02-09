import React, { memo, useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const LoginSnackbar = memo(() => {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(3)
  const timeRef = useRef()
  useEffect(() => {
    //如果设置倒计时且倒计时不为0
    if (seconds && seconds !== 0) {
      timeRef.current = setTimeout(() => {
        setSeconds((seconds) => seconds - 1)
      }, 1000)
    } else {
      //跳转到登录页面
      navigate('/login')
    }
    return () => {
      clearTimeout(timeRef.current)
    }
  }, [seconds])

  return (
    <>
      <Snackbar
        open={true}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={'error'} sx={{ width: '100%' }}>
          您未登录，暂时无法使用视频通话功能！{seconds}秒后自动跳转到登录页面。
        </Alert>
      </Snackbar>
    </>
  )
})

export default LoginSnackbar
