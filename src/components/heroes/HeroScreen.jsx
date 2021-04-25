import React from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
  // extraigo los parametros del url
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);
  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    const page = publisher.toLowerCase().replace(' comics', '');
    console.log(page);
    
    history.replace('/'+page);
  };
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-2">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8 text-white bg-dark">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush  text-white bg-dark">
          <li className="list-group-item text-white bg-dark">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item text-white bg-dark">
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item text-white bg-dark">
            <b>First Appereance: </b>
            {first_appearance}
          </li>
          <li className="list-group-item text-white bg-dark">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
        </ul>
        <h5> Characters </h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info mb-3"
              onClick={handleReturn}>
                Return</button>
      </div>
    </div>
  );
};
