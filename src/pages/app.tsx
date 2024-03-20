import React from 'react';
import '../../scss/style.scss';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Stat } from '../components/Stat';
import { Information } from '../components/Information';

const App = () => {
  return (
    <div className="content">
      <Header />
      <Banner />
      <Stat />
      <Information />
    </div>
  );
};

export default App;
