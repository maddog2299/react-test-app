import React, { useState }  from 'react';
import './App.css';
import { normalizeValues } from '../../helper/index';
import UserInput from '../UserInput/UserInput';
import Word from '../Word/Word';

function App() {
	const [words, setWords] = useState([]);
	const handleChange = (e) => setWords(normalizeValues(e.target.value.trim()));

  return (
    <div className="app-wrapper">
      <form className="input-wrapper">
        <UserInput type="text" handleChange={handleChange}/>
      </form>
      <div className="words-wrapper">
				{words.map((word, i) =>
          <Word key={i} value={word.value} sizeCoef={word.sizeCoef} />)}
      </div>
    </div>
  );
}

export default App;
