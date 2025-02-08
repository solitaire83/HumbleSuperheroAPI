import { useState, useEffect } from 'react';
import './int.css';

import { fetchHeroes } from './hooks/useFetch';
import FORM from './comps/form';
import LIST from './comps/list';

function Interface() {
  const [heroes, __SETHEROES] = useState([]);
  useEffect(() => {
    fetchHeroes(__SETHEROES);
    const int = setInterval(() => {
      fetchHeroes(__SETHEROES);
      console.log("[!]: List Refreshed")
    }, 2000);
    return () => clearInterval(int);
  }, []);


  return (
    <div className="Interface">
      <h1>Humble Superheroes</h1>
      <FORM HERO={() => fetchHeroes(__SETHEROES)}></FORM>
      <h2>Superheroes List</h2>
      <LIST heroes={heroes}></LIST>
    </div>
  );
}

export default Interface;