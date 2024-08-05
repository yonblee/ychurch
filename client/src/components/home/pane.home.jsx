import React from 'react'
import PaneProfile from './pane/pane.profiles'
import PaneBusiness from './pane/pane.business'
import css from "@modules/pane.module.css"


function HomePane() {
  return (
    <div className={`${css.flexbox} no-padding`}>
            <PaneBusiness />
            <PaneProfile />
    </div>
  )
}

export default HomePane