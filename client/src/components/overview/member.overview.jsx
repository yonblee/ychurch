import TextCard from '@components/cards/text.card'
import React from 'react'
import css from "@modules/overview.module.css"
import RowCard from '@components/cards/row.card'

let membership = {
  title: "Church Membership",
  text: "4,500",
  info: '+25K% increase',
  footer: "previous 365 days."
}


function MemberOverview() {
  return (
    <div className={`${css.grid} ${css.max} small-padding`}>
      {/* <TextCard appearance={"wider"}/> */}
      <TextCard details={membership}/>
      <RowCard />
    </div>
  )
}

export default MemberOverview