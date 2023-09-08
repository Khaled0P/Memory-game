import video from '../../assets/videos/Adventure-time-Live-wallpaper.mp4';
import audio from '../../assets/audio/background-audio.mp3';
import { Fragment } from 'react';
import './media.css';

export default function Media() {
  return (
    <Fragment>
      <video src={video} muted loop autoPlay />
      <audio src={audio} autoPlay loop />
    </Fragment>
  );
}
