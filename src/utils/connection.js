import socketClient from 'socket.io-client'

const ENDPOINT = 'http://localhost:9000'

const socket = socketClient(ENDPOINT)

export default socket
