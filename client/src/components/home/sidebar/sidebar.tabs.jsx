import {  Add20Filled, CalendarAdd20Regular, Home20Regular, Mail20Regular, PeopleAdd20Regular, TasksApp20Regular } from '@fluentui/react-icons'
import React from 'react'


function Logo() {
  return (
    <header>
      <a href='/home'>
        <img className="circle small" src="/favicon.png"/>
      </a>
    </header>
  )
}

function People() {
  return (
        <a  className="extra">
            <i className="extra"><PeopleAdd20Regular /></i>
            <span>People</span>
        </a>
  )
}

function ToDo() {
  return (
        <a  className="extra">
            <i className="extra"><TasksApp20Regular /></i>
            <span>Tasks</span>
        </a>
  )
}

function Event() {
  return (
        <a  className="extra">
            <i className="extra"><CalendarAdd20Regular /></i>
            <span>Event</span>
        </a>
  )
}

function Inbox() {
  return (
        <a  className="extra">
            <i className="extra"><Mail20Regular /></i>
            <span>Inbox</span>
        </a>
  )
}


function Add() {
  return (
        <a  className="extra">
            <i className="extra"><Add20Filled /></i>
            <span>New</span>
        </a>
  )
}

function Home() {
  return (
        <a href='/home'  className="extra">
            <i className="extra"><Home20Regular /></i>
            <span>Home</span>
        </a>
  )
}



export default {People, ToDo, Event, Inbox, Logo, Add, Home}