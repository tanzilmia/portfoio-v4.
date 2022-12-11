import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

//  import contact data;
 import { contact } from '../data';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9eq6902', 'template_6odms2i', form.current, 'Qet8qRK9MSpV3fPD_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>

<section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
             Contact me
           </h2>
           <p className='subtitle'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
             labore nisium illum cupiditate reiciendis a numquam
           </p>
         </div>
         <div
           className='flex flex-col lg:gap-x-8 lg:flex-row'
         >
           <div
             className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
           >
             {contact.map((item, index) => {
               const { icon, title, subtitle, description } = item;
               return (
                 <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                   <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className='space-y-8 w-full max-w-[780px]'ref={form}  onSubmit={sendEmail}>
            <div className='flex gap-8'>
              <input className='input' type='text' name="user_name" placeholder='Your name' />
              <input className='input' type='email' name="user_email" placeholder='Your email' />
            </div>
            <input className='input' type='text'name="email_subject" placeholder='Subject' />
            <textarea className='textarea' name="message" placeholder='Your message'></textarea>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover' type='submit'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>     
    </div>
  );
};

export default Contact;
