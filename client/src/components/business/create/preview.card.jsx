import React from 'react'
import css from "@modules/business.module.css"

function PreviewCard() {
  return (
    <div className={`row padding`}>
       <img src='/uploads/sample.png' className='medium-round'/>
       <section className='max'>
            <h6>The Name of the new business here.</h6>
            <span>Church Organization</span> &middot; <span> 0 People</span>
        </section> 
    </div>
  )
}

export default PreviewCard