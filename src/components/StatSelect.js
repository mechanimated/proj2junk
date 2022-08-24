import { format } from 'date-fns'
import react from 'react'
import {useState} from 'react'

function StatSelect() {

  const [stats, setStats] = useState({
    id: '',
    brand: '',
    name: '',
    description: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    special: '',
    passive: ''
  })

  const handleStats = (e) => {
    setStats({
        ...format,
        [e.target.name]:e.target.value
    })
  }

  function handleContact(e) {
    fetch(`http://localhost:3000`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stats),
    }).then(()=>
    setStats({
      id: '',
      brand: '',
      name: '',
      description: '',
      image: '',
      hp: '',
      attack: '',
      defense: '',
      special: '',
      passive: ''
    }))
  }
  return (
    <div className="" onClick={handleContact}>
        <button className="" type="click">
          Save This Contact
        </button>
    </div>
  );
}

export default StatSelect;

