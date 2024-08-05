import React from "react"
import HomeSidebar from "@components/home/sidebar.home";
import HomePane from "@components/home/pane.home";
import Navigation from "@components/navigation";
import HomeActivity from "@components/home/home.activity";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/sidebar";

const HomePage = React.memo(() => { 
    return (
        <>
            <Sidebar />
            <div className="">
                <Navigation />
                <section className={`grid no-margin`}>
                    <section className="s3 m3">
                        <HomePane />
                    </section>
                    <article className="s6 s6 small-margin no-padding">
                        <Outlet />
                    </article>
                    <article className="s3 m3 small-margin no-padding">
                        <HomeActivity />
                    </article>
                </section>
            </div>
        </>
    )
 },[])

 export default HomePage
 