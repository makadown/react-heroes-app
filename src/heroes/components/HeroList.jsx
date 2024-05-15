import React from 'react';
import {getHeroesByPublisher} from '../helpers';
import { useState, useEffect } from 'react';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

  const [heroesList, setheroesList] = useState([]);

  useEffect(() => {
    const jijiList = getHeroesByPublisher(publisher);
    setheroesList(jijiList);
    return () => {
        // unmount 
    }
  }, [publisher])
  

  return (
    <>
      <div className='row row-cols-1 row-cols-md-3 g-3'>
        {
          heroesList.map(hero => <HeroCard key={hero.id} className='col' {...hero}/>)
        }
      </div>
    </>
  )
}
