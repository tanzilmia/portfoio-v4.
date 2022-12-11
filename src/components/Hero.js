import React from 'react';

// import woman image
import Image from '../assets/img/prof.png';


const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-2xl font-semibold text-accent text-md mb-[22px]'>
              Hey, I'm Tanzil! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I'm Front End  <br /> Developer.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              M E R N Stack Developer

            </p>
            <a download={''} href='https://drive.google.com/file/d/1hCQzJE98YPWN8s8yDHKZ5AgLSs_iWLEU/view?usp=share_link' className='btn btn-md bg-accent hover:bg-secondary-hover  md:btn-lg transition-all'>
              Download Resume
            </a>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <div className="w-8/12  ">
              <img src={Image} alt="..." class="shadow bg-slate-400 mb-16  rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
