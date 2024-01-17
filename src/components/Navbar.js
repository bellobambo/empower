import React, { useState } from 'react';


const Navbar = () => {
  const [click, setClick] = useState(false);


  return (
    <div className='header py-3 bg-base-200 p-4'>
      <div className='flex justify-between items-center text-center'>
        <img src='/logo.png' className='h-50 w-80 mt-3' alt='Logo' />
        
        <a className='text-white px-4' href='/'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
