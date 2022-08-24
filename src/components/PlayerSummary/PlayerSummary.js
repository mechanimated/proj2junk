import { Bar } from 'components';
import styles from './styles.module.css';


const red = '#821400';
const blue = '#1953cb';

export const PlayerSummary = ({
  main,
  name,
  brand,
  health,
  maxHealth,
}) => (
  <div
    className={styles.main}
    style={{ backgroundColor: main ? red : blue }}
  >
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <div className={styles.level}>Brand {brand}</div>
    </div>

    <div className={styles.health}>
      <Bar label="HP" value={health} maxHP={hp} />
    </div>
  </div>
);
