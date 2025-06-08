import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import './style.css';

/*
 * Based video player
*/

interface PlayerProps {
  url: string
  showBar: boolean
}

const VPlayer = ({ url, showBar }: PlayerProps) => {
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    playerRef.current?.seekTo(newProgress / 100, "fraction");
  };

  const vplayer = (
    <ReactPlayer
      ref={ playerRef }
      url={ url }
      playing={ playing }
      loop
      muted
      playsInline={true}
      playsinline={true}
      controls={false}
      width='100%'
      height='100%'
      progressInterval={ 100 }
      onProgress={ (state) => setProgress(state.played * 100) }
    />
  )

  const vbar = (
    <div align='left'>
      <ProgressBar progress={ progress } onSeek={handleSeek}/>
    </div>
  )

  return (
    <div ref={ playerContainerRef } className='vplayer'>
      { vplayer }
      { showBar && vbar }
    </div>
  );
}

interface ProgressBarProps {
  progress: number;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProgressBar = ({ progress, onSeek }: ProgressBarProps) => {
  return (
    <Bar progress={ progress } onSeek={ onSeek } />
  );
}

interface BarProps {
  progress: number;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Bar = ({ progress, onSeek }: BarProps) => {
  let barColor = "#4051b5";

  /*useEffect(() => {
    const navbarElement = document.querySelector("nav.navbar");

    if (navbarElement) {
      barColor = window.getComputedStyle(navbarElement).backgroundColor;
      console.log(barColor)
    }
  })*/

  return (
    <div className='vplayer-bar'>
      <input
        type='range'
        min='0'
        max='100'
        value={ progress }
        onChange={ onSeek }
        className='point'
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
        }}
      />
      <div
        className='progress'
        style={{ width: `${ progress }%`, backgroundColor: barColor }}
      />
    </div>
  );
}

export default VPlayer