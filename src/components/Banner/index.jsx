import imagesource1 from '../../assets/imagesource1.png';
import './banner.scss'

function Banner () {
    return (
        <div className='banner'>
        <img className="bannerimg" src={imagesource1} alt="paysage cotier"/>
        <p>Chez vous, partout et ailleurs</p>
         
        </div>
    );
}
export default Banner;