import LogoWhite from '../../assets/LogoWhite.png'
import './footer.scss'

function Footer() {
    return (       
     <footer className='footer'>
        <img src={LogoWhite} alt="Kasa logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
export default Footer;