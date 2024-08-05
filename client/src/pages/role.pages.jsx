import React from 'react'
import css from "@modules/role.module.css"
import Fullbleed from '@components/fullbleed.comp'
import RoleBusiness from '@components/role/role.business'
import RoleForm from '@components/role/role.form'
import RoleSend from '@components/role/role.send'
import Navigation from '@components/navigation'

function RolePage() {
  return (
    <Fullbleed>
        <Navigation />
        <main className={`${css.main} spacing grid no-margin padding`}>
            <section className='s4 m4'>
              <RoleBusiness />
            </section>
            <section className='s4 m4'>
              <RoleForm />
            </section>
            <section className='s4 m4'>
              <RoleSend />
            </section>
        </main>
    </Fullbleed>
  )
}

export default RolePage