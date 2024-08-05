import { Filter20Filled } from '@fluentui/react-icons'
import React from 'react'

function ActivityHead() {
  return (
    <header className=''>
        <nav>
            <section className='max'>
                <nav className='small'>
                    <a href='@' className='link active '>Activities</a>
                    <a href='@' className='link active '>People</a>
                </nav>
            </section>
            <button className='chip round'>
                <i><Filter20Filled /></i>
                <span>filter</span>
            </button>
        </nav>
    </header>
  )
}

export default ActivityHead