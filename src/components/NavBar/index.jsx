import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png"
import './index.scss'


function NavBar() {
    return ( 
         
    <div className="navbar">
       
       <img className="logo" src={Logo} alt="Kasa logo"/>  
        <Link className="navbar__links" to="/AboutUs">A Propos</Link>
        <Link className="navBar__links" to="/">Acceuil</Link>
         
    </div>
    );
}
export default NavBar;