import React from 'react'
import css from "@modules/comp.module.css"


function Fullbleed({children}) {
  return (
    <div className={css.fullbleed}>{children}</div>
  )
}

export default Fullbleed