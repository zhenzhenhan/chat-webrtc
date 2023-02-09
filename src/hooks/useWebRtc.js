import { useAtom } from 'jotai'
import {
  usernameAtom,
  localStreamAtom,
  snackbarAtom,
  alertMessageAtom,
  alertSeverityAtom,
  callStateAtom,
  callingAtom,
  callRejectAtom,
  comingCallAtom,
  callUserNameAtom,
  connectUserSocketIdAtom,
} from '@/store'
import useSocket from './useSocket'

const defaultConstrains = {
  video: true,
  audio: true,
}

const useWebRtc = () => {
  const { sendPreOffer } = useSocket()
  const [username] = useAtom(usernameAtom)
  const [, setSnackbar] = useAtom(snackbarAtom)
  const [, setAlertMessage] = useAtom(alertMessageAtom)
  const [, setAlertSeverity] = useAtom(alertSeverityAtom)
  const [, setLocalStream] = useAtom(localStreamAtom)
  const [, setCallState] = useAtom(callStateAtom)
  const [, setCalling] = useAtom(callingAtom)
  const [, setCallReject] = useAtom(callRejectAtom)
  const [, setComingCall] = useAtom(comingCallAtom)
  const [, setCallUserName] = useAtom(callUserNameAtom)
  const [, setConnectUserSocketId] = useAtom(connectUserSocketIdAtom)

  // 获取本地媒体流
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

  // 呼叫某个用户，获取该用户的信息
  const callToOtherUser = (calleeDetails) => {
    setConnectUserSocketId(calleeDetails.socketId)
    // 设置呼叫状态
    setCallState('CALL_IN_PROGRESS')
    // 设置弹窗显示
    setCalling(true)
    // 发送preOffer信令
    sendPreOffer({
      callee: calleeDetails,
      caller: { username },
    })
  }

  return { getLocalStream, callToOtherUser }
}

export default useWebRtc
