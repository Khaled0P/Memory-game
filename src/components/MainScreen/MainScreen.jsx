/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import EndGame from '../EndGame/EndGame';
import { characters } from '../../characters';
import MainMenu from '../MainMenu/MainMenu';
import styles from './MainScreen.module.css';

export default function MainScreen() {
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [score, setScore] = useState(0);

  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [unselectedCharacters, setUnselectedCharacters] = useState(characters);

  const [startGame, setStartGame] = useState(false);
  const [difficulty, setDifficulty] = useState({ cardNumber: 0, target: 0 });

  function handleReset() {
    setWin(false);
    setLose(false);
    setSelectedCharacters([]);
    setUnselectedCharacters(characters);
    setScore(0);
  }

  function handleReturnToMenu() {
    setStartGame(false);
    handleReset();
  }

  return (
    <Fragment>
      {startGame ? (
        <>
          <GameBoard
            difficulty={difficulty}
            setWin={setWin}
            setLose={setLose}
            score={score}
            setScore={setScore}
            selectedCharacters={selectedCharacters}
            unselectedCharacters={unselectedCharacters}
            setSelectedCharacters={setSelectedCharacters}
            setUnselectedCharacters={setUnselectedCharacters}
          />
          <button onClick={handleReturnToMenu} className={styles.returnToMenu}>
            Main Menu
          </button>
        </>
      ) : (
        <MainMenu setStartGame={setStartGame} setDifficulty={setDifficulty} />
      )}
      {(win || lose) && (
        <EndGame win={win} lose={lose} handleReset={handleReset} />
      )}
    </Fragment>
  );
}
