/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { characters } from '../../characters';
import Card from '../Card/Card';
import styles from './GameBoard.module.css';

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

export default function GameBoard({ number }) {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [unselectedCharacters, setUnselectedCharacters] = useState(characters);
  const [currentCharacters, setCurrentCharacters] = useState();
  const [flip, setFlip] = useState(true);

  //load card templates based on difficulty
  const cards = [];
  for (let i = 0; i < number; i++) {
    cards.push({ id: i });
  }

  useEffect(() => {
    setFlip(true);
    const displayedCharacters = function () {
      //randomize the ratio between selected and unselected characters
      //or get all unselected if no selected
      let random = selectedCharacters.length
        ? Math.ceil(Math.random() * number)
        : number;
      //if number requested greater than array length default to array length
      if (random > unselectedCharacters.length) {
        random = unselectedCharacters.length;
      } else if (number - random > selectedCharacters.length) {
        random = number - selectedCharacters.length;
      }
      const unselected = getMultipleRandom(unselectedCharacters, random);
      const selected = getMultipleRandom(selectedCharacters, number - random);

      // return a combination of both selected and not selected characters in random order
      return [...unselected, ...selected].sort(() => 0.5 - Math.random());
    };
    setTimeout(() => {
      setCurrentCharacters(displayedCharacters());
      setFlip(false);
    }, 1000);
  }, [number, selectedCharacters, unselectedCharacters]);
  return (
    <div className={styles.board}>
      {cards.map((card) => (
        <Card
          key={card.id}
          character={
            //load character information once effect executes
            currentCharacters ? currentCharacters[cards.indexOf(card)] : {}
          }
          selected={selectedCharacters}
          unselected={unselectedCharacters}
          setSelected={setSelectedCharacters}
          setUnselected={setUnselectedCharacters}
          flip={flip}
        />
      ))}
    </div>
  );
}

GameBoard.propTypes = {
  number: PropTypes.number,
};
