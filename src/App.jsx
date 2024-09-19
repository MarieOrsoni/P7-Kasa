import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Header from "./components/Header/header.jsx";
import Error404 from "./pages/Error/index.jsx";
import Footer from "./components/Footer/index.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import PortfolioGallery from "./components/Portfolio/index.jsx";
import PropertyDetails from "./pages/Accommodation/index.jsx";


import './styles/App.scss'

function App() {
  return (
      <div className=".main-container">
     <BrowserRouter> 
     <Header />

      <Routes> 
      <Route path="/" element={<Home />} exact />    
      <Route path="/Footer" element={<Footer />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Accommodation/:id" element={<PropertyDetails />} />
      <Route path="/Portfolio" element={<PortfolioGallery />}/>

      <Route path="*" element={<Error404 />} />
      
      </Routes>
      <Footer />
      </BrowserRouter>
      </div>
  );
}
export default App;