import React from 'react'
import ActivityHead from './activity/activity.head'
import ActivityCard from './activity/activity.card'

function HomeActivity() {
  return (
    <div>
        <ActivityHead />
        <section className=''>
          <ActivityCard />
          <ActivityCard />
        </section>
    </div>
  )
}

export default HomeActivity