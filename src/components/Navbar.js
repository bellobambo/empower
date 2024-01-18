import React from 'react';


const Navbar = () => {



  return (
    <div className='header  sticky bg-base-200 p-4'>
      <div className='flex justify-between items-center text-center'>
        <img src='/logo.png' className='h-50 w-60 mt-3' alt='Logo' />
        <a className='pr-8 text-white bg-red-500 hover:text-white hover:bg-transparent btn btn-error' href="mailto:empower.investment.servicemail.co@gmail.com">
  Contact Us
</a>


      </div>
    </div>
  );
};

export default Navbar;
