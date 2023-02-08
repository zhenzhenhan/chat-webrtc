import React, { memo } from 'react'
import CallIcon from '@mui/icons-material/Call'
import CallEndIcon from '@mui/icons-material/CallEnd'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const styles = {
  alertBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

const ComingCallSnackbar = memo(({ snackbar, username }) => {
  return (
    <>
      <Snackbar
        open={snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={'info'} sx={{ width: '100%' }} onClose={close}>
          <div style={styles.alertBox}>
            {username}的通话请求
            <IconButton color="primary">
              <CallIcon />
            </IconButton>
            <IconButton color="error">
              <CallEndIcon />
            </IconButton>
          </div>
        </Alert>
      </Snackbar>
    </>
  )
})

export default ComingCallSnackbar
