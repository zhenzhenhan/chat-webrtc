import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import './App.css'
import useSocket from '@/hooks/useSocket'

function App() {
  const { connectWithSocket, listenBroadcast } = useSocket()

  useEffect(() => {
    connectWithSocket()
    listenBroadcast()
  }, [])
  const element = useRoutes(routes)
  return <div className="App">{element}</div>
}

export default App
