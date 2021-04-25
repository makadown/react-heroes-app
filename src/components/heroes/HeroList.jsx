import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
    // usa useMemo para que no reinvoque el metodo a menos que cambie
    // el publisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="card-columns">
            {
                heroes.map( (hero) => (
                    <HeroCard key={hero.id} props={hero}>
                    </HeroCard>
                ))
            }
        </div>
    )
}
