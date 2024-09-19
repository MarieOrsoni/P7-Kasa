import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/index.jsx";

//import Header from "./components/Header/header.jsx";
import Error404 from "../../pages/Error/index.jsx";
import AboutUs from "../../pages/about-us/about-us.jsx";
//import about-us from "../../pages/about-us/about-us.jsx";
import PortfolioGallery from "../Portfolio/index.jsx";
import PropertyDetails from "../../pages/Accommodation/index.jsx";
//import Error404 from "./pages/Error/index.jsx";
//import Footer from "./components/Footer/index.jsx";

//import AboutUs from "./pages/AboutUs/AboutUs.jsx";
//import PortfolioGallery from "./components/Portfolio/index.jsx";
//import PropertyDetails from "./pages/Accommodation/index.jsx";

function routerComponent () {
    return ( 
<Routes> 
      <Route path="/" element={<Home />} exact />    
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/Accommodation/:id" element={<PropertyDetails />} />
      <Route path="/Portfolio" element={<PortfolioGallery />}/>
      <Route path="*" element={<Error404 />} />
      
    </Routes>
    
    );
     }
     export default routerComponent;