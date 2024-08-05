import {  GridRegular, Calendar20Regular, CalendarAdd20Regular, ChatMultiple20Regular, ChevronUpDown20Regular, DataPie20Regular, Dismiss20Regular, Icons20Regular, Mail20Regular, MoneyHandRegular, Note20Regular, NotePin20Regular, Organization24Regular, PanelLeft20Regular, PeopleAdd20Regular, PeopleAudience20Regular, PinGlobe20Filled, PinGlobe20Regular, Settings20Regular, ShiftsActivity20Regular, TasksApp20Regular, Home20Regular, GiftCardMoney20Regular, Live20Regular, ReceiptMoney20Regular, MoreCircle20Regular } from '@fluentui/react-icons'
import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import css from "@modules/sidebar.module.css"
let link_class = "extra row vertical center-align  small-padding small-round"

function goto(path) {
  let navigate = useNavigate()
  navigate(path)
}

function Logo() {
  return (
      <header>
          <img src="/logo.png" alt="ezeechurch logo" className='circle'/>
      </header>
  )
}
function Home() {
  return (
        <NavLink to='/'  className="extra">
          <i className="extra"><Home20Regular /></i>
          <span>Home</span>
        </NavLink>
  )
}
function Menu({props}) {
  return (
        <button className='transparent circle extra' {...props}>
          <i className="extra"><PanelLeft20Regular /></i>
        </button>
  )
}

function Overview() {
  return (
    <NavLink to='/overview'  className="extra">
    <i className="extra"><DataPie20Regular /></i>
    <span>Overview</span>
</NavLink>
  )
}

function Members() {
  return (
        <NavLink to='/membership'  className="extra">
            <i className="extra"><PeopleAudience20Regular /></i>
            <span>Members</span>
        </NavLink>
  )
}

function Activity() {
  return (
        <NavLink to='/activity' className="extra">
            <i className="extra"><Calendar20Regular /></i>
            <span>Activities</span>
        </NavLink>
  )
}

function Financial() {
  return (
        <NavLink to='/finance'  className="extra">
            <i className="extra"><MoneyHandRegular /></i>
            <span>Finances</span>
        </NavLink>
  )
}

function Reports() {
  return (
        <NavLink  to='/report' className="extra">
            <i className="extra">fiber_manual_record</i>
            <span>Reports</span>
        </NavLink>
  )
}



// MODAL ITEMS START
function Task() {
  return (
        <NavLink to={'/task'} className={`${css.link} ${link_class}`}>
            <i className="extra"><TasksApp20Regular /></i>
            <span>Task</span>
        </NavLink>
  )
}

function Requisition() {
  return (
        <NavLink to={"/requisition"} className={`${css.link} ${link_class}`}>
            <i className="extra"><ReceiptMoney20Regular /></i>
            <span>Requisition</span>
        </NavLink>
  )
}

function GroupChat() {
  return (
                
        <NavLink to={"/chat"} className={`${css.link} ${link_class}`}>
            <i className="extra"><ChatMultiple20Regular /></i>
            <span>Group Chat</span>
        </NavLink>
  )
}

function Memo() {
  return (
        <NavLink to={"/memo"} className={`${css.link} ${link_class}`}>
            <i className="extra"><PinGlobe20Regular /></i>
            <span>Memo</span>
        </NavLink>
  )
}

function Documents() {
  return (
        <NavLink to='/document' className={`${css.link} ${link_class}`}>
            <i className="extra"><Note20Regular /></i>
            <span>Document</span>
        </NavLink>
  )
}

function Department() {
  return (
        <NavLink to='/department' className={`${css.link} ${link_class}`}>
            <i className="extra"><Organization24Regular /></i>
            <span>Department</span>
        </NavLink>
  )
}

function People() {
  return (
    <NavLink to='/people' className={`${css.link} ${link_class}`}>
            <i className="extra"><PeopleAdd20Regular /></i>
            <span>People</span>
        </NavLink>
  )
}
function Donation() {
  return (
    <NavLink to='/donation' className={`${css.link} ${link_class}`}>
            <i className="extra"><GiftCardMoney20Regular /></i>
            <span>Donation</span>
        </NavLink>
  )
}

function Meetings() {
  return (
    <NavLink to='/meeting' className={`${css.link} ${link_class}`}>
            <i className="extra"><CalendarAdd20Regular /></i>
            <span>Meeting</span>
        </NavLink>
  )
}

function Setting() {
  return (
        <NavLink to='/setting' className={`${css.link} ${link_class}`}>
            <i className="extra"><Settings20Regular /></i>
            <span>Setting</span>
        </NavLink>
  )
}

function Broadcast() {
  return (
        <NavLink to='/broadcast' className={`${css.link} ${link_class}`}>
            <i className="extra"><Live20Regular /></i>
            <span>Broadcast</span>
        </NavLink>
  )
}

function Inbox() {
  return (
        <NavLink to='/broadcast' className={`${css.link} ${link_class}`}>
            <i className="extra"><Mail20Regular /></i>
            <span>Inbox</span>
        </NavLink>
  )
}


// MODAL ITEMS END
function Dialog() {
  return (
    <>
      
        <button data-ui="#pane" className="transparent circle extra">
            <i className="extra"><MoreCircle20Regular /></i>
        </button>

        <dialog className={`${css.dialog} modal no-padding blur`} id="pane">
          <section className='right-align medium-padding'>
            <button data-ui="#pane" className='circle transparent'>
              <Dismiss20Regular />
            </button>
          </section>
          <div className='divider'></div>
          <nav className={`${css.flexbox} padding`}>
            <Department />
            <Donation />
            <Broadcast />
            <Meetings />
            <People />
            <Requisition />
            <GroupChat />
            <Inbox />
            <Memo />
            <Task />
            <Documents />
            <Setting />
          </nav>
        </dialog>

    </>
  )
}





export default {
  Logo,
  Home,
  Financial,
  Members,
  Activity, 
  Department,
  Menu,
  Reports,
  Requisition,
  Overview,
  Dialog,
  }