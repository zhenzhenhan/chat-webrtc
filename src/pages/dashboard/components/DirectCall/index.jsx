import React, { memo } from 'react'
import LocalVideoView from '../LocalVideoView'
import RemoteVideoView from '../RemoteVideoView'
import { useAtom } from 'jotai'
import { localStreamAtom, remoteStreamAtom } from '@/store'

const DirectCall = memo(() => {
  const [localStream] = useAtom(localStreamAtom)
  const [remoteStream] = useAtom(remoteStreamAtom)
  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
    </>
  )
})

export default DirectCall
