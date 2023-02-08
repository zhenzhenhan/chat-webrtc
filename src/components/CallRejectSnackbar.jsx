import React, { memo } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const CallRejectSnackbar = memo(({ snackbar, username, handleClose }) => {
  const close = () => handleClose()
  return (
    <>
      <Snackbar
        open={snackbar}
        autoHideDuration={5000}
        onClose={close}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={'error'} sx={{ width: '100%' }} onClose={close}>
          {username}拒绝了您的通话!
        </Alert>
      </Snackbar>
    </>
  )
})

export default CallRejectSnackbar
