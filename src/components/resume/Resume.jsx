import React from 'react';
import Title from '../layouts/Title';
import ResumeCard from './ResumeCard';

const Resume = () => {
  return (
    <section id={'resume'} className={'w-full py-20 border-b-[1px] border-b-black'}>
      <div className={'flex items-center justify-center text-center'}>
        <Title title={'7+ YEARS OF EXPERIENCE'} des={'My Resume'} />
      </div>

      <div>
        <ul className={'w-full grid grid-cols-4'}>
          <li className={'resumeLi'}>Education</li>
          <li className={'resumeLi'}>Professional Skills</li>
          <li className={'resumeLi'}>Experience</li>
          <li className={'resumeLi'}>Achievements</li>
        </ul>
      </div>

      <div className={'py-6 lgl:py-12 font-titleFont flex flex-col gap-4'}>
        <p className={'text-sm text-designColor tracking-[4px]'}>1998 - 2010</p>
        <h2 className={'text-3xl md:text-4xl font-bold'}>Education Quality</h2>
      </div>

      <div className='mt-6 lgl:mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
        <ResumeCard
          title='BSc in Computer Science'
          subTitle='University of DVI (2006 - 2010)'
          result='3.90/4'
          des='The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.'
        />
        <ResumeCard
          title='AS - Science & Information'
          subTitle='SuperKing College (2001 - 2005)'
          result='4.75/5'
          des='Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education.'
        />
        <ResumeCard
          title='Secondary School Education'
          subTitle='Kingstar Secondary School (1998 - 2000)'
          result='5.00/5'
          des='Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale.'
        />
      </div>
    </section>
  );
};

export default Resume;
