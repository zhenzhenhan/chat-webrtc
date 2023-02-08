import { useState } from 'react'
import { useAtom } from 'jotai'
import {
  localStreamAtom,
  snackbarAtom,
  alertMessageAtom,
  alertSeverityAtom,
  callStateAtom,
} from '@/store'

const defaultConstrains = {
  video: true,
  audio: true,
}

const useWebRtc = () => {
  const [, setSnackbar] = useAtom(snackbarAtom)
  const [, setAlertMessage] = useAtom(alertMessageAtom)
  const [, setAlertSeverity] = useAtom(alertSeverityAtom)
  const [, setLocalStream] = useAtom(localStreamAtom)
  const [, setCallState] = useAtom(callStateAtom)

  const getLocalStream = () => {
    navigator.mediaDevices
      .getUserMedia(defaultConstrains)
      .then((stream) => {
        setAlertMessage('获取本地流成功')
        setAlertSeverity('success')
        setSnackbar(true)
        setLocalStream(stream)
        setCallState('CALL_AVAILABLE')
      })
      .catch((error) => {
        setAlertMessage('获取本地流失败')
        setAlertSeverity('error')
        setSnackbar(true)
      })
  }

  return { getLocalStream }
}

export default useWebRtc
