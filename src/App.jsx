import { useEffect, useRef } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import './App.css'
import { connectWithSocket } from '@/utils/connection'
// import useSocket from '@/utils/connection'
import { useAtom } from 'jotai'
import { activeUsersAtom } from '@/store'

function App() {
  const firstRender = useRef(true)
  const [, setActiveUsers] = useAtom(activeUsersAtom)

  // const { connectWithSocket, listenBroadcast } = useSocket()

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    connectWithSocket(setActiveUsers)
    // listenBroadcast(setActiveUsers)
    // useSocket(setActiveUsers)
  }, [])
  const element = useRoutes(routes)
  return <div className="App">{element}</div>
}

export default App
