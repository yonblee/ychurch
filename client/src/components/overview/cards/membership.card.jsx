import React from 'react'
import css from "@modules/card.module.css"

function MembershipCard({appearance}) {
  return (
    <article className={`${css.gr13}`}>
        <section>
            <strong>Total Membership</strong>
            <h3>23,500</h3>
        </section>
        <nav className='vertical'>
           <span className='row'>
            <p className='max'>Female</p>
            <p className=''>13,500</p>
           </span>
           <span className='row'>
            <p className='max'>Male</p>
            <p className=''>34,500</p>
           </span>
           <span className='row'>
            <p className='max'>Young People</p>
            <p className=''>14,500</p>
           </span>
           <span className='row'>
            <p className='max'>Children</p>
            <p className=''>9,300</p>
           </span>
           <div className='divider'></div>
           <span className='row'>
            <p className='max'>Active Members</p>
            <p className=''>14,300</p>
           </span>
           <span className='row'>
            <p className='max'>Inactive Members</p>
            <p className=''>1,300</p>
           </span>
           <span className='row'>
            <p className='max'>Despora Members</p>
            <p className=''>5,300</p>
           </span>
           <div className='divider'></div>
           <span className='row'>
            <p className='max'>Affiliating Members</p>
            <p className=''>1,000</p>
           </span>
           <span className='row'>
            <p className='max'>New Members</p>
            <p className=''>2,300</p>
           </span>
        </nav>
    </article>
  
  )
}

export default MembershipCard