import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg'; // estático
// const heroImages = require.context('../../assets/heroes', true);
import { heroImages } from '../../helpers/heroImages';

export const HeroScreen = ({ history }) => {
  // extraigo los parametros del url
  const { heroeId } = useParams();

  // ESTO ES BIEN IMPORTANTE!!!
  // es para que cada que cargue componente jale 1 vez del metodo get
  // y las demas veces del memo, jasta que haya cambiado de id de heroe!
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-2 ml-2 mb-3">
      <div className="col-4">
        <img
         // src={`../assets/heroes/${heroeId}.jpg`} // desde public/assets
         // src={batman} // import estatico
          src={ heroImages(`./${heroeId}.jpg`).default }
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-7 ml-3 text-white bg-dark">
        <h3 className="mt-5">{superhero}</h3>
        <ul className="list-group list-group-flush text-white bg-dark rounded-lg">
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
        <h5 className="mt-2"> Characters </h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info mb-3" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
