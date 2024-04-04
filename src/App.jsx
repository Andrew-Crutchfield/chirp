import React, { useState } from 'react';
import Chirp from './components/chirp';

const App = () => {
    const [id, setId] = useState('');
    const [text, setText] = useState('');
    const [chirps, setChirps] = useState([
      {
        id: "Johnny",
        text: "wow sure is sunny"
      },
      {
        id: "Sam",
        text: "Where is the year going? it was march a week ago I sware"
      }
    ]);
  
    const addChirp = () => {
      setChirps([...chirps, { id, text }]);
      setId('');
      setText('');
    }
  
    return (
      <div>
        <input value={id} onChange={e => setId(e.target.value)} placeholder="Your name" />
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Your chirp" />
        <button style={{ padding: '10px', fontSize: '20px', cursor: 'pointer' }} onClick={addChirp}>Chirp</button>
        {chirps.map(chirp => <Chirp key={chirp.id} id={chirp.id} text={chirp.text} />)}
      </div>
    );
  };
  
  export default App;