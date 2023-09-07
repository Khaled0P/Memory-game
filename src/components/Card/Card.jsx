import PropTypes from 'prop-types';
import styles from './Card.module.css';
function Card({
  character,
  selected,
  unselected,
  setSelected,
  setUnselected,
  flip,
}) {
  function handleClick() {
    setSelected([...selected, character]);
    setUnselected(unselected.filter((char) => char.name !== character.name));
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
};

export default Card;
