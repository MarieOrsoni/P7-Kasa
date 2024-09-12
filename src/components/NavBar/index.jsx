import { Link } from "react-router-dom";
import './index.scss';


function NavBar() {
    return ( 
       
    <nav className="navbar">
        <Link className="navbar__links" to="/AboutUs">A Propos</Link>
        <Link className="navbar__links" to="/">Acceuil</Link>
         
    </nav>
    );
}
export default NavBar;