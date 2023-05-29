import React from 'react'
import  './about.css'
import ME from '../../assets/me.jpg'
import {MdWork} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolder} from 'react-icons/ai'


const about = () => {
  return (
   <section id="about">
    <h5> Get To Know </h5>
    <h2> About Me</h2>
    <div className="container about_container">
      <div className="about_me">
            <div className="div about_me-image">
              <img src={ME} alt="About Image" className="" />
            </div>
      </div>
      <div className="div about_content">
          <div className="about_cards">

            <article className='about_card'>
            <MdWork className='about_icon'/>
              <h5> Experience</h5>
              <small> Mobile, Website development, and Cyber Security</small>
            </article>

           
            
             
          </div>
          <p>
      
            Enthusiastic IT professional with a passion for technology and an adaptable mindset.
            Possessing strong interpersonal skills and a proactive approach to problem-solving. Fast learner seeking opportunities to apply technical knowledge, 
            <br></br>
            contribute to innovative projects, and make a positive impact in the technology industry.
          </p>

         <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default about