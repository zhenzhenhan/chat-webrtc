import React, { memo } from 'react'
import { SubmitButtonWrapper } from './style'
import Button from '@mui/material/Button'
import LoadingButton from '@mui/lab/LoadingButton'

const SubmitButton = memo(({ loading, handleSubmitButtonPressed }) => {
  return (
    <SubmitButtonWrapper>
      <div className="login-page_button_container">
        <LoadingButton
          loading={loading}
          variant="outlined"
          size="large"
          onClick={handleSubmitButtonPressed}
        >
          进入视频聊天
        </LoadingButton>
      </div>
    </SubmitButtonWrapper>
  )
})

export default SubmitButton
