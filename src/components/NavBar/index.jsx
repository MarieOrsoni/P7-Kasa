import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png"


function NavBar() {
    return ( 
    <div>
        <Link className="navbar" to="/">Acceuil</Link>
        <Link className="navbar" to="/AboutUs">A Propos</Link>
        
        <img src={Logo} alt="Kasa logo"/>
        
    </div>
    );
}
export default NavBar;