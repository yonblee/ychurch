import Navigation from '@components/navigation'
import Pane from '@components/pane'
import Sidebar from '@components/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'


let list = [
  {item: "membership", icon: "change_history"},
  {item: "expenditure", icon: "key"},
  {item: "income", icon: "change_history"},
  {item: "activity", icon: "fiber_manual_record"},
  {item: "requisition", icon: "info"},
  {item: "department", icon: "label"},
  {item: "task", icon: "lock"},
  {item: "people", icon: "pin"},
  {item: "memo", icon: "fiber_manual_record"},
  {item: "meeting", icon: "change_history"}
]


function OverviewPage() {
  return (
    <>
        <Navigation />
        <Sidebar />
        <main className='grid no-margin'>
            <section className='s3 s3'>
              <Pane list={list} />
            </section>
            <section className='s9 m9'>
              <Outlet />
            </section>
        </main>
    </>
  )
}

export default OverviewPage