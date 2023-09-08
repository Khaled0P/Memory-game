import PropTypes from 'prop-types';
import styles from './Card.module.css';
function Card({
  character,
  selected,
  unselected,
  setSelected,
  setUnselected,
  flip,
  setLose,
  score,
  setScore,
}) {
  function handleClick() {
    //check selected character
    if (selected.find((char) => char.name === character.name)) {
      setLose(true);
    } else {
      setSelected([...selected, character]);
      setUnselected(unselected.filter((char) => char.name !== character.name));
      setScore(score + 1);
    }
  }

  return (
    <div className={flip ? styles.flip : styles.card} onClick={handleClick}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={character.img} alt={character.name} />
          <h4>{character.name}</h4>
        </div>
        <div className={styles.flipCardBack}></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  character: PropTypes.object,
  selected: PropTypes.array,
  unselected: PropTypes.array,
  setSelected: PropTypes.func,
  setUnselected: PropTypes.func,
  flip: PropTypes.bool,
  setLose: PropTypes.func,
  score: PropTypes.number,
  setScore: PropTypes.func,
};

export default Card;
