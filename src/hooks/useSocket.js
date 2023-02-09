import socketClient from 'socket.io-client'
import { useAtom } from 'jotai'
import {
  activeUsersAtom,
  comingCallAtom,
  callStateAtom,
  callUserNameAtom,
  connectUserSocketIdAtom,
} from '@/store'
const ENDPOINT = 'http://localhost:9000'
const socket = socketClient(ENDPOINT)

const useSocket = () => {
  const [, setActiveUsers] = useAtom(activeUsersAtom)
  const [, setComingCall] = useAtom(comingCallAtom)
  const [, setCallState] = useAtom(callStateAtom)
  const [, setCallUserName] = useAtom(callUserNameAtom)
  const [, setConnectUserSocketId] = useAtom(connectUserSocketIdAtom)
  const connectWithSocket = () => {
    // 连接服务器
    socket.connect()
    // 监听连接事件
    socket.on('connection', () => {
      console.log(socket.id)
    })
  }

  // 监听服务器的广播，获取在线用户列表
  const listenBroadcast = () => {
    socket.on('broadcast', (data) => {
      // 将活跃用户保存到store中
      console.log(data)
      switch (data.type) {
        case 'ACTIVE_USERS':
          // 把自己放在第一位
          const me = data.activeUsers.filter(
            (item) => item.socketId === socket.id
          )
          if (me.length === 0) return
          data.activeUsers = data.activeUsers.filter(
            (item) => item.socketId !== socket.id
          )
          data.activeUsers.unshift(me[0])
          setActiveUsers(data.activeUsers)
          break
        default:
          break
      }
    })
  }

  const registerNewUser = (username) => {
    const res = socket.emit('registerNewUser', {
      username,
      socketId: socket.id,
    })
    return res.connected
  }

  // 发送preOffer信令
  const sendPreOffer = (data) => {
    socket.emit('preOffer', data)
  }

  // 应答方监听preOffer信令
  const listenPreOffer = () => {
    socket.on('preOffer', (data) => {
      console.log('preOffer', data)
      // 设置弹窗显示
      setComingCall(true)
      // 设置来电信息
      setCallState('CALL_REQUESTED')
      setCallUserName(data.callerUsername)
      // 设置连接用户的socketId
      setConnectUserSocketId(data.callerSocketId)
    })
  }

  // 断开连接
  const disconnect = () => {
    socket.disconnect()
  }
  // 移除所有监听
  const removeListener = () => {
    socket.removeAllListeners()
  }

  return {
    connectWithSocket,
    listenBroadcast,
    registerNewUser,
    sendPreOffer,
    listenPreOffer,
    disconnect,
    removeListener,
  }
}

export default useSocket
