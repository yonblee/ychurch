import React from 'react'
const classes = "max small-round"
import { Calendar20Filled, ChatMultiple20Filled, DataArea20Filled, DataLine20Regular, DataPie20Regular, DeviceMeetingRoom20Regular, Group20Regular, NotePin20Regular, Payment20Filled, PeopleMoney20Regular, Record20Filled } from '@fluentui/react-icons'

function PaneBusiness() {

  return (
    <div className={`small scroll no-padding no-margin`}>
      {/* <header class="fixed background">
          <h5 class="no-margin small bold">The Business Name Here...</h5>
      </header> */}

      <nav className={`vertical drawer no-margin small-padding max`}>

        <a  className={`${classes}`} href='/summary'>
          <i><DataPie20Regular /></i>
          <span class={`${classes}`}>Summary</span>
        </a>
       
        <a className={`${classes}`}>
          <i><PeopleMoney20Regular /></i>
          <span class={`${classes}`}>Revenues</span>
          <b>24</b>
        </a>

        <a className={`${classes}`}>
          <i><DataLine20Regular /></i>
          <span class={`${classes}`}>Expenses</span>
          <b>24</b>
        </a>

        <a className={`${classes}`}>
          <i><DeviceMeetingRoom20Regular /></i>
          <span class={`${classes}`}>Reports</span>
          <b>10</b>
        </a>

        <a className={`${classes}`}>
          <i><Record20Filled /></i>
          <span class={`${classes}`}>Invoices</span>
        </a>

        <a className={`${classes}`}>
          <i>change_history</i>
          <span class={`${classes}`}>Requisitions</span>
          <b>2 Pending</b>

        </a>

        <a className={`${classes}`}>
          <i><NotePin20Regular /></i>
          <span class={`${classes}`}>Memo</span>
        </a>

        <a className={`${classes}`}>
          <i>fiber_manual_record</i>
          <span class={`${classes}`}>Budgets</span>
        </a>

        <a className={`${classes}`}>
          <i><ChatMultiple20Filled /></i>
          <span class={`${classes}`}>Group Chat</span>
        </a>

        <a className={`${classes}`}>
          <i><Calendar20Filled /></i>
          <span class={`${classes}`}>Milestones</span>
        </a>

      </nav>
    </div>
  )
}

export default PaneBusiness