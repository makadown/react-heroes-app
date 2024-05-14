import React from 'react';
import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, MarvelPage, HeroPage, SearchPage, AboutPage } from '../';


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container rounded-4 mt-2'>
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          
          <Route path="search" element={<SearchPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="hero" element={<HeroPage />} />
          
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>

    </>
  )
}

export default HeroesRoutes;
