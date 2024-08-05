import React from 'react'
import css from "@modules/role.module.css"
const classes = "small-padding primary-container small-round bottom-margin"
function RoleSend() {
  return (
    <div>
        <h6 className='bottom-padding'>Send Credential</h6>
        <div>
          <section className={`${css.section} ${classes}`}>
            <h6 className='bold'>Timothy T. Joe</h6>
            <small className='helper'>Full name of the user account</small>
          </section>
          <section className={`${css.section} ${classes}`}>
            <h6 className='bold'>timtheme@gmail.com</h6>
            <small className='helper'>Email Address</small>
          </section>
          <section className={`${css.section} ${classes}`}>
            <h6 className='bold'>Administrator</h6>
            <small className='helper'>An admin role can have access to business account</small>
          </section>
          <section className={`${css.section} ${classes}`}>
            <h6 className='bold'>19955</h6>
            <small className='helper'>Pin code to join business account</small>
          </section>
          <section className={`${css.section} ${classes}`}>
            <h6 className='bold'>0220103456</h6>
            <small className='helper'>Login ID to join business account</small>
          </section>
          <button className=' no-margin responsive'>Save</button>

        </div>
    </div>
  )
}

export default RoleSend