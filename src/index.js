import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <HeroesApp />
  </HashRouter>,
  document.getElementById('root')
);

