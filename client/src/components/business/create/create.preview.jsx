import React from 'react'
import PreviewCard from './preview.card'
import css from "@modules/business.module.css"


function CreatePreview() {
  return (
    <div className={`max ${css.previews}`}>
        <PreviewCard />
        <section className={`${css.profiles} no-padding`}>
            <div className='divider'></div> 
            <h6 className='padding'>Your Business Profiles</h6>
            <div className='divider'></div> 
            <nav className='vertical padding'>
                <a href='' className='padding row small-round'>
                    <i className='border extra'><img src='/favicon.png'/></i>
                    <span>
                        <h6 className='no-line'>The name of the business</h6>
                    </span>
                </a>
            </nav>
            <div className='divider'></div> 
            <nav className='vertical padding'>
                <a href='' className='padding row small-round'>
                    <i className='border extra'><img src='/favicon.png'/></i>
                    <span>
                        <h6 className='no-line'>The name of the business</h6>
                    </span>
                </a>
            </nav>
        </section>
    </div>
  )
}

export default CreatePreview