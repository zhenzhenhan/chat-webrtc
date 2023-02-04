import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import socket from './utils/connection'
import routes from './router'
import './App.css'

function App() {
  const element = useRoutes(routes)
  useEffect(() => {
    socket.on('connection', () => {
      console.log('connected success!')
      console.log(socket.id)
    })
  }, [])
  return <div className="App">{element}</div>
}

export default App
