import { cardData } from 'config/homeData';
import React from 'react';
import CardModal from './components/home_card';

import './index.less';


const Home = () => {
  return (
    <div className="home">
      <div className="home_card">
        {
          cardData.map(item => (
            <CardModal title={item.title} value={item.value} color={item.color} />
          ))
        }
      </div>
    </div>
  );
}

export default Home;
