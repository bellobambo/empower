import React from 'react';


const Footer = () => {
  return (
    <footer className="flex items-center justify-center m-4 p-10 text-neutral-content">
      <aside>
        <img src="/logo.png" className="h-50 w-80 mt-3" alt="Logo" />
        <a className='pr-8 flex items-center text-center justify-center text-white hover:text-red-500'  href="mailto:empower.investment.servicemail.co@gmail.com">
          Contact Us
        </a>

        <p className="text-center">Copyright © 2024 - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
