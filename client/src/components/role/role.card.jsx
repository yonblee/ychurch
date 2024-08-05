import React, { useState } from 'react'
import css from "@modules/role.module.css"


function RoleCard() {
    const [flag, setFlag] = useState(false)
    const handleSelection = () => {
        setFlag(!flag)
        console.log(flag)
    }


  return (
    <div>
        <label htmlFor='business' className={`${css.label} row primary-container small-round small-padding small-margin`}>
            <input type="checkbox" name="business" id="business" />
            <h6 className={``}>The Name of the business</h6>
        </label>
        <label htmlFor='b' className={`${css.label} row primary-container small-round small-padding small-margin`}>
            <input type="checkbox" name="b" id="b" />
            <h6 className={``}>The Name of the business</h6>
        </label>
    </div>
  )
}

export default RoleCard