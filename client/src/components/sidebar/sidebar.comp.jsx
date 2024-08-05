import React, { useState } from 'react'
import SidebarButtons from './sidebar.tabs'
import css from "@modules/sidebar.module.css"

function Sidebar() {
  return (
    <nav className={`m l left`}>
        <SidebarButtons.Logo />
        <SidebarButtons.Overview />
        <SidebarButtons.Members />
        <SidebarButtons.Activity />
        <SidebarButtons.Financial />
        <SidebarButtons.Reports />
        <SidebarButtons.Dialog />
    </nav>
  )
}

export default Sidebar