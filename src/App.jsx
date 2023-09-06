import { Fragment } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import video from './assets/videos/Adventure-time-Live-wallpaper.mp4';
// import audio from './assets/audio/background-audio.mp3';

function App() {
  return (
    <Fragment>
      <video src={video} muted loop autoPlay />
      {/* <audio src={audio} autoPlay loop /> */}
      <GameBoard />
    </Fragment>
  );
}

export default App;
