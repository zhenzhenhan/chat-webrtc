import socketClient from 'socket.io-client'
import { useAtom } from 'jotai'
import { activeUsersAtom } from '@/store'
const ENDPOINT = 'http://localhost:9000'
const socket = socketClient(ENDPOINT)
const useSocket = () => {
  const [, setActiveUsers] = useAtom(activeUsersAtom)
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
      switch (data.type) {
        case 'ACTIVE_USERS':
          // 把自己放在第一位
          const me = data.activeUsers.filter(
            (item) => item.socketId === socket.id
          )
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
    socket.emit('registerNewUser', {
      username,
      socketId: socket.id,
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
    disconnect,
    removeListener,
  }
}

export default useSocket
