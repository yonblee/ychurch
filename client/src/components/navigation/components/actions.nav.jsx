import ModeNav from "./mode.nav";
import NotificationActions from "./notification.actions";
import ProfileActions from "./profile.actions";
import SearchActions from "./search.actions";
import SettingActions from "./setting.actions";

const NavActions = () => { 
    return (
        <section>
            <SearchActions />
            <NotificationActions />
            <ProfileActions />
            <ModeNav />
        </section>
    )
 }
 export default NavActions