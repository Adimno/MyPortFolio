import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const service = () => {
  return (
    <section id="services">
    <h5> What I Offer</h5>
    <h2> Services</h2>

    <div className="container services_container">
    <article className="service">
  <div className="service_head">
    <h3>Mobile Development</h3>
  </div>
  <ul className="service_list">
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Cross-Platform Development </p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>User Interface Design </p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Mobile APIs and Integrations </p>
    </li>
  
    
  </ul>

  {/* END OF MOBILE */}
    </article>
    <article className="service">
  <div className="service_head">
    <h3>Web Development</h3>
  </div>
  <ul className="service_list">
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Responsive Web Design </p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Back-End Development </p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Version Control </p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Front-End Frameworks</p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>E-commerce Websites </p>
    </li>
 
  </ul>

  {/* END OF WEB*/}


    </article>
    <article className="service">
  <div className="service_head">
    <h3>Cyber Security</h3>
  </div>
  <ul className="service_list">
    <li>
      <BsCheck  className='service_list-icon'/>
      <p> Brute Force Attack</p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>SQL Injection </p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Incident Response</p>
    </li>
    <li>
      <BsCheck  className='service_list-icon'/>
      <p>Vulnerability Assessments </p>
    </li>

  </ul>




    </article>
      {/* END OF CYBER */}
    </div>
    
    </section>
  )
}

export default service