import React from 'react'
import css from "@modules/upgrade.module.css"
import { FastAccelerationFilled } from '@fluentui/react-icons'

export default function UpgradeHeader() {
  return (
    <header>
        <nav>
            <section className='max'>
                <img className={`${css.logo}`} src='/uploads/ezeebudget_logo.png' alt='Logo'/>
            </section>
            <section>
                <button className='round'><i>help</i></button>
                <button className='icon-button'><i>twitter</i></button>
                <button className='icon-button'><i>linkedIn</i></button>
                <button className='icon-button'><i>youtube</i></button>
            </section>
        </nav>
    </header>
  )
}
