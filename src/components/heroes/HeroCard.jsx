import React from 'react';
import { Link } from 'react-router-dom';

import { heroImages } from '../../helpers/heroImages';

export const HeroCard = ({ props }) => {
  return (
    <div className="card ms-3 animate__animated animate__fadeIn text-white bg-dark" style={ { maxWidth: 540 } }>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={ heroImages(`./${props.id}.jpg`).default }
            className="card-img"
            alt={props.superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.superhero}
            </h5>
            <p className="card-text">{props.alter_ego}</p>
            {
                (props.alter_ego !== props.characters)
                    && <p className="card-text"> {props.characters} </p>
            }
            <p className="card-text">
                <small className="text-muted"> {props.first_appearance}</small>
            </p>
            <Link to={ `./hero/${props.id}` } className="btn btn-info">
                More . . . 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
