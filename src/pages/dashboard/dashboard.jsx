import React, { memo } from 'react'
import { useAtom } from 'jotai'
import { usernameAtom } from '../../store'

const dashboard = memo(() => {
  const [username] = useAtom(usernameAtom)
  return (
    <div>
      <div>dashboard:{username}</div>
    </div>
  )
})

export default dashboard
