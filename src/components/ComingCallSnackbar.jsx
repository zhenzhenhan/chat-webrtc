import React, { memo } from 'react'
import CallIcon from '@mui/icons-material/Call'
import CallEndIcon from '@mui/icons-material/CallEnd'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useAtom } from 'jotai'
import { callUserNameAtom } from '@/store'

const styles = {
  acceptBtn: {
    padding: '0',
    margin: '0 5px 0 10px',
  },
  rejectBtn: {
    padding: '0',
    margin: '0 0 0 10px',
  },
}

const ComingCallSnackbar = memo(({ snackbar }) => {
  const [username] = useAtom(callUserNameAtom)
  return (
    <>
      <Snackbar
        open={snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={'info'} sx={{ width: '100%' }}>
          {username}的通话请求
          <IconButton style={styles.acceptBtn} color="primary" size="small">
            <CallIcon fontSize="inherit" />
          </IconButton>
          <IconButton style={styles.rejectBtn} color="error" size="small">
            <CallEndIcon fontSize="inherit" />
          </IconButton>
        </Alert>
      </Snackbar>
    </>
  )
})

export default ComingCallSnackbar
