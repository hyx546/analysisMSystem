import { cardData } from 'config/homeData';
import React from 'react';
import CardModal from './components/home_card';
import { CommonCard } from 'components';

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
      <div className="home_pv" style={{width:'100%'}}>
        <CommonCard title="pu/pv">
             <div>
               hhhhhhhhh
             </div>
        </CommonCard>
      </div>
    </div>
  );
}

export default Home;
