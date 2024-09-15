
import Logo from "./../../assets/logo.png";
import './header.scss';
import NavBar from "../NavBar";

function Header() { 
    return ( 

    <header className="header">
       
       <img className="logo" src={Logo} alt="Kasa logo"/>  
    
        <NavBar />
         
    </header>
    );
}
export default Header;
