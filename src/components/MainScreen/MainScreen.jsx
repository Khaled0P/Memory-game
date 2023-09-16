/* eslint-disable no-unused-vars */
import { Fragment, createContext, useState } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import EndGame from '../EndGame/EndGame';
import { characters } from '../../characters';
import MainMenu from '../MainMenu/MainMenu';
import styles from './MainScreen.module.css';
import { StatsContext, CharactersContext } from '../context';

export default function MainScreen() {
  //game stats
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [score, setScore] = useState(0);
  //current characters
  const [selected, setSelected] = useState([]);
  const [unselected, setUnselected] = useState(characters);
  //handle game
  const [startGame, setStartGame] = useState(false);
  const [difficulty, setDifficulty] = useState({ cardNumber: 0, target: 0 });

  function handleReset() {
    setWin(false);
    setLose(false);
    setSelected([]);
    setUnselected(characters);
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
          <CharactersContext.Provider
            value={{
              setSelected,
              setUnselected,
            }}
          >
            <StatsContext.Provider value={{ setLose, setScore }}>
              <GameBoard
                difficulty={difficulty}
                setWin={setWin}
                score={score}
                selected={selected}
                unselected={unselected}
              />
            </StatsContext.Provider>
          </CharactersContext.Provider>
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
