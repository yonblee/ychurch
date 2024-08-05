import React, { useState } from 'react';
import rules from "@modules/signin.module.css"


function SigninSSO(params) {
    return(
        <section className={`${rules.hide, rules.block} padding`}>
            <article className={`${rules.media} no-margin round`}>
                <img className={`responsive`} src="/uploads/sample.png" alt="sample"/>
                <h6 className="medium bold">Diamond D.</h6>
            </article>
            <article className={`${rules.media} no-margin round`}>
                <img className={`responsive`} src="/uploads/sample.png" alt="sample"/>
                <h6 className="medium bold">Jane Doe</h6>
            </article>
            <article className={`${rules.media} no-margin round`}>
                <img className={`responsive`} src="/uploads/sample.png" alt="sample"/>
                <h6 className="medium bold">Juliet Y'llo</h6>
            </article>
        </section>
    )
}

export default SigninSSO