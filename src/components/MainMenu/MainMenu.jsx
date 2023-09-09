import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo2.png';
import styles from './MainMenu.module.css';
import PropTypes from 'prop-types';

export default function MainMenu({ setStartGame, setDifficulty }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  }, []);

  const handledifficulty = (cardNumber, target) => {
    setDifficulty({ cardNumber: cardNumber, target: target });
    setStartGame(true);
  };
  return (
    <div className={animate ? styles.animate : styles.mainMenu}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.difficulty}>
        <button onClick={() => handledifficulty(3, 5)}>Easy</button>
        <button onClick={() => handledifficulty(4, 7)}> Medium</button>
        <button onClick={() => handledifficulty(5, 10)}> Hard </button>
      </div>
    </div>
  );
}

MainMenu.propTypes = {
  setStartGame: PropTypes.func,
  setDifficulty: PropTypes.func,
};
