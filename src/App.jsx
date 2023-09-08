import { Fragment } from 'react';
import './App.css';
import MainScreen from './components/MainScreen/MainScreen';
import Media from './components/Media/Media';

function App() {
  return (
    <Fragment>
      <Media />
      <MainScreen />
    </Fragment>
  );
}

export default App;
