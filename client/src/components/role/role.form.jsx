import React from 'react'
const classes = "field fill label border small-round no-margin responsive"

function RoleForm() {
  return (
    <>
      <h6 className='bottom-padding'>Role Credentials</h6>
      <div className='divider bottom-margin'></div>

      <form method='post'>
        <div className={`${classes} prefix`}>
            <i>info</i>   
            <input type="fullname" required/>
            <label>Full name</label>
        </div>
        <div className='space'></div>
        <div className={`${classes} prefix`}>
            <i>email</i>   
            <input type="email" required/>
            <label>Email Address</label>
        </div>
        <div className='space'></div>
        <div className=''>
          <fieldset className='row'>
            <legend>Role</legend>
              <label htmlFor='admin'>
                <input type="checkbox" id='admin' name='admin'/>
                <span>Administrator</span>
              </label>
              <label htmlFor='user'>
                <input type="checkbox" id='user' name='user'/>
                <span>User</span>
              </label>
              <label htmlFor='moderator'>
                <input type="checkbox" id='moderator' name='moderator'/>
                <span>Moderator</span>
              </label>
          </fieldset>
            {/* <span className='helper error'>Info about the selected role</span> */}
        </div>
        <div className='space'></div>
        <div className={`${classes} prefix`}>
            <i>key</i>   
            <input type="password" required/>
            <label>Pin Code</label>
        </div>
        <div className='space'></div>
        <div className={`${classes} prefix`}>
            <i>key</i>   
            <input type="number" disabled required/>
            <label>Login ID</label>
        </div>
        <div className='space'></div>
        <nav className='row'>
          {/* <button className=' no-margin'>Save</button> */}
          {/* <button className=' no-margin responsive'>Save</button> */}
        </nav>

      </form>
    </>
  )
}

export default RoleForm