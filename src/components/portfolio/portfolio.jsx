import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.jpg'
import ANALYTICS from '../../assets/analytics.jpg'
import LOGO from '../../assets/logowork.png'

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5> My Recent Work </h5>
      <h2> Portfolio</h2>
      
      <div className="container portfolio_container">

     <article className='portfolio_item'>
       <div className="portfolio_item-image">
       <img src={LOGO} alt="" className="" />
        <h3> Wellfresh Dental Clinic  </h3>
         <div className="portfolio_item-cta">
         <a href="https://github.com/Adimno/WellFreshUpdated" className='btn' target='_blank'>Github</a>
         </div>
       </div>
     </article>

    

    

      </div>

    

    </section>
  )
}

export default portfolio