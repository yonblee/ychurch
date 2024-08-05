import { CONTAINER, FORMWRAPPER, HEADLINE, IMAGE} from "@components/styled/signup.styled"
import React from 'react';
const classes = "field fill label border small-round no-margin responsive"

const ResetPassword = React.memo(() => { 
    return (
        <CONTAINER>
            <IMAGE src="/uploads/ezeebudget_logo.png" />
            <FORMWRAPPER>
                <div className="row border tiny-padding round no-margin">
                    <img className="circle medium" src="/uploads/sample.png" alt="Sample Image"/>
                    <div>
                        <h6 className="medium">Diamond M. Joe</h6>
                        <a href="/auth/find"> Not you? </a>
                    </div>
                </div>
                <HEADLINE className="bold">Reset password</HEADLINE>
                <p>to sign in to your account</p>
                <div className="space"></div>
               
                <form method="post">
                    <div className={`${classes} prefix`}>
                        <i>info</i>   
                        <input type="password" required/>
                        <label>New Password</label>
                    </div>
                    <div className="space"></div>
                    <div className={`${classes} prefix`}>
                        <i>info</i>   
                        <input type="password" required/>
                        <label>Confirm Password</label>
                    </div>
                    <div className="space"></div>
                    <button className="round no-margin responsive">Save Password</button>
                </form>
            </FORMWRAPPER>
        </CONTAINER>
    )
 }, [])

 export default ResetPassword