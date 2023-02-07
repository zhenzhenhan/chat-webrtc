import socketClient from 'socket.io-client'
import { useAtom } from 'jotai'
import { activeUsersAtom } from '@/store'
const ENDPOINT = 'http://localhost:9000'
const socket = socketClient(ENDPOINT)
const useSocket = () => {
  const [, setActiveUsers] = useAtom(activeUsersAtom)
  const connectWithSocket = () => {
    socket.on('connection', () => {
      console.log('connected')
      console.log(socket.id)
    })
  }

  // 监听服务器的广播，获取在线用户列表
  const listenBroadcast = () => {
    socket.on('broadcast', (data) => {
      console.log(data)
      // 将活跃用户保存到store中
      switch (data.type) {
        case 'ACTIVE_USERS':
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

  return { connectWithSocket, listenBroadcast, registerNewUser }
}

export default useSocket
