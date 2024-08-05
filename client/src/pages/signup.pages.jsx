import React from 'react';
import css from "@modules/signup.module.css"
import SignupForm from '@components/signup/signup.form';
import SignupCopy from '@components/signup/signup.copy';




const SignupPage = React.memo(() => { 

    return (
        <div className={`${css.container} grid no-margin padding`}>
            <SignupCopy />
            <SignupForm />
        </div>
    )
 },[])

 export default SignupPage