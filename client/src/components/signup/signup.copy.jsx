import React from 'react'
import css from "@modules/signup.module.css"


function SignupCopy() {
  return (
    <section className={`${css.copy} s7 m7`}>
        <img className={`${css.logo}`} src='/uploads/ezeebudget_logo.png' alt='Logo' />
        <h4>
            ezeeBudget helps business manage everyday financial transactions. Keep track of money and activities across multiple businesses. Generate reports and host realtime financial standup meetings. All in one place.
        </h4>
    </section>
  )
}

export default SignupCopy