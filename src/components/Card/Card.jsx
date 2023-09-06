import PropTypes from 'prop-types';
import styles from './Card.module.css';
function Card({ img, name }) {
  return (
    <div className={styles.card}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={img} alt={name} />
          <h4>{name}</h4>
        </div>
        <div className={styles.flipCardBack}></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
