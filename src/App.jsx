import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import './App.css'
import useSocket from '@/hooks/useSocket'

function App() {
  const {
    connectWithSocket,
    listenBroadcast,
    listenPreOffer,
    disconnect,
    removeListener,
  } = useSocket()

  useEffect(() => {
    connectWithSocket()
    listenBroadcast()
    listenPreOffer()
    return () => {
      disconnect()
      removeListener()
    }
  }, [])
  const element = useRoutes(routes)
  return <div className="App">{element}</div>
}

export default App
