import { characters } from '../../characters';
import Card from '../Card/Card';
import styles from './GameBoard.module.css';

export default function GameBoard() {
  return (
    <div className={styles.board}>
      {characters.map((character) => (
        <Card key={character.name} name={character.name} img={character.img} />
      ))}
    </div>
  );
}
