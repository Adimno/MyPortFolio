import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_njran3y', 'template_3n7877j', form.current, '42yjIc4LuFsoG0p3I')
     e.target.reset()
  };

  return (
    <section id="contact">
       <h5> Get In Touch </h5>
       <h2> Contact Me</h2>

      
      <div className=" container contact_container">
        <div className="contact_options">
            <article className="contact_option">
              <MdOutlineMail className='contact_option-icon'/>
              <h4> Email</h4>
              <h5> jayjaynaval02@gmail.com</h5>
              <a href="mailto:jayjaynaval02@gmail.com" target="_blank"> Send a message</a>
            </article>

            <article className="contact_option">
              <BsMessenger  className='contact_option-icon'/>
              <h4> Messenger</h4>
              <h5> Jayjay Naval</h5>
              <a href="https://m.me/jayjay.naval"  target="_blank"> Send a message</a>
            </article>
          
        
          
          


        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit = {sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required  />
        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>

        <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>
      </div>



    </section>
  )
}

export default Contact