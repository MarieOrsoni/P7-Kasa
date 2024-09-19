import Logo from "./../../assets/logo.png";
import NavBar from "../NavBar";
import './header.scss';

function Header() { 
    return ( 

    <header className="header">
       
       <img className="logo" src={Logo} alt="Kasa logo"/>  
    
        <NavBar />
         
    </header>
    );
}
export default Header;
