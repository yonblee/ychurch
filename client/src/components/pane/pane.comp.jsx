import React from 'react'
const classes = "max extra round "
import { 
  CalendarArrowCounterclockwise20Regular, 
  CalendarChat20Regular, MoneyHand20Filled, 
  Organization20Regular, 
  People20Regular, 
  PeopleCommunity20Filled, 
  PeopleMoney20Regular, 
  Pin20Regular, 
  SpinnerIos20Regular, 
  TasksApp20Regular } from '@fluentui/react-icons'
import css from "@modules/pane.module.css"
import { NavLink } from 'react-router-dom'
import PaneFooter from './pane.footer'
function PaneComp({list}) {

  return (
    <div className={`${css.flex} ${css.vborder} small scroll no-padding no-margin`}>
      {/* <header class="fixed padding">
          <h5 class="no-margin small bold">Overview</h5>
      </header> */}
      <nav className={`vertical drawer no-margin padding max ${css.max} `}>
        {
            list.map((item, key) => (
            <NavLink key={key} className={`${classes} ${css.capitalize}`} to={`/overview/${item.item}`}>
              <i>{item.icon}</i>
              <span class={`${classes}`}>{item.item}</span>
            </NavLink>
            ))
        }
      </nav>
      <PaneFooter />
    </div>
  )
}

export default PaneComp