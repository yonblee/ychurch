const classes = "field fill label border small-round no-margin responsive"
import css from "@modules/start.module.css"

function Join() {
    return (
        <>
            <button data-ui="#dialog" className="border">Join Business</button>
            <dialog className={`modal no-padding ${css.dialog}`} id="dialog">
                <header className="padding">
                    <nav>
                        <h6 className="max">Join Business Account</h6>
                        <button data-ui="#dialog" className="circle transparent"><i>close</i></button>
                    </nav>
                </header>
                <div className="divider"></div>
                <form method="post" className="padding">
                    <div className={`${classes} prefix`}>
                        <i>key</i>   
                        <input type="pincode" required/>
                        <label>Pin Code</label>
                    </div>
                    <div className="space"></div>
                    <div className={`${classes} prefix`}>
                        <i>key</i>   
                        <input type="LIN" required/>
                        <label>Login ID</label>
                    </div>
                </form>
                <div className="divider"></div>
                <footer className="padding">
                    <nav className={`${css.footer}`}>
                        <button data-ui="#dialog" className=" ">Join </button>
                    </nav>
                </footer>
            </dialog>
        </>
    )
}

export default Join