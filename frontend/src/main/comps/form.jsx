import { useState } from 'react';
import { addHero } from '../hooks/useFetch';

function FORM({ HERO }) {
  const [name, __SETNAME] = useState('');
  const [superpower, __SETPOWER] = useState('');
  const [score, __SETSCORE] = useState('');

  const SUBMIT = (e) => {
    addHero(e, name, superpower, score, HERO, __SETNAME, __SETPOWER, __SETSCORE);
  };

  return (
    <form onSubmit={SUBMIT}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => __SETNAME(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Superpower"
        value={superpower}
        onChange={(e) => __SETPOWER(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Humility Score"
        value={score}
        onChange={(e) => __SETSCORE(e.target.value)}
        required
        min="1"
        max="10"
      />
      <button type="submit">Add Hero</button>
    </form>
  );
}

export default FORM;
