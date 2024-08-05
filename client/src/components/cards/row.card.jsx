import React from 'react'
import css from "@modules/card.module.css"

function RowCard({appearance, title, details}) {
  return (
    <article className={`${css.card} ${css[appearance]} background small-round no-padding `}>
        <header className='small-padding'><h6>{title}</h6></header>
        <hr className='divider'/>

        <nav className={`${css.row} small-padding vertical`}>
          {
            details.map((row) => (
              <section className={`${css.large} row`}>
                <i className=''>{row.icon}</i>
                <span className='max'>{row.prop}</span>
                <span>{row.value}</span>
                <span>10%</span>
              </section>
            ))
          }
        </nav>
        {/* <footer className={`${css.footer} small-padding smaller`}>one one one</footer> */}
    </article>
  )
}

export default RowCard