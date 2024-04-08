import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { featuresData } from '../../data/data';

const Features = () => {
  return (
    <section id={'features'} className={'w-full py-20 border-b-[1px] border-b-black'}>
      <Title title={'Features'} des={'What I do'} />

      <div className={'grid grid-cols-3 gap-20'}>
        {featuresData.map(({ id, icon, title, des }) => (
          <Card id={id} icon={icon} title={title} des={des} />
        ))}
      </div>
    </section>
  );
};

export default Features;
