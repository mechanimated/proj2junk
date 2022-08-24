import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Battle, EndMenu, StartMenu } from 'components';
// import { Routes, routes } from 'react-router-dom';

export const App = () => {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  // const [allContacts, setAllContacts] = useState([])
  // const [allyContacts, setAllyContacts] = useState([])
  // const [enemyContacts, setEnemyContacts] = useState([])


  // useEffect(() => {
  //   fetch(`http://localhost:3001/contacts`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setAllContacts(data)
  //     setAllyContacts(data.filter((contact) => 
  //     contact.brand === 'indie'))
  //     setEnemyContacts(data.filter((contact) => 
  //     contact.brand !== 'indie'))
  //   })
  // }, [])


  // function handleEnemy(brand) {
  //       let enemy = []
  //       enemy.append(enemyContacts.filter((contact) => contact.brand === brand))
  //     }

  // function handleAlly(brand) {
  //   let contacts = []
  //   contacts.append(allyContacts.filter((contact) => contact.brand === brand))
  // }

  // allyContacts={allyContacts}
  // enemyContacts={enemyContacts}
  // handleEnemy={handleEnemy}
  // handleAlly={handleAlly}

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    // <Routes></Routes>
    <div className={styles.main}>
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
      )}

      {mode === 'battle' && (
        <Battle
          onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}
        />
      )}

      {mode === 'gameOver' && !!winner && (
        <EndMenu winner={winner} onStartClick={() => setMode('battle')} />
      )}
    </div>
  );
};
