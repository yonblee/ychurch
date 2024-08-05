import NavActions from "./components/actions.nav";
import NavLogo from "./components/logo.nav.jsx"
import css from "@modules/nav.module.css"

function Navigation() {
    return (
            <header className={`${css.bborder}`}>
                <nav className="">
                    <section className="max">
                    </section> 
                    <NavActions />
                </nav>
            </header>
    )
}

export default Navigation