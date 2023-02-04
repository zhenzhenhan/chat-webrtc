import React, { memo } from 'react'
import { UsernameInputWrapper } from './style'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiFormLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8a85ff',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
})

const UsernameInput = memo(({ username, setUsername }) => {
  return (
    <UsernameInputWrapper>
      <div className="login-page_input_container">
        <CssTextField
          label="您的姓名"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
      </div>
    </UsernameInputWrapper>
  )
})

export default UsernameInput
