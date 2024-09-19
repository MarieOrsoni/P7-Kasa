import { NavLink } from "react-router-dom";
import './navbar.scss';



function NavBar() {
    return ( 
        <nav className="navbar">
            <NavLink className={({ isActive }) => isActive ? "navbar__links active" : "navbar__links"}
            to='/'
            end
            > 
            Accueil
            </NavLink> 
            <NavLink className={({ isActive }) => isActive ? "navbar__links active" : "navbar__links"}
            to="/about-us"
            >
                A Propos 
                </NavLink>  
        </nav>
   
    );
}
export default NavBar;