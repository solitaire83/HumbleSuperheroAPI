import { API } from '../../cfg';

export const fetchHeroes = async (__SETHEROES) => {
  const resp = await fetch(`${API}/superheroes`);
  const data = await resp.json();
  __SETHEROES(data);
};

export const addHero = async (e, name, superpower, score, fetchHeroes, __SETNAME, __SETPOWER, __SETSCORE) => {
  e.preventDefault();
  const resp = await fetch(`${API}/superheroes`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, superpower, score: parseInt(score) }),
  });

  if(resp.ok) {
    fetchHeroes();
    __SETNAME('');
    __SETPOWER('');
    __SETSCORE('');
  } else {
    const err = await resp.json();
    alert(err.err);
  }
};