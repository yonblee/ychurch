import css from "@modules/header.module.css"

const NavLogo = () => { 
    return (
        <section className="max">
            <a href="/home">
                <img className={css.logo} src="/uploads/ezeebudget_logo.png" alt="EzeeBudget Logo" />
            </a>
        </section>
    )
 }

 export default NavLogo