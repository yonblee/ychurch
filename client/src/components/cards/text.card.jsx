import React from 'react'
import css from "@modules/card.module.css"


function TextCard({details, appearance}) {
  return (
    <article className={`${css.card} ${css[appearance]} background small-round no-padding `}>
        <header className='small-padding'>{details.title}</header>
        <div className='divider'></div>
        <section className={`${css.section} padding`}>
          <h5 className={`${css.large} no-padding `}>{details.text}</h5>
          <span className={`${css.info}`}>{details.info}</span>
          </section>
        <footer className={`${css.footer} small-padding smaller`}>{details.footer}</footer>
    </article>
  )
}

export default TextCard