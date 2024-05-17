import React, { useEffect, useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  // Showing the hero info, also show a button to go back to home ('/')
  return (
    <>
     { 
      hero &&
      <div className='row mt-2 ml-2 mb-3'>
        <div className='col-4'>
          <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
        </div>
        <div className='col-8 ml-5 text-white bg-dark rounded'>
          <h3 className='mt-5 ms-2'>{hero.superhero}</h3>
          <ul className='list-group list-group-flush text-white bg-dark rounded-lg'>
            <li className='list-group-item text-white bg-dark ms-2 me-3'><b>Alter ego: </b>{hero.alter_ego}</li>
            <li className='list-group-item text-white bg-dark ms-2 me-3'><b>Publisher: </b>{hero.publisher}</li>
            <li className='list-group-item text-white bg-dark ms-2 me-3'><b>First appearance: </b>{hero.first_appearance}</li>
          </ul>
          <h5 className='mt-3 ms-2'>Characters</h5>
          <p className='ms-2 me-3'>{hero.characters}</p>
          <button className='btn btn-outline-info mb-3' onClick={() => navigate(-1)}>Back</button>          
        </div>
      </div>
     }
     {
      !hero &&
      <Navigate to="/"/>
     }
    </>
  )
}
