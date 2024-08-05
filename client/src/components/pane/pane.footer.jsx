import { Add20Regular, ArrowSync20Regular, ChevronUpDown20Regular, Dismiss20Filled, Dismiss20Regular } from '@fluentui/react-icons'
import React from 'react'
import css from "@modules/pane.module.css"

function PaneFooter() {

  return (
    
        <div className='row small-round small-padding small-margin secondary-container'>
            <section className='max row'>
                <img className='circle' src='/uploads/umc.png' alt='church logo'/>
                <h6 className='small bold max'>Mount Sinai United Methodist Church</h6>
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

                <section className='right-align medium-padding row'>
                    <h6 className='max'>Manage Church Branches</h6>
                <button data-ui="#dialog" className='circle transparent'><Dismiss20Regular /></button>
                </section>
                <div className='divider'></div>
                
                <nav className={`${css.nav} vertical small-margin"`}>

                  
                    <label className="radio row small-round small-padding">
                        <img className='circle medium' src='/uploads/umc.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>Mount Sinai United Methodist Church</h6>
                            <span className={`small top-margin ${css.info}`}> 
                                Main Branch &middot; 12th Street, Sinkor &middot; 26+ Updates 
                            </span>
                        </section>
                            <input type="radio" name="branch1"/>
                            <span></span>
                    </label>
                    <label className="radio row small-round small-padding">
                        <img className='circle medium' src='/uploads/umc.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>Wein Towns United Methodist Church </h6>
                            <span className={`small top-margin ${css.info}`}> 
                                Branch #2 &middot; Wein Town &middot; 56+ updates 
                            </span>
                        </section>
                            <input type="radio" name="branch2"/>
                            <span></span>
                    </label>
                    <label className="radio row small-round small-padding">
                        <img className='circle medium' src='/uploads/umc.png' alt='logo'/>
                        <section className='max'>
                            <h6 className='small bold'>Innis United Methodist Church</h6>
                            <span className={`small top-margin ${css.info}`}> 
                                Branch #3 &middot; Paynesville, Red Light &middot; 34+ updates 
                            </span>
                        </section>
                            <input type="radio" name="branch3"/>
                            <span></span>
                    </label>
                   
               
                </nav>
                <div className="divider"></div>

                <div className={`${css.footer} row padding`}>
                    <button className='circle transparent border extra'>
                        <i><Add20Regular /></i>
                    </button>
                    <section className='max'>
                        <h6 className='no-line small bold'>Create New Church Branch</h6>
                        <p className='no-line'>
                            You can only have 2 addition church branches. upgrade your subscription for more.
                        </p>
                    </section>
                </div>

            </dialog>
        </>
    )
}

export default PaneFooter