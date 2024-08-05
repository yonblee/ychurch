import React from 'react'
import css from "@modules/card.module.css"


function RowCard({details, appearance}) {
  return (
    <article className={`${css.card} ${css[appearance]} background small-round no-padding `}>
        <header className='small-padding'>The Titile</header>
        <div className='divider'></div>
        <nav className={`${css.row} small-padding vertical`}>
          <section className={`row`}>
            <i>woman</i>
            <span className='max'>Female</span>
            <span>1,500</span>
          </section>
          <section className={`row`}>
            <i>man</i>
            <span className='max'>Male</span>
            <span>1,500</span>
          </section>
          <section className={`row`}>
            <i>children</i>
            <span className='max'>Children</span>
            <span>1,500</span>
          </section>
        </nav>
        <footer className={`${css.footer} small-padding smaller`}>one one one</footer>
    </article>
  )
}

export default RowCard