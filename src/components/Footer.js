import React from 'react';

// import social data
import { social } from '../data';

// import logo
// import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-col space-y-6 lg:space-y-0 items-center justify-between'>
        
            
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
       
                <a className='text-accent text-3xl mb-4' href={href} key={index}>
                  {icon}
                </a>
              
              );
            })}
      
          </div>
          <p className=' opacity-80 text-xl font-semibold text-center'>
                Designed & Developed By <span className='text-white text-2xl'> Md Tanzil Mia</span> 
                <br />
                 Copyright  &copy; 2022
            </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
