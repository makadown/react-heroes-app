import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchWord: q,
  });

  let { searchWord } = formValues;
  const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchWord);
    history.push(`?q=${searchWord}`);
  };

  return (
    <div>
      <div className="row">
        <div className="col-5">
          <h4>Search</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="searchWord"
                autoComplete="off"
                placeholder="Find your hero"
                onChange={handleInputChange}
                className="form-control"
                value={searchWord}
              />
            </div>
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === '' && <div className="alert alert-info">Search a hero</div>}
          {q !== '' && filteredHeroes.length === 0 && (
            <div className="alert alert-info">No results found with {q}</div>
          )}

          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.id} props={hero}></HeroCard>
          ))}
        </div>
      </div>
    </div>
  );
};
