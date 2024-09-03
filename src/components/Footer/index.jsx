import LogoWhite from '../../assets/LogoWhite.png'
import './index.scss'

function Footer() {
    return (
        <div className='footer'>
        <img src={LogoWhite} alt="Kasa logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}
export default Footer;