import styles from './EndGame.module.css';
import PropTypes from 'prop-types';
import winImg from '../../assets/images/win.gif';
import loseImg from '../../assets/images/lose.jpg';

export default function EndGame({ win, lose, handleReset }) {
  const backgroundImage = win ? winImg : loseImg;

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
  handleReset: PropTypes.func,
};
