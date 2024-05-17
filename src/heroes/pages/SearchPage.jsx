import React from 'react';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers'; 

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = q === '' ? [] : getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Find your hero</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input type="text"
              placeholder="type here your hero's name"
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-info mt-2'>Search</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {
           q === '' &&
            <div className='alert alert-info animate__animated animate__fadeIn'>Search a hero</div>
          }
          {
            heroes.length === 0 && q.length > 1 &&
                <div className='alert alert-danger animate__animated animate__fadeIn'> No hero { q } found </div>
          }
          {
            heroes.length > 0 && 
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
          }
        </div>
      </div>
    </>
  )
}
