import React from 'react'
import css from "@modules/signup.module.css"
import { HEADLINE, IMAGE } from "@components/styled/signup.styled"
const classes = "field fill label border small-round no-margin responsive"
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octpber", "November", "December"]


function SignupForm() {
  return (
        <section className="s5 m5">
            <article className={`${css.form} top-padding`}>
                <HEADLINE className="bold">Create new account</HEADLINE>
                <p>to manage your budgets.</p>
                <div className="space"></div>

                <form method="post">
                    <div className={`${classes} prefix`}>
                        <i>info</i>   
                        <input type="text" required/>
                        <label>Your Full Name</label>
                    </div>
                    <div className="space"></div>

                    <div className={`${classes} prefix`}>
                        <i>email</i>   
                        <input type="email" required/>
                        <label>Email Address</label>
                    </div>
                    <div className="space"></div>

                    <section className={`${css.flexbox}`}>
                        <div className={`${classes} no-margin`}>
                            <select>
                                {
                                    months.map((month, key) => (
                                    <option id={key} key={key}>{month}</option>))
                                }
                            </select>
                            <label>Birth Month</label>
                            <i>arrow_drop_down</i>
                        </div>
                        <div className={`${classes}`}>
                            <input type="number" required />
                            <label>Birth Day</label>
                        </div>
                        <div className={`${classes} no-margin`}>
                            <input required type="number"  />
                            <label>Birth Year</label>    
                        </div>
                    </section>
                    <div className="space"></div>

                    <div className={`${classes} no-margin prefix`}>
                        <i>key</i>   
                        <input required type="password"/>
                        <label>Password</label>    
                    </div>
                            
                    <div className="space"></div>

                    <div className={`${classes}suffix prefix`}>
                        <i>info</i>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                        <label>Your Gender</label>
                        <i>arrow_drop_down</i>
                    </div>
                    <div className="space"></div>

                    <button className="round  responsive no-margin">Create Account</button>
                </form>
                <p className="center-align"> Already have an account? <a href="/auth/login" className="underline">Sign in</a></p>
            </article>
        </section>
  )
}

export default SignupForm