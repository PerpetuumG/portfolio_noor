import React from 'react';
import { SiFigma, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaFacebookF, FaLinkedinIn, FaReact, FaTwitter } from 'react-icons/fa';

const Media = () => {
  return (
    <div className={'flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'}>
      <div>
        <h2 className={'text-base uppercase font-titleFont mb-4'}>Find me in</h2>
        <div className={'flex gap-4'}>
          <span className={'bannerIcon'}>
            <FaFacebookF />
          </span>
          <span className={'bannerIcon'}>
            <FaTwitter />
          </span>
          <span className={'bannerIcon'}>
            <FaLinkedinIn />
          </span>
        </div>
      </div>

      <div>
        <h2 className={'text-base uppercase font-titleFont mb-4'}>best skill on</h2>
        <div className={'flex gap-4'}>
          <span className={'bannerIcon'}>
            <SiTailwindcss />
          </span>
          <span className={'bannerIcon'}>
            <SiFigma />
          </span>
          <span className={'bannerIcon'}>
            <SiNextdotjs />
          </span>
          <span className={'bannerIcon'}>
            <FaReact />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
