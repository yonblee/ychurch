import { WeatherMoon20Regular, WeatherSunny20Regular } from '@fluentui/react-icons';
import React, { useEffect, useState } from 'react'

const theme = async() => {
    await ui("theme", "#e4002b");
};

const mode = async () => {
    // await theme()
    let newMode = ui("mode") == "dark" ? "light" : "dark";
    ui("mode", newMode);
    window.localStorage.setItem("mode", newMode)
}

function ModeNav() {
  let savedMode = window.localStorage.getItem("mode")
  const [flag, setFlag] = useState(savedMode == "dark" ? false : true)

  return (
    <button className='circle transparent' onClick={() => {
      mode()
      setFlag(!flag)
    }}>
      <i className='extra'>
        { flag ? <WeatherSunny20Regular /> : <WeatherMoon20Regular/> }
      </i>
    </button>
  )
}

export default ModeNav