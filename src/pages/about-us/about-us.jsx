import OurValues from "../../components/AboutUs/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import imagesource2 from "../../assets/imagesource2.png";


function AboutUs () {
    return ( 
    <main> 
    <Banner imageSrc={imagesource2} altText="paysage de montagne">
    </Banner>
    <OurValues />
    </main>
    );

}
export default AboutUs;