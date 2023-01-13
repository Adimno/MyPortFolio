import React from 'react'
import './portfolio.css'
import {ME} from '../../assets/me.jpg'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2> Portfolio</h2>
      
      <div className="container portfolio_container">
     <article className='portfolio_item'>
       <div className="portfolio_item-image">
        <h3> This is a portfolio item title</h3>
        <a href="https://github.com" className='btn' target='_blank'>Github</a>
        <a href="https://dribbble.com/search/alien" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
     </article>


      </div>

    

    </section>
  )
}

export default portfolio