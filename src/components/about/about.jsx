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
              <small> College Student</small>
            </article>

            <article className='about_card'>
            <FiUsers className='about_icon'/>
              <h5> Clients</h5>
              <small> 200+ Worldwide</small>
            </article>
            
              <article className='about_card'>
              <AiFillFolder className='about_icon'/>
              <h5> Projects</h5>
              <small> 80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, modi  <br></br> soluta impedit est dolorum iure,  vero in fuga eveniet
            <br></br> voluptatibus enim voluptatem saepe ullam 
            incidunt at deserunt vitae provident nostrum!
          </p>

         <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default about