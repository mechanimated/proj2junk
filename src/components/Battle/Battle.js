import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useAIOpponent, useBattleSequence } from 'hooks';
import { opponentStats, playerStats, wait } from 'shared';
import { BattleMenu, PlayerSummary, BattleAnnouncer } from 'components';

export const Battle = ({ onGameEnd }) => {
  const [sequence, setSequence] = useState({});

  const round = () => {
    let i = 1
    i++
  }


  const {
    turn,
    inSequence,
    playerHealth,
    opponentHealth,
    playerAnimation,
    opponentAnimation,
    announcerMessage,
  } = useBattleSequence(sequence);

  const aiChoice = useAIOpponent(turn);

  useEffect(() => {
    if (aiChoice && turn === 1 && !inSequence) {
      setSequence({ turn, mode: aiChoice });
    }
  }, [turn, aiChoice, inSequence]);

  useEffect(() => {
    if (playerHealth === 0 || opponentHealth === 0) {
      (async () => {
        await wait(1000);
        onGameEnd(playerHealth === 0 ? opponentStats : playerStats);
      })();
    }
  }, [playerHealth, opponentHealth, onGameEnd]);

  return (
    <>
      <div className={styles.opponent}>
        <div className={styles.summary}>
          <PlayerSummary
            main={false}
            health={opponentHealth}
            maxHealth={enemy.hp}
            name={enemy.name}
            brand={enemy.brand}
          />
        </div>
      </div>

      <div className={styles.characters}>
        <div className={styles.gameHeader}>
          {playerStats.name} vs {opponentStats.name}
        </div>
        <div className={styles.gameImages}>
          <div className={styles.playerSprite}>
            <img
              alt={contacts.name}
              src={contacts.image}
              className={styles[playerAnimation]}
            />
          </div>
          <div className={styles.opponentSprite}>
            <img
              alt={opponentStats.name}
              src={opponentStats.img}
              className={styles[opponentAnimation]}
            />
          </div>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.summary}>
          <PlayerSummary
            main={true}
            health={playerHealth}
            maxHealth={contacts.hp}
            name={contacts.name}
            brand={contacts.brand}
          />
        </div>

        <div className={styles.hud}>
          <div className={styles.hudChild}>
            <BattleAnnouncer
              message={
                announcerMessage || `What will ${contacts.name} do?`
              }
            />
          </div>
          {!inSequence && turn === 0 && (
            <div className={styles.hudChild}>
              <BattleMenu
                onHeal={() => setSequence({ mode: 'heal', turn })}
                onMagic={() => setSequence({ mode: 'magic', turn })}
                onAttack={() => setSequence({ mode: 'attack', turn })}
                onBonk={() => setSequence({ mode: 'bonk', turn })}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}


  // const [enemy, setEnemy] = useState({
  //   id: 31,
  //   brand: "verizon",
  //   name: "Edward Zander",
  //   description: "i hold the very razr of reality in my hands. with this, i will cut down god",
  //   image: "https://gifer.com/en/9AOt" ,
  //   hp: 46,
  //   attack: 17,
  //   defense: 8,
  //   special: "",
  //   passive: ""
  // })

  // setEnemy({
  //   id: enemyContacts.id,
  //   brand: enemyContacts.brand,
  //   name: enemyContacts.name,
  //   description: enemyContacts.description,
  //   image: enemyContacts.image,
  //   hp: enemyContacts.hp,
  //   attack: enemyContacts.attack,
  //   defense: enemyContacts.defense,
  //   special: enemyContacts.special,
  //   passive: enemyContacts.passive,
  // })