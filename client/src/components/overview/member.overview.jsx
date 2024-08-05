import TextCard from '@components/overview/cards/text.card'
import React from 'react'
import css from "@modules/overview.module.css"
import RowCard from '@components/overview/cards/row.card'

let membership = {
  title: "Church Membership",
  text: "21,300",
  info: '+25K% increase',
  footer: "previous 365 days."
}

let Gender = [
  {icon: "woman", prop: "Female", value: "10400"},
  {icon: "man", prop: "Male", value: "9300"},
  {icon: "children", prop: "Children", value: "300"},
  {icon: "others", prop: "Youths", value: "1300"},
]


function MemberOverview() {
  return (
    <div className={`${css.grid} ${css.max} small-padding`}>
      <TextCard appearance={"tall"} details={membership}/>
      <RowCard title={"Gender"} details={Gender} />
      <RowCard title={"Gender"} details={Gender} />
      <RowCard title={"Gender"} details={Gender} />
      <RowCard title={"Gender"} details={Gender} />
      <RowCard title={"Gender"} details={Gender} />
      <RowCard title={"Gender"} details={Gender} />
      <RowCard title={"Gender"} details={Gender} />
    </div>
  )
}

export default MemberOverview