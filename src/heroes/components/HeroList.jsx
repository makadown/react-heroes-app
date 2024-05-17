import React, { useMemo } from 'react';
import {getHeroesByPublisher} from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

  const heroesList = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

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
