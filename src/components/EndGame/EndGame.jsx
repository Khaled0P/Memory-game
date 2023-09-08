import styles from './EndGame.module.css';
import PropTypes from 'prop-types';
import winImg from '../../assets/images/win.gif';
import loseImg from '../../assets/images/lose.jpg';
import { characters } from '../../characters';

export default function EndGame({
  win,
  lose,
  setWin,
  setLose,
  setSelectedCharacters,
  setUnselectedCharacters,
  setScore,
}) {
  const backgroundImage = win ? winImg : loseImg;
  function handleReset() {
    setWin(false);
    setLose(false);
    setSelectedCharacters([]);
    setUnselectedCharacters(characters);
    setScore(0);
  }
  return (
    <div className={styles.endScreen}>
      <div
        className={win ? styles.win : styles.lose}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.msg}>
          <h1>
            {win && 'You Win!'}
            {lose && 'You lose!'}
          </h1>
        </div>
        <button onClick={handleReset}>{win ? 'Restart' : 'Try again'}</button>
      </div>
    </div>
  );
}

EndGame.propTypes = {
  win: PropTypes.bool,
  lose: PropTypes.bool,
  setWin: PropTypes.func,
  setLose: PropTypes.func,
  setSelectedCharacters: PropTypes.func,
  setUnselectedCharacters: PropTypes.func,
  setScore: PropTypes.func,
};
