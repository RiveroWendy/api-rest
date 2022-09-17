import React, { useState } from 'react';
import './App.css';

function App() {
  const[subs, setSubs] = useState([
    {
      nick: 'wenyarts',
      subMonths: 12,
      avatar: 'https://i.pravatar.cc/150?u=wenyarts',
      description:'doing videogames with Unity'
    },
    {
      nick: 'steel4ttack',
      subMonths: 12,
      avatar: 'https://i.pravatar.cc/150?u=steel4ttack',
      description:'studying js'
    }
  ])
  
  return (
    <div className="App">     
      <h1>subs</h1>
      <ul>
        {
        subs.map(sub =>{
          return(
            <li key={sub.nick}>
                <img src ={sub.avatar} alt={'Avatar for ${sub.nick'}/>
                <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
}

export default App;
