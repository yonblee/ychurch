import React from 'react'
const classes = "field fill label border small-round bottom-margin responsive"
import css from "@modules/business.module.css"

function CreateForm() {
  return (
    <div className={`${css.form} `}>
        <header className='transparent'>
            <h5>Create Business Profile</h5>
        </header>
        <form method='post' className={`small-padding`}>
            <div className={`${classes} prefix`}>
                <i>image</i>   
                <input type="file" required/>
                <label>Business Logo</label>
            </div>
            <div className={`${classes} prefix`}>
                <i>business</i>   
                <input type="text" required/>
                <label>Business Name</label>
            </div>
            <div className={`${classes} prefix`}>
                <i>info</i>   
                <input type="text" required/>
                <label>Category</label>
            </div>
            <div className={`${classes} prefix`}>
                <i>phone</i>   
                <input type="text" required/>
                <label>Phone</label>
            </div>
            <div className={`${classes} prefix textarea`}>
                <i>map</i>   
                <textarea required></textarea>
                <label>Address</label>
            </div>
            
            <nav className='right-align'>
                <button className='border medium'>Create Business</button>
            </nav>
        </form>
    </div>
  )
}

export default CreateForm