import video from '../../assets/videos/Adventure-time-Live-wallpaper.mp4';
import audio from '../../assets/audio/background-audio.mp3';
import { Fragment, useRef, useState } from 'react';
import musicIcon from '../../assets/images/itunes.png';
import styles from './Media.module.css';

export default function Media() {
  const backgroundMusic = useRef(new Audio(audio));
  backgroundMusic.current.loop = true;
  const [isPlaying, setIsPlaying] = useState(false);
  function handleMusic() {
    isPlaying
      ? backgroundMusic.current.pause()
      : backgroundMusic.current.play();

    setIsPlaying(!isPlaying);
  }

  return (
    <Fragment>
      <video
        className={styles.backgroundVideo}
        src={video}
        muted
        loop
        autoPlay
      />
      <button
        onClick={handleMusic}
        className={
          isPlaying ? styles.backgroundIcon : styles.backgroundIconMuted
        }
      >
        {' '}
        <img src={musicIcon} alt="music icon" />
      </button>
      <a
        className={styles.credit}
        target="blank"
        href="https://www.flaticon.com/free-icons/itunes"
        title="itunes icons"
      >
        Music icon created by Freepik - Flaticon
      </a>
    </Fragment>
  );
}
