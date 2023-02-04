import React, { memo } from 'react'
import { SubmitButtonWrapper } from './style'
import Button from '@mui/material/Button'

const SubmitButton = memo(({ handleSubmitButtonPressed }) => {
  return (
    <SubmitButtonWrapper>
      <div className="login-page_button_container">
        <Button
          variant="outlined"
          size="large"
          onClick={handleSubmitButtonPressed}
        >
          进入视频聊天
        </Button>
      </div>
    </SubmitButtonWrapper>
  )
})

export default SubmitButton
