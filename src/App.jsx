import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import './App.css'
import useSocket from '@/hooks/useSocket'

function App() {
  const { connectWithSocket, listenBroadcast, disconnect, removeListener } =
    useSocket()

  useEffect(() => {
    console.log('app')
    connectWithSocket()
    listenBroadcast()
    return () => {
      disconnect()
      removeListener()
    }
  }, [])
  const element = useRoutes(routes)
  return <div className="App">{element}</div>
}

export default App
