import React from 'react'
import SidebarButtons from './sidebar/sidebar.tabs'
import css from "@modules/sidebar.module.css"

function HomeSidebar() {
  return (
    <nav className={`m l left extra small-elevate`}>
        <SidebarButtons.Home />
        <SidebarButtons.Add />
        <SidebarButtons.Inbox />
        <SidebarButtons.Event />
        <SidebarButtons.People />
        <SidebarButtons.ToDo />
    </nav>
  )
}

export default HomeSidebar