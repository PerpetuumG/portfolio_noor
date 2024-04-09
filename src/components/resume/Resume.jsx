import React from 'react';
import Title from '../layouts/Title';
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";

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

      {/*<Education/>*/}
      {/*<Skills/>*/}
      {/*<Experience/>*/}
      <Achievement/>
    </section>
  );
};

export default Resume;
