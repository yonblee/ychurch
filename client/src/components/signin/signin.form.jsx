import { FORMWRAPPER, HEADLINE, IMAGE } from "@components/styled/signup.styled"
import React, { useState } from 'react';
import css from "@modules/signin.module.css"
import Join from "@components/business/business.join";
const classes = "field fill label border small-round no-margin responsive"


function SigninForm() {
    const [flag, setFlag] = useState(false)
    const seePassword = () => { setFlag(!flag) } 


    return(
        <div className="center-align">
        <IMAGE src="/uploads/ezeebudget_logo.png" />
        <FORMWRAPPER className="left-align">
        <HEADLINE className="bold"> Sign in to your account </HEADLINE>
        <p> to manage your budgets. </p>
        <div className="space"></div>

        <form method="post">


            <div className={`${classes} prefix`}>
                <i>email</i>   
                <input type="email" required/>
                <label>Email Address</label>
            </div>

            <div className="space"></div>

            <div className={`${classes} prefix`}>
                <i onClick={seePassword}>info</i>   
                <input type={flag ? "text" : "password" }/>
                <label>Password</label>
            </div>
            <a className="no-margin" href="/auth/find"> Forgot password? </a> 
            <div className="space"></div>
            <button className="round no-margin responsive"> Sign in </button>
        </form>

        <nav>
            <a className="max link" href="/auth/signup">Create new Account</a>
            <Join />
        </nav>

        </FORMWRAPPER>
    </div>
    )
}

export default SigninForm