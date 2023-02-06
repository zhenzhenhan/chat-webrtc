import { useRef } from 'react'
import socketClient from 'socket.io-client'
import { useAtom } from 'jotai'
import { activeUsersAtom } from '@/store'
const ENDPOINT = 'http://localhost:9000'

// const useSocket = () => {
//   const socket = socketClient(ENDPOINT)
//   const [, setActiveUsers] = useAtom(activeUsersAtom)

//   const connectWithSocket = () => {
//     socket.on('connection', () => {
//       console.log('connected')
//       console.log(socket.id)
//     })
//   }

//   // 监听服务器的广播，获取在线用户列表
//   const listenBroadcast = () => {
//     socket.on('broadcast', (data) => {
//       console.log(data)
//       // 将活跃用户保存到store中
//       switch (data.type) {
//         case 'ACTIVE_USERS':
//           setActiveUsers(data.activeUsers)
//           break
//         default:
//           break
//       }
//     })
//   }

//   const registerNewUser = (username) => {
//     socket.emit('registerNewUser', {
//       username,
//       socketId: socket.id,
//     })
//   }

//   return { connectWithSocket, listenBroadcast, registerNewUser }
// }

// export default useSocket

let socket

export const connectWithSocket = (setActiveUsers) => {
  socket = socketClient(ENDPOINT)
  socket.on('connection', () => {
    console.log('connected')
    console.log(socket.id)
  })

  // 监听服务器的广播，获取在线用户列表
  socket.on('broadcast', (data) => {
    // 将活跃用户保存到store中
    switch (data.type) {
      case 'ACTIVE_USERS':
        console.log(data)
        // 找到当前用户，放到数组第一个
        const activeUsers = data.activeUsers
        const currentUser = activeUsers.find((activeUser) => {
          return activeUser.socketId === socket.id
        })
        const index = activeUsers.indexOf(currentUser)
        activeUsers.splice(index, 1)
        activeUsers.unshift(currentUser)
        setActiveUsers(activeUsers)
        break
      default:
        break
    }
  })
}
export const registerNewUser = (username) => {
  socket.emit('registerNewUser', {
    username,
    socketId: socket.id,
  })
}
