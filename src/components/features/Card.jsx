import React from 'react';

const Card = () => {
  return (
    <div
      className={
        'w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'
      }
    ></div>
  );
};

export default Card;
