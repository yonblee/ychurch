import { CONTAINER, FORMWRAPPER, HEADLINE, IMAGE} from "@components/styled/signup.styled"
import React from 'react';
const classes = "field fill label border small-round no-margin responsive"

const FindAccount = React.memo(() => { 


    return (
        <CONTAINER>
            <IMAGE src="/uploads/ezeebudget_logo.png" />
            <FORMWRAPPER>
                <HEADLINE className="bold">Find Account</HEADLINE>
                <p>to reset password</p>
                <div className="space"></div>
                <form method="post">
                    <div className={`${classes} prefix`}>
                        <i>mail</i>   
                        <input type="text" required/>
                        <label>Email Address</label>
                    </div>
                    <span className="helper">Enter the email associated with your account.</span>   
                    <div className="space"></div>
                    <button className="round no-margin responsive">Find Account</button>
                </form>
                <p className="center-align"> Remember your password?  <a href="/auth/login"> Sign in</a> </p>
            </FORMWRAPPER>
        </CONTAINER>
    )
 }, [])

 export default FindAccount