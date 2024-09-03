import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

function Error () {
    return ( 
    <div> 
    <Banner />
    <h1>404</h1>
    <p>Oups! La page que vous demandez nexiste pas.</p>
    <Footer />
    </div>
    );
};
export default Error;