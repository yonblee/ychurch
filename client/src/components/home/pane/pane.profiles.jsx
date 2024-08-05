import { Add20Regular, ArrowSync20Regular, ChevronUpDown20Regular, Dismiss20Filled } from '@fluentui/react-icons'
import React from 'react'
import css from "@modules/pane.module.css"

function PaneProfile() {

  return (
    
        <div className='row small-round small-padding small-margin background'>
            <section className='max row'>
                <img className='circle' src='/uploads/sample.png' alt='profile picture'/>
                <h6 className='small bold max'>Business Name With Long Na...</h6>
            </section>
            <Dialog />
        </div>
  )

}

function Dialog() {
    return (
        <>
            <button className='circle transparent border' data-ui='#dialog'>
                {/* <i><ChevronUpDown20Regular /></i> */}
                <i><ArrowSync20Regular /></i>
            </button>

            <dialog className={` ${css.modal} modal no-padding`} id="dialog">

                <header className='fixed padding'>
                    <nav className='row'>
                        <h6 className='no-margin max'>Your Business Profiles</h6>
                        <button data-ui="#dialog" className='circle transparent'>
                            <i><Dismiss20Filled /></i>
                        </button>
                    </nav>
                </header>
                <div className='divider'></div>
                
                <nav className={`${css.nav} vertical small-margin"`}>

                    <section className='row small-round small-padding'>
                        <img className='circle medium' src='/favicon.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>The Business Name</h6>
                            <span className='small'> 26+ Notifications &2022; 4+Active </span>
                        </section>
                        <label className="radio">
                            <input type="radio" name="b"/>
                            <span></span>
                        </label>
                    </section>
                    <section className='row small-round small-padding'>
                        <img className='circle medium' src='/favicon.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>The Business Name</h6>
                            <span className='small'> 26+ Notifications &2022; 4+Active </span>
                        </section>
                        <label className="radio">
                            <input type="radio" name="b"/>
                            <span></span>
                        </label>
                    </section>
                    <section className='row small-round small-padding'>
                        <img className='circle medium' src='/favicon.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>The Business Name</h6>
                            <span className='small'> 26+ Notifications &2022; 4+Active </span>
                        </section>
                        <label className="radio">
                            <input type="radio" name="b"/>
                            <span></span>
                        </label>
                    </section>
                    <section className='row small-round small-padding'>
                        <img className='circle medium' src='/favicon.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>The Business Name</h6>
                            <span className='small'> 26+ Notifications &2022; 4+Active </span>
                        </section>
                        <label className="radio">
                            <input type="radio" name="b"/>
                            <span></span>
                        </label>
                    </section>
                    <section className='row small-round small-padding'>
                        <img className='circle medium' src='/favicon.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>The Business Name</h6>
                            <span className='small'> 26+ Notifications &2022; 4+Active </span>
                        </section>
                        <label className="radio">
                            <input type="radio" name="b"/>
                            <span></span>
                        </label>
                    </section>
                    <section className='row small-round small-padding'>
                        <img className='circle medium' src='/favicon.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>The Business Name</h6>
                            <span className='small'> 26+ Notifications &2022; 4+Active </span>
                        </section>
                        <label className="radio">
                            <input type="radio" name="b"/>
                            <span></span>
                        </label>
                    </section>

                </nav>
                <div className="divider"></div>

                <div className={`${css.footer} row small-padding`}>
                    <button className='circle transparent border extra'>
                        <i><Add20Regular /></i>
                    </button>
                    <section className='max'>
                        <h6 className='no-line small bold'>Create New Business Profile</h6>
                        <p className='tiny-line'>You can only have 3 addition business profiles at a time. upgrade your subscription to add more business profile</p>
                    </section>
                </div>

            </dialog>
        </>
    )
}

export default PaneProfile