import React, { memo, useRef, useEffect } from 'react'
import { LocalVideoViewWrapper } from './style'

const LocalVideoView = memo(({ localStream }) => {
  const localVideoRef = useRef(null)
  useEffect(() => {
    console.log('localStream', localStream)
    if (localStream) {
      localVideoRef.current.srcObject = localStream
      // 元数据加载完成后，再播放视频
      localVideoRef.current.onloadedmetadata = () => {
        localVideoRef.current.play()
      }
    }
    return () => {
      localVideoRef.current.srcObject = null
      localVideoRef.current.onloadedmetadata = null
    }
  }, [localStream, localVideoRef.current])
  return (
    <LocalVideoViewWrapper>
      <div className="videoContainer background_secondary_color">
        <video ref={localVideoRef} className="videoElement" autoPlay muted />
      </div>
    </LocalVideoViewWrapper>
  )
})

export default LocalVideoView
