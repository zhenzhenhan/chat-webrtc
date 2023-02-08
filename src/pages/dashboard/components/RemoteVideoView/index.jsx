import React, { memo, useRef, useEffect } from 'react'
import { RemoteVideoViewWrapper } from './style'

const RemoteVideoView = memo(({ remoteStream }) => {
  const remoteVideoRef = useRef(null)

  useEffect(() => {
    if (remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream

      // 元数据加载完成后，再播放视频
      remoteVideoRef.current.onloadedmetadata = () => {
        remoteVideoRef.current.play()
      }
    }
    return () => {
      remoteVideoRef.current.srcObject = null
      remoteVideoRef.current.onloadedmetadata = null
    }
  }, [remoteStream, remoteVideoRef.current])
  return (
    <RemoteVideoViewWrapper>
      <div className="videoContainer">
        <video ref={remoteVideoRef} className="videoElement" autoPlay />
      </div>
    </RemoteVideoViewWrapper>
  )
})

export default RemoteVideoView
