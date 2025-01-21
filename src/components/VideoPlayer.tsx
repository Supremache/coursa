"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { Slider } from "./ui/slider"

interface VideoPlayerProps {
  src: string
  poster?: string
}

export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100
      setProgress(progress)
    }

    video.addEventListener("timeupdate", updateProgress)
    return () => video.removeEventListener("timeupdate", updateProgress)
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressChange = (newProgress: number[]) => {
    if (videoRef.current) {
      const time = (newProgress[0] / 100) * videoRef.current.duration
      videoRef.current.currentTime = time
      setProgress(newProgress[0])
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    if (videoRef.current) {
      videoRef.current.volume = newVolume[0]
      setVolume(newVolume[0])
      setIsMuted(newVolume[0] === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      setVolume(isMuted ? 1 : 0)
    }
  }

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10
    }
  }

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10
    }
  }

  const toggleFullscreen = () => {
    if (!playerRef.current) return

    if (!isFullscreen) {
      if (playerRef.current.requestFullscreen) {
        playerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  return (
    <div
      ref={playerRef}
      className="relative w-full aspect-video bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video ref={videoRef} src={src} poster={poster} className="w-full h-full" onClick={togglePlay} />
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <Slider value={[progress]} max={100} step={0.1} onValueChange={handleProgressChange} className="mb-4" />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button size="icon" variant="ghost" onClick={togglePlay} className="text-primary hover:text-primary hover:bg-background/10">
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button size="icon" variant="ghost" onClick={skipBackward} className="text-primary hover:text-primary hover:bg-background/10">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" onClick={skipForward} className="text-primary hover:text-primary hover:bg-background/10">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" onClick={toggleMute} className="text-primary hover:text-primary hover:bg-background/10">
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider value={[volume]} max={1} step={0.01} onValueChange={handleVolumeChange} className="w-24" />
            </div>
            <Button size="icon" variant="ghost" onClick={toggleFullscreen} className="text-primary hover:text-primary hover:bg-background/10">
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

