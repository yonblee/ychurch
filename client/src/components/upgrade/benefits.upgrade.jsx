import React from 'react'
import css from "@modules/upgrade.module.css"

export default function UpgradeBenefits() {
  return (
    <div className={`${css.benefits} large-padding`}>
        <h2 className='center-align large-padding'>Explore even more benefits of ezeeBudget</h2>
      <div className={`${css.flexitems} small-padding`}>
        <section className={`${css.item}`}>one</section>
        <section className={`${css.item}`}>two</section>
        <section className={`${css.item}`}>three</section>
        <section className={`${css.item}`}>four</section>
        <section className={`${css.item}`}>five</section>
        <section className={`${css.item}`}>six</section>
      </div>
    </div>
  )
}
