import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './GameBoard.module.css';

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

export default function GameBoard({
  difficulty,
  setWin,
  score,
  selected,
  unselected,
}) {
  const [currentCharacters, setCurrentCharacters] = useState();
  const [flip, setFlip] = useState(true);

  //load card templates based on difficulty
  const cards = [];
  for (let i = 0; i < difficulty.cardNumber; i++) {
    cards.push({ id: i });
  }

  useEffect(() => {
    //check for win
    if (score === difficulty.target) {
      setWin(true);
      return;
    }
    const displayedCharacters = function () {
      //randomize the ratio between selected and unselected characters
      //or get all unselected if no selected
      let random = selected.length
        ? Math.ceil(Math.random() * difficulty.cardNumber)
        : difficulty.cardNumber;
      //if number requested greater than array length default to array length
      if (random > unselected.length) {
        random = unselected.length;
      } else if (difficulty.cardNumber - random > selected.length) {
        random = difficulty.cardNumber - selected.length;
      }
      const displayedUnselected = getMultipleRandom(unselected, random);
      const displayedSelected = getMultipleRandom(
        selected,
        difficulty.cardNumber - random
      );

      // return a combination of both selected and not selected characters in random order
      return [...displayedUnselected, ...displayedSelected].sort(
        () => 0.5 - Math.random()
      );
    };

    //start flip animation
    setFlip(true);
    setTimeout(() => {
      setCurrentCharacters(displayedCharacters());
      setTimeout(() => {
        setFlip(false);
      }, 200);
    }, 800);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty.cardNumber, selected, unselected, score]);

  return (
    <div className={styles.board}>
      <div className={styles.scoreBoard}>
        <p>your score: {score}</p>
        <p>Target: {difficulty.target}</p>
      </div>
      {cards.map((card) => (
        <Card
          key={card.id}
          character={
            //load character information once effect executes
            currentCharacters ? currentCharacters[cards.indexOf(card)] : {}
          }
          selected={selected}
          unselected={unselected}
          flip={flip}
          score={score}
        />
      ))}
    </div>
  );
}

GameBoard.propTypes = {
  difficulty: PropTypes.object,
  setWin: PropTypes.func,
  score: PropTypes.number,
  selected: PropTypes.array,
  unselected: PropTypes.array,
};
