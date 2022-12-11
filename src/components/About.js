import React from 'react';

// import img
import Image from '../assets/img/aboutme.jpg';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl mt-14'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Ashiqul Islam Shabu
              </h2>
              <p className='mb-4 mt-2 text-accent text-4xl font-bold'>
                Frontend Web Developer
              </p>
              <hr className='mb-4 opacity-5' />
              <p className='mb-8 text-justify'>
              Hi there,I'm Ashiqul Islam Shabu, and I graduated from the University of Barisal with a degree of BSc in Computer Science and Engineering in 2019. My current interests are in front-end development, and I enjoy using React JS to create beautiful and performant products with delightful user experiences.I refer to myself as a "passionate front-end developer" who loves coding and web platforms.<br />
                <br />
                I’ve developed several full-stack web projects using MERN Stack technologies.I have beginner-level knowledge of back-end technologies.In the near future, I’m looking forward to being a full-stack web developer.
              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
