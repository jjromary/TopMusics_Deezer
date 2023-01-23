import { FastForward, Pause, Play, Rewind } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { ButtonPlayer, CurrentTime, Duration, PlayContainer, ProgressBar } from "./styles";
interface PlayerProps {
  linkPreview: string;
}

export default function Player({ linkPreview }: PlayerProps) {
  const [isPLaying, setIsPLaying] = useState<boolean>(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)

  const audioPlayer = useRef<any>(); // reference audio component
  const progressBar = useRef<any>() // reference progressBar
  const animationProgressBar = useRef<any>() // reference animation progressBar

  const handlePlayPause = () => {
    const prevValue = isPLaying

    setIsPLaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play();
      animationProgressBar.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationProgressBar.current)
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    setCurrentTime(progressBar.current.value)
    animationProgressBar.current = requestAnimationFrame(whilePlaying)
  }

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds
  }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60)
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`

    return `${returnMinutes}:${returnedSeconds}`;
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value
    setCurrentTime(progressBar.current.value)
  }

  const backFiveSec = () => {
    progressBar.current.value = Number(progressBar.current.value) - 5
    changeRange()
  }

  const forwardFiveSec = () => {
    progressBar.current.value = Number(progressBar.current.value) + 5
    changeRange()
  }

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  };

  return (
    <PlayContainer>
      <audio ref={audioPlayer} src={linkPreview} onLoadedMetadata={onLoadedMetadata} />
      <ButtonPlayer onClick={backFiveSec}>
        <Rewind size={24} />
      </ButtonPlayer>
      <ButtonPlayer onClick={handlePlayPause}>
        {isPLaying ? <Pause size={24} /> : <Play size={24} />}
      </ButtonPlayer>
      <ButtonPlayer onClick={forwardFiveSec}>
        <FastForward size={24} />
      </ButtonPlayer>
      <CurrentTime>
        {calculateTime(currentTime)}
      </CurrentTime>
      <ProgressBar>
        <input
          type='range'
          className="progreesBar"
          defaultValue={0} ref={progressBar}
          onChange={changeRange}
        />
      </ProgressBar>
      <Duration>
        {!isNaN(duration) && calculateTime(duration)}
      </Duration>
    </PlayContainer>
  )
}
