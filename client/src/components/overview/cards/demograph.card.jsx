import React from 'react'
import css from "@modules/card.module.css"


function DemographCard() {
  return (
    <article className={`${css.gc13} padding`}>
        <div className='row'>
            <section className={`max`}>Ages Pie Chart Here</section>
            
            <section className={`max`}>
              <h6>Countries</h6>
              <nav className='vertical'>
                <span className='row'>
                  <p className='max'>Liberia</p>
                  <p className=''>70%</p>
                </span>
                <span className='row'>
                  <p className='max'>United States of America</p>
                  <p className=''>10%</p>
                </span>
                <span className='row'>
                  <p className='max'>Ghana</p>
                  <p className=''>5%</p>
                </span>
                <span className='row'>
                  <p className='max'>Sierra Leone</p>
                  <p className=''>5%</p>
                </span>
                <span className='row'>
                  <p className='max'>Ivory Coast</p>
                  <p className=''>10%</p>
                </span>
              </nav>
            </section>
        </div>
    </article>
  )
}

export default DemographCard