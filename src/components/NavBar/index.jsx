import { Link } from "react-router-dom";
import './navbar.scss';


function NavBar() {
    return ( 
       
    <nav className="navbar">
         <Link className="navbar__links" to="/">Acceuil</Link>
        <Link className="navbar__links" to="/AboutUs">A Propos</Link>
        
         
    </nav>
    );
}
export default NavBar;