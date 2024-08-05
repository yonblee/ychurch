import Navigation from '@components/navigation'
import Sidebar from '@components/sidebar'
import React from 'react'
import CreateForm from './create/create.form'
import CreatePreview from './create/create.preview'

function BusinessCreate() {
  return (
    <div>
        <Navigation />
        <Sidebar />
        <main className={`no-margin row`}>
            <CreateForm />
            <CreatePreview />
        </main>
    </div>
  )
}

export default BusinessCreate