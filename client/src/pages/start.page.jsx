import React from 'react'
import { CONTENT, FIGURE, WRAPPER } from '@components/styled/welcome.styled'
import Join from '@components/business/business.join'
import css from "@modules/start.module.css"

const StartPage = React.memo(() => { 
    return(
        <WRAPPER>
           <CONTENT>
            <section>
                <h3 className='bold'>Smart solutions for everyday budget management
                </h3>
                <p>Easily manage your finances with tools for revenue and expenditure tracking, invoicing, reporting, requisition approvals, and team messaging for church, and small and medium size business.
                </p>
                <div className={`row`}>
                    <a href='/auth/signup' className='button '>Start Free Trial</a>
                    <a href='/auth/login' className='button border '>Sign in</a>
                   <Join />
                </div>
            </section>
           <FIGURE>
            <img src='/uploads/start_foreground.jpg' alt='foreground image' />
           </FIGURE>
           </CONTENT>
        </WRAPPER>
    )
 },[])

export default StartPage