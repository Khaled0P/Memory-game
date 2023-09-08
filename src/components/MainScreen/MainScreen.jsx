import { Fragment, useState } from 'react';
import GameBoard from '../GameBoard/GameBoard';
import EndGame from '../EndGame/EndGame';
import { characters } from '../../characters';

export default function MainScreen() {
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [score, setScore] = useState(0);

  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [unselectedCharacters, setUnselectedCharacters] = useState(characters);

  return (
    <Fragment>
      <GameBoard
        number={4}
        setWin={setWin}
        setLose={setLose}
        score={score}
        setScore={setScore}
        selectedCharacters={selectedCharacters}
        unselectedCharacters={unselectedCharacters}
        setSelectedCharacters={setSelectedCharacters}
        setUnselectedCharacters={setUnselectedCharacters}
      />
      {(win || lose) && (
        <EndGame
          win={win}
          lose={lose}
          setWin={setWin}
          setLose={setLose}
          setSelectedCharacters={setSelectedCharacters}
          setUnselectedCharacters={setUnselectedCharacters}
          setScore={setScore}
        />
      )}
    </Fragment>
  );
}
