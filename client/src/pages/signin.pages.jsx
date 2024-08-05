import { FORMWRAPPER, HEADLINE, IMAGE } from "@components/styled/signup.styled"
import React, { useState } from 'react';
import css from "@modules/signin.module.css"
import SigninForm from "@components/signin/signin.form";
import SigninSSO from "@components/signin/signin.sso";
const classes = "field fill label border small-round no-margin responsive"

const SigninPage = React.memo(() => { 
  
    return (
        <main className={`hide ${css.fullbleed}`}>
            <SigninSSO />
            <SigninForm />
        </main>
    )
 }, [])

 export default SigninPage