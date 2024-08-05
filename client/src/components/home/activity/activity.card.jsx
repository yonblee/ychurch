import React from 'react'

function ActivityCard() {
  return (
    <div>

      <div className='row inverse small-padding tiny-margin'>
        <span>
          <img src='/uploads/sample.png' className='circle small' />
        </span>
        <section className='max'>
          <h6 className='no-line small'>Jane Doe added to 50 to Tithes Expense</h6>
          <small className='row no-margin no-padding'>
            11:00 PM &#2022; Business Name
          </small>
        </section>
      </div>

      <div className='row inverse small-padding tiny-margin'>
        <span>
          <img src='/uploads/sample.png' className='circle small' />
        </span>
        <section className='max'>
          <h6 className='no-line small'>Diamond Joe invited you to an event</h6>
          <small className='row no-margin no-padding'>
            11:00 PM &#2022; <a className='link'>Join Event</a>
          </small>
        </section>
      </div>

    </div>
  )
}

export default ActivityCard