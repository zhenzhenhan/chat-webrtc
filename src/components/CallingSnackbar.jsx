import React, { memo } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const CallingSnackbar = memo(({ snackbar, username }) => {
  return (
    <>
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={'info'} sx={{ width: '100%' }}>
          等待{username}接听...
        </Alert>
      </Snackbar>
    </>
  )
})

export default CallingSnackbar
