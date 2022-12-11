import React from 'react';

// import skill data
import { skills } from '../data';

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
      <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block text-center mb-6'>
            My Favourite Technonogies
          </h2>
        <div className='grid lg:grid-cols-8 gap-x-4 md:grid-cols-4 gap-y-4 sm:grid grid-cols-3'>
          
          {skills.map((skill, index) => {
            return (
              <div
                className='flex items-center justify-center'
                key={index}
              >
                <img className='h-20 w-28 md:w-36 sm:w-36 ' src={skill.image} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
