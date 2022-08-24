import react from 'react'
import { useEffect, useState } from 'react';

function Characters(){

  const [allContacts, setAllContacts] = useState([])
  const [allyContacts, setAllyContacts] = useState([])
  const [enemyContacts, setEnemyContacts] = useState([])



  useEffect(() => {
    fetch(`http://localhost:3001/contacts`)
    .then(res => res.json())
    .then(data => {
      setAllContacts(data)
      setAllyContacts(data.filter((contact) => 
      contact.brand === 'indie'))
      setEnemyContacts(data.filter((contact) => 
      contact.brand !== 'indie'))
    })
  }, [])

  function handleEnemy(brand) {
        let enemy = []
        enemy.append(enemyContacts.filter((contact) => contact.brand === brand))
      }

  function handleAlly(brand) {
    let contacts = []
    contacts.append(allyContacts.filter((contact) => contact.brand === brand))
  }

  const verizon = handleEnemy('verizon')
  const cingular = handleEnemy('cingular')
  const tmobile = handleEnemy('tmobile')
  const sprint = handleEnemy('sprint')
  const huawei = handleEnemy('huawei')

  const playerStats = {
      level: 44,
      hp: 177,
      name: 'cuphed',
      img: '/assets/cuphed.png',

}
}
export default Characters;
// export const playerStats = {
//   level: 44,
//   maxHealth: 177,
//   name: 'cuphed',
//   img: '/assets/cuphed.png',

//   magic: 187,
//   attack: 50,
//   defense: 30,
//   magicDefense: 30,
// };
// export const opponentStats = {
//   level: 44,
//   name: 'verizon guy',
//   maxHealth: 188,
//   img: '/assets/verizon.png',

//   magic: 50,
//   attack: 32,
//   defense: 20,
//   magicDefense: 48,
// };
